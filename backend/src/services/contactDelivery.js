const nodemailer = require("nodemailer")

class DeliveryNotConfigured extends Error {}

function required(...names) {
  if (names.some(name => !process.env[name])) throw new DeliveryNotConfigured("Missing delivery configuration")
}

function messageText(fields) {
  return `פנייה חדשה מאתר MSR Doctors\nשם מלא: ${fields.fullName}\nמייל: ${fields.email}\nטלפון: ${fields.phone}\nתיאור הפנייה: ${fields.message || "לא נכתב תיאור"}`
}

async function sendEmail(fields) {
  required("SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM")
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 15000, greetingTimeout: 15000, socketTimeout: 20000
  })
  const recipient = process.env.CONTACT_EMAIL || "Msrdoctors4@gmail.com"
  const result = await transport.sendMail({
    from: process.env.SMTP_FROM,
    to: recipient,
    replyTo: fields.email,
    subject: "פנייה חדשה – MSR Doctors",
    text: messageText(fields)
  })
  if (!result.accepted?.length) throw new Error("Mail server did not accept the message")
}

async function sendWhatsApp(fields) {
  // Business notifications use a Meta-approved template with three body variables:
  // {{1}} full name, {{2}} email, {{3}} phone. Sender must differ from recipient.
  required("WHATSAPP_TOKEN", "WHATSAPP_PHONE_NUMBER_ID", "WHATSAPP_API_VERSION", "WHATSAPP_TEMPLATE_NAME", "WHATSAPP_TEMPLATE_LANGUAGE")
  const version = process.env.WHATSAPP_API_VERSION
  const sender = process.env.WHATSAPP_PHONE_NUMBER_ID
  if (!/^v\d+\.\d+$/.test(version) || !/^\d+$/.test(sender)) throw new DeliveryNotConfigured("Invalid WhatsApp configuration")
  const response = await fetch(`https://graph.facebook.com/${version}/${sender}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`, "Content-Type": "application/json" },
    signal: AbortSignal.timeout(20000),
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: process.env.CONTACT_WHATSAPP || "972525156386",
      type: "template",
      template: {
        name: process.env.WHATSAPP_TEMPLATE_NAME,
        language: { code: process.env.WHATSAPP_TEMPLATE_LANGUAGE },
        components: [{ type: "body", parameters: [fields.fullName, fields.email, fields.phone].map(text => ({ type: "text", text: text.replace(/\s+/g, " ") })) }]
      }
    })
  })
  const result = await response.json().catch(() => ({}))
  if (!response.ok || !result.messages?.[0]?.id) throw new Error("WhatsApp provider rejected the request")
}

async function sendContact(channel, fields) {
  if (channel === "email") return sendEmail(fields)
  if (channel === "whatsapp") return sendWhatsApp(fields)
  throw new Error("Invalid channel")
}

module.exports = { sendContact, DeliveryNotConfigured }
