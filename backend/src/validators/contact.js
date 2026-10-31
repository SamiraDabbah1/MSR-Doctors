// Validate on the server as well as in the browser.
function validateContact(body) {
  if (!body || typeof body !== "object") throw new Error("יש למלא את כל השדות.")
  const contact = {}
  for (const key of ["fullName", "email", "phone"]) {
    if (typeof body[key] !== "string") throw new Error("יש למלא את כל השדות.")
    contact[key] = body[key].trim()
  }
  if (contact.fullName.length < 2 || contact.fullName.length > 100) throw new Error("יש להזין שם מלא באורך 2–100 תווים.")
  if (contact.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) throw new Error("יש להזין כתובת מייל תקינה.")
  const digits = contact.phone.replace(/\D/g, "")
  if (!/^[+0-9() .-]{7,25}$/.test(contact.phone) || digits.length < 7 || digits.length > 15) throw new Error("יש להזין מספר טלפון תקין.")
  if (body.message !== undefined && typeof body.message !== "string") throw new Error("יש להזין תיאור פנייה בטקסט.")
  contact.message = (body.message || "").trim()
  if (contact.message.length > 1000) throw new Error("תיאור הפנייה מוגבל ל־1000 תווים.")
  return contact
}
module.exports = { validateContact }
