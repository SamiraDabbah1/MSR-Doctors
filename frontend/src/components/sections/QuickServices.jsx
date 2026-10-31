import MedicalIcon from "../MedicalIcon"
import Waves from "../Waves"
const items = [
  ["stethoscope", "ביקור רופא", "בדיקה רפואית בנוחות הבית", "doctor-visit"],
  ["heart", "אק״ג עד הבית", "בדיקת פעילות הלב אצלכם", "ecg"],
  ["vial", "בדיקות דם", "לקיחת דגימה ללא יציאה מהבית", "blood-tests"],
  ["users", "טיפול וליווי בהתמכרות", "ליווי רפואי אישי ודיסקרטי", "addiction-care"],
  ["drop", "עירוי נוזלים עד הבית", "עירוי בבית בהתאם להנחיה רפואית", "infusion"]
]
export default function QuickServices() {
  return <section className="quick-services" aria-label="השירותים שלנו במבט מהיר">
    <div className="container quick-grid">{items.map(([icon,title,text,id]) => <a href={`#${id}`} className="quick-card" key={id}><span className="icon"><MedicalIcon name={icon}/></span><h2>{title}</h2><p>{text}</p><span className="card-arrow" aria-hidden="true">←</span></a>)}</div>
    <div className="container quick-promise"><span>בריאות שלמה.<br/>בנוחות הבית שלכם.</span><p>מקצועיות, הקשבה ויחס אישי — לאורך כל הדרך.</p></div>
    <Waves/>
  </section>
}
