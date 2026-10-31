import ContactActions from "../ContactActions"
import MedicalIcon from "../MedicalIcon"
export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="container hero-inner">
      <div className="hero-content">
        <h1 id="hero-title" dir="ltr">MSR <span>Doctors</span></h1>
        <h2>שירותי רפואה מקצועיים, קרובים אליכם.</h2>
        <p className="hero-copy">אנחנו כאן כדי להביא את השירות הרפואי עד אליכם — עם הקשבה, מקצועיות ויחס אישי, בנוחות הבית.</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#contact"><MedicalIcon name="calendar"/>הזמינו ביקור רופא<span aria-hidden="true">←</span></a></div>
        <ContactActions />
      </div>
      <div className="hero-note" aria-hidden="true">בריאות<br/>זה הבית שלנו <span>♡</span></div>
    </div>
  </section>
}
