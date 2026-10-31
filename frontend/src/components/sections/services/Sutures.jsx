
export default function Sutures() {
  return (
    <>
<article className="service-card" id="sutures">
  <div className="service-heading">
    <span className="icon">
      <svg>
        <use href="#bandage"/>
      </svg>
    </span>
    <h3>
      תפירות עד הבית
    </h3>
  </div>
  <p className="service-intro">הערכה וטיפול בפצעים וחתכים במקרים המתאימים לטיפול בבית.</p>
  <details className="service-details">
    <summary>לפרטים נוספים <span aria-hidden="true">←</span></summary>
    <div className="service-description">
  <p>
    הערכה וטיפול בפצעים וחתכים בבית המטופל, לרבות ביצוע תפירה במקרים המתאימים לכך מבחינה רפואית.
  </p>
  <p>
    לפני ביצוע הטיפול מתבצעת הערכה של הפצע על מנת לקבוע האם ניתן לטפל בו בבטחה בבית או שיש צורך בהפניה להמשך טיפול במסגרת רפואית מתאימה.
  </p>
    </div>
  </details>
</article>
    </>
  )
}
