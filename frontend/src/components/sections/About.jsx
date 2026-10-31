import MedicalIcon from "../MedicalIcon"

export default function About() {
  return (
    <>
<section className="section" id="about">
  <div className="container about-grid">
    <div className="about-copy">
      <span className="section-label">
        אודותינו
      </span>
      <h2>
        הבריאות שלכם — המטרה שלנו
      </h2>
      <p>
        <strong>
          MSR Doctors – Medical Services Ltd
        </strong>
        היא חברה לשירותי רפואה פרטיים המתמחה בשירותי ביקור רופא עד הבית.
      </p>
      <p>
        אנו מאמינים שטיפול רפואי איכותי מתחיל בהקשבה, מקצועיות ויחס אישי. לכן אנו מביאים את השירות הרפואי ישירות אל המטופל ומאפשרים לקבל בדיקה והערכה רפואית בסביבה הביתית, בנוחות ובפרטיות.
      </p>
      <p>
        צוות הרופאים שלנו פועל מתוך מחויבות למקצועיות, אמינות ושירות ברמה גבוהה.
      </p>
    </div>
    <div className="about-card">
      <div className="about-photo" role="img" aria-label="סביבה רפואית בהירה וציוד רפואי" />
      <strong>
        MSR Doctors – הרפואה מגיעה אליכם
      </strong>
      <small>
        טיפול מקצועי. בנוחות הבית.
      </small>
    </div>
  </div>
  <div className="container about-values">
    {[['shield','מקצועיות','מחויבות לרפואה מקצועית ואמינה'],['heart','אכפתיות','יחס אישי והקשבה לכל מטופל'],['clock','נוחות','השירות הרפואי מגיע עד הבית'],['users','ליווי אישי','הסבר ברור והמלצות להמשך']].map(([icon,title,text]) => <div key={icon}><MedicalIcon name={icon}/><h3>{title}</h3><p>{text}</p></div>)}
  </div>
</section>
    </>
  )
}
