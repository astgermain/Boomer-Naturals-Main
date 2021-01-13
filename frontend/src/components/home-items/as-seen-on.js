/**
 * As Seen On Logo Component
 */
import React from "react"
import "../../styles/as-seen-on.css"
import logo1 from "../../../content/assets/pgalogo.jpg"
import logo2 from "../../../content/assets/espnlogo.jpg"
import logo3 from "../../../content/assets/espn2logo.jpg"
import logo4 from "../../../content/assets/nbcsportslogo.jpg"
import logo5 from "../../../content/assets/foxbusinesslogo.jpg"
import logo6 from "../../../content/assets/fox5logo.jpg"

const AsSeenOn = () => {
  return (
    <section className="asseenon-container">
      <img src={logo1} alt="PGA-Magazine-Logo" className="" />

      <img src={logo2} alt="ESPN-Logo" className="" />

      <img src={logo3} alt="ESPN-2-Logo" className="" />

      <img src={logo4} alt="NBC-Sports" className="" />

      <img src={logo5} alt="Fox-Business" className="" />

      <img src={logo6} alt="Fox-5" className="" />
    </section>
  )
}

export default AsSeenOn
