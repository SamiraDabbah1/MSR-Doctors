
export default function DoctorVisit() {
  return (
    <>
<article className="service-card" id="doctor-visit">
  <div className="service-heading">
    <span className="icon">
      <svg>
        <use href="#stethoscope"/>
      </svg>
    </span>
    <h3>
      ביקור רופא עד הבית
    </h3>
  </div>
  <p className="service-intro">בדיקה, הערכה רפואית והמלצות להמשך — אצלכם בבית.</p>
  <details className="service-details">
    <summary>לפרטים נוספים <span aria-hidden="true">←</span></summary>
    <div className="service-description">
  <p>
    רופא מגיע עד לבית המטופל לצורך בדיקה רפואית, הערכת המצב ומתן המלצות להמשך טיפול בהתאם לממצאים ולשיקול הדעת הרפואי.
  </p>
  <p>
    השירות מתאים למקרים שבהם יש צורך בבדיקה רפואית בנוחות הבית, וכן למטופלים המתקשים להגיע למרפאה.
  </p>
    </div>
  </details>
</article>
    </>
  )
}
