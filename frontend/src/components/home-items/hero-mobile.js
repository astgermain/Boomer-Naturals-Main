/**
 * Hero Mobile Component
 * mobile component appears at breakpoint 768px
 *
 * Add banners to content/assets, then import and create a Link component with the image inside of it
 * The image css class is:
 *
 */

import React from "react"
import { Link } from "gatsby"
import b1 from "../../../content/assets/new.jpg"
import b2 from "../../../content/assets/banner2.jpg"
import b3 from "../../../content/assets/banner3.jpg"
import Slider from "../slider"
import { HERO_CSS } from "../../util/imports"

const HeroMobile = () => {

  let rightMobileSlide1 = (
    <div>
      <Link to="/">
        <img src={b1} alt="banner1" className="" />
      </Link>
    </div>
  )
//   let rightMobileSlide2 = (
//     <div>
//       <Link to="/">
//         <img src={b2} alt="banner2" className="" />
//       </Link>
//     </div>
//   )
//   let rightMobileSlide3 = (
//     <div>
//       <Link to="/">
//         <img src={b3} alt="banner3" className="" />
//       </Link>
//     </div>
//   )

  return (
    <section className="hero-mobile-container">
      {/* 
      <div className="hero-left">
        <Slider dotsVal={false} autoplay={true} autoplaySpeed={3000} arrowsVal={false} slide1={leftSlide1} slide2={leftSlide2} slide3={leftSlide3} />
      </div>
       */}

      <div className="hero-mobile-right">
        <Slider
          dotsVal={true}
          autoplay={true}
          autoplaySpeed={1500}
          arrowsVal={false}
          slide1={rightMobileSlide1}
        //   slide2={rightMobileSlide2}
        //   slide3={rightMobileSlide3}
        />
      </div>
    </section>
  )
}

HeroMobile.defaultProps = {}

HeroMobile.propTypes = {}

export default HeroMobile
