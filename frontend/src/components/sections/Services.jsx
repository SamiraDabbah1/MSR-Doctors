import Wegovy from "./services/Wegovy"
import AddictionCare from "./services/AddictionCare"
import BloodTests from "./services/BloodTests"
import DoctorVisit from "./services/DoctorVisit"
import Ecg from "./services/Ecg"
import FluCovid from "./services/FluCovid"
import Infusion from "./services/Infusion"
import Sutures from "./services/Sutures"
import VitaminInfusion from "./services/VitaminInfusion"
export default function Services() {
  return (
    <>
<section className="section services" id="services">
  <div className="services-banner"><div className="container"><h2>הרפואה שלנו.<br/>הנוחות שלכם.</h2><p>שירות רפואי מקצועי מגיע אליכם</p></div></div>
  <div className="container">
    <div className="section-head">
      <span className="section-label">
        השירותים שלנו
      </span>
      <h2>
        שירותים רפואיים אצלכם בבית
      </h2>
      <p>
        ב־MSR Doctors אנו מביאים מגוון שירותים רפואיים ישירות אליכם הביתה, במטרה לאפשר קבלת טיפול מקצועי, נוח ואישי – ללא צורך בהגעה למרפאה או בהמתנה ממושכת.
      </p>
    </div>
    <div className="cards">
      <DoctorVisit />
      <Infusion />
      <VitaminInfusion />
      <BloodTests />
      <Sutures />
      <Ecg />
      <FluCovid />
      <AddictionCare />
      <Wegovy />
    </div>
  </div>
</section>
    </>
  )
}
