import { CONTACT } from "../config/contact.js"

export function createContactHref(channel, details) {
  const message = [
    "שלום MSR Doctors, אשמח שתחזרו אליי.",
    `שם מלא: ${details.fullName.trim()}`,
    `מייל: ${details.email.trim()}`,
    `טלפון: ${details.phone.trim()}`,
    ...(details.message?.trim() ? [`תיאור הפנייה: ${details.message.trim()}`] : [])
  ].join("\n")
  if (channel === "whatsapp") return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
  if (channel === "email") return `mailto:${CONTACT.email}?subject=${encodeURIComponent("פנייה חדשה – MSR Doctors")}&body=${encodeURIComponent(message)}`
  throw new Error("Unknown contact channel")
}

export const directWhatsAppHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent("שלום MSR Doctors, אשמח לקבל פרטים ולתאם שירות עד הבית.")}`
