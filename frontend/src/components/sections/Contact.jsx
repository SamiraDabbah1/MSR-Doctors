import { useState } from "react"
import { createContactHref } from "../../utils/contactLinks.js"
import ContactActions from "../ContactActions"
import MedicalIcon from "../MedicalIcon"
import logo from "../../assets/msr-logo.png"

export default function Contact() {
  const [feedback, setFeedback] = useState("")
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)

  async function submitContact(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const values = new FormData(form)
    const details = {
      fullName: values.get("fullName"),
      email: values.get("email"),
      phone: values.get("phone"),
      message: values.get("message")
    }
    if (details.fullName.trim().length < 2 || details.phone.replace(/\D/g, "").length < 7) {
      setFeedback("יש להזין שם מלא ומספר טלפון תקין.")
      return
    }
    const channel = event.nativeEvent.submitter?.value || "whatsapp"
    setFailed(false)
    if (channel === "whatsapp") {
      setFeedback("תיפתח הודעת WhatsApp עם הפרטים. יש לאשר את השליחה שם.")
      window.location.href = createContactHref(channel, details)
      return
    }
    setBusy(true)
    setFeedback("שולחים את הפנייה במייל…")
    try {
      const response = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...details, channel: "email" })
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.message || "לא ניתן לשלוח כרגע. נסו שוב.")
      setFeedback(result.message)
      form.reset()
    } catch (error) {
      setFailed(true)
      setFeedback(error.message === "Failed to fetch" ? "לא ניתן להתחבר לשרת. נסו שוב." : error.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact-box">
        <div className="contact-heading"><span className="section-label">יצירת קשר</span>
        <h2>צריכים רופא עד הבית?</h2>
        <p>אנחנו כאן כדי להביא את השירות הרפואי אליכם.</p>
        <p className="company">MSR Doctors – Medical Services Ltd</p>
        <ContactActions />
        </div>
        <div className="contact-layout">
          <aside className="contact-visual">
            <span className="location-symbol"><MedicalIcon name="pin" /></span>
            <h3>אתם נשארים בבית.<br/>אנחנו מגיעים אליכם.</h3>
            <p>לבקשת שירות או לתיאום ביקור, השאירו פרטים ונשמח לחזור אליכם.</p>
            <img src={logo} alt="MSR Doctors" width="190" height="134" />
          </aside>
          <div className="contact-form-panel">
        <h3 className="contact-form-heading">איך נוכל לעזור לכם?</h3>
        <form className="contact-form" onSubmit={submitContact}>
          <label htmlFor="full-name">שם מלא
            <input id="full-name" name="fullName" type="text" autoComplete="name" placeholder="השם המלא שלכם" minLength="2" maxLength="100" required />
          </label>
          <label htmlFor="contact-email">כתובת מייל
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="name@example.com" dir="ltr" maxLength="254" required />
          </label>
          <label className="contact-phone-field" htmlFor="contact-phone">מספר טלפון
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="050-0000000" dir="ltr" pattern="[+0-9() .\\-]{7,25}" required />
          </label>
          <label htmlFor="contact-message">במה נוכל לעזור?
            <textarea id="contact-message" name="message" rows="3" maxLength="1000" placeholder="תיאור קצר של הבעיה או השירות המבוקש" />
          </label>
          <div className="contact-submit-actions">
            <button className="btn whatsapp-btn" type="submit" name="channel" value="whatsapp" disabled={busy}>שליחה ב־WhatsApp</button>
            <button className="btn btn-primary" type="submit" name="channel" value="email" disabled={busy}>{busy ? "שולחים…" : "שליחה במייל"}</button>
          </div>
          <p className="contact-help">במייל הפנייה נשלחת ישירות מהאתר. ב־WhatsApp תיפתח הודעה מוכנה, ויש לאשר את השליחה שם.</p>
          <p className={`form-status ${failed ? "error" : ""}`} role="status" aria-live="polite">{feedback}</p>
        </form>
          </div>
        </div>
      </div>
    </section>
  )
}
