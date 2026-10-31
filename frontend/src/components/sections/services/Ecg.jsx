
export default function Ecg() {
  return (
    <>
<article className="service-card" id="ecg">
  <div className="service-heading">
    <span className="icon">
      <svg>
        <use href="#heart"/>
      </svg>
    </span>
    <h3>
      אק״ג עד הבית
    </h3>
  </div>
  <p className="service-intro">רישום הפעילות החשמלית של הלב בנוחות הבית.</p>
  <details className="service-details">
    <summary>לפרטים נוספים <span aria-hidden="true">←</span></summary>
    <div className="service-description">
  <p>
    ביצוע בדיקת אק״ג (ECG) בבית המטופל לצורך רישום הפעילות החשמלית של הלב.
  </p>
  <p>
    השירות מאפשר לבצע את הבדיקה בנוחות הבית ולקבל הערכה רפואית בהתאם לממצאים ולמצבו של המטופל. במקרים המחייבים בירור או טיפול דחוף תינתן המלצה להמשך טיפול בהתאם לצורך.
  </p>
    </div>
  </details>
</article>
    </>
  )
}
