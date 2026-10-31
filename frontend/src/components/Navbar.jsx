import { CONTACT } from "../config/contact.js"
import { useState } from "react"
import logo from "../assets/msr-logo.png"

// Sticky, opaque header: content cannot show through while scrolling.
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [["about", "אודותינו"], ["services", "השירותים שלנו"], ["why", "למה אנחנו?"], ["how", "איך זה עובד?"], ["contact", "יצירת קשר"]]
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="MSR Doctors – לעמוד הראשי">
          <img className="header-logo" src={logo} width="84" height="59" alt="" />
          <span><span className="brand-name">MSR Doctors</span><span className="brand-sub">MEDICAL SERVICES LTD</span></span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <nav className={`nav ${open ? "open" : ""}`} id="main-nav" aria-label="ניווט ראשי">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <a className="btn btn-primary header-cta" href={CONTACT.phoneHref}>התקשרו להזמנת רופא <span aria-hidden="true">←</span></a>
      </div>
    </header>
  )
}
