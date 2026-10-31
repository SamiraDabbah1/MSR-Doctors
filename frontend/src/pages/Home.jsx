import Navbar from "../components/Navbar"
import Icons from "../components/sections/Icons"
import QuickServices from "../components/sections/QuickServices"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Services from "../components/sections/Services"
import WhyUs from "../components/sections/WhyUs"
import HowItWorks from "../components/sections/HowItWorks"
import Contact from "../components/sections/Contact"
import "../App.css"

// Each section lives in its own file so text and layout are easy to edit.
export default function Home() {
  return (
    <div dir="rtl">
      <Icons />
      <Navbar />
      <main id="top">
        <Hero />
        <QuickServices />
        <About />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Contact />
      </main>
    </div>
  )
}
