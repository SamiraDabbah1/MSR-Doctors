const { validateContact } = require("../validators/contact")
const delivery = require("../services/contactDelivery")

async function createContact(req, res) {
  let fields
  try { fields = validateContact(req.body) }
  catch (error) { return res.status(400).json({ message: error.message }) }
  const channel = req.body.channel
  if (!["email", "whatsapp"].includes(channel)) return res.status(400).json({ message: "יש לבחור מייל או WhatsApp." })
  try {
    await delivery.sendContact(channel, fields)
    return res.status(202).json({ message: "הפנייה הועברה לשירות השליחה בהצלחה." })
  } catch (error) {
    if (error instanceof delivery.DeliveryNotConfigured) return res.status(503).json({ message: "אפשרות הפנייה הזו אינה זמינה כרגע. נסו דרך פנייה אחרת או התקשרו אלינו." })
    // Never return provider responses, tokens or SMTP credentials to the browser.
    return res.status(502).json({ message: "לא התקבל אישור משירות השליחה. ניתן לפנות אלינו ישירות בטלפון." })
  }
}
module.exports = { createContact }
