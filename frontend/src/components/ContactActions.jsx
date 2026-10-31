import { CONTACT } from "../config/contact.js"
import { directWhatsAppHref } from "../utils/contactLinks.js"

export default function ContactActions() {
  return (
    <div className="direct-contact-actions">
      <a className="btn btn-primary" href={CONTACT.phoneHref}>התקשרו אלינו</a>
      <a className="btn whatsapp-btn" href={directWhatsAppHref} target="_blank" rel="noopener noreferrer">פנייה ב־WhatsApp</a>
    </div>
  )
}
