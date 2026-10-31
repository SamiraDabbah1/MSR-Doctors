import Waves from "../Waves"

export default function HowItWorks() {
  return (
    <>
<section className="section steps-section" id="how">
  <div className="container">
    <div className="section-head">
      <span className="section-label">
        איך זה עובד?
      </span>
      <h2>
        פשוט, מהיר ונוח – בלי לצאת מהבית.
      </h2>
    </div>
    <div className="steps">
      <div className="step">
        <span className="step-decoration" aria-hidden="true"><svg><use href="#stethoscope" /></svg></span>
        <h3>
          יוצרים איתנו קשר
        </h3>
        <p>
          מתקשרים או משאירים פרטים ומספרים לנו בקצרה איזה שירות רפואי אתם צריכים.
        </p>
      </div>
      <div className="step">
        <span className="step-decoration" aria-hidden="true"><svg><use href="#vial" /></svg></span>
        <h3>
          מתאמים את השירות
        </h3>
        <p>
          הצוות שלנו מקבל את הפרטים, בודק את הצורך ומתאם עבורכם את השירות המתאים בהתאם לזמינות ולמיקום.
        </p>
      </div>
      <div className="step">
        <span className="step-decoration" aria-hidden="true"><svg><use href="#heart" /></svg></span>
        <h3>
          אנחנו מגיעים אליכם
        </h3>
        <p>
          רופא או איש צוות רפואי מגיע עד הבית עם הציוד הנדרש בהתאם לשירות שהוזמן – בלי נסיעות ובלי המתנה ממושכת בחדרי המתנה.
        </p>
      </div>
      <div className="step">
        <span className="step-decoration" aria-hidden="true"><svg><use href="#bandage" /></svg></span>
        <h3>
          מקבלים טיפול אישי בבית
        </h3>
        <p>
          הבדיקה או הטיפול מתבצעים בסביבה הביתית והנוחה שלכם, עם יחס אישי ותשומת לב לצרכים שלכם.
        </p>
      </div>
      <div className="step">
        <span className="step-decoration" aria-hidden="true"><svg><use href="#test" /></svg></span>
        <h3>
          ממשיכים מכאן בביטחון
        </h3>
        <p>
          בסיום הביקור תקבלו הסבר והמלצות להמשך בהתאם לממצאים ולשיקול הדעת הרפואי.
        </p>
      </div>
    </div>
  </div>
  <div className="steps-cta"><a className="btn btn-primary" href="#contact">הזמינו ביקור רופא <span aria-hidden="true">←</span></a></div>
  <Waves />
</section>
    </>
  )
}
