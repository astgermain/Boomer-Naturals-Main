/**
 * Hero Component
 * 
 * Add banners to content/assets, then import and create a Link component with the image inside of it
 * The image css class is:   
 * 
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import b1 from "../../content/assets/banner3.jpg"
import b2 from "../../content/assets/banner2.jpg"
import b3 from "../../content/assets/banner3.jpg"
import Slider from "./slider"
import MainButton from "./main-button"
import "../styles/hero.css"

const Hero = () => {

  let leftSlide1 = 
      <div className="slider-responsive">
        <div className="sub-text-main">Need a Face Mask?</div>
        <div className="text-main">We've Got You Covered</div>
        <Link to="/404">
          <MainButton text="Learn More" />
        </Link>
      </div>;

       let leftSlide2 = 
       <div className="slider-responsive">
         <div className="sub-text-main">Pick From Our Varients</div>
         <div className="text-main">Let's Shop Masks</div>
         <Link to="/">
            <MainButton text="Learn More" />
         </Link>
       </div>;

        let leftSlide3 = 
        <div className="slider-responsive">
          <div className="sub-text-main">Free Shipping!</div>
          <div className="text-main">All Orders Over $50</div>
          <Link to="/">
              <MainButton text="Learn More" />
          </Link>
        </div>;

let rightSlide1 = 
<div>
  <Link to="/">
    <img src={b1} alt="banner1" className="" />
  </Link>
</div>;
let rightSlide2 = 
<div>
  <Link to="/">
    <img src={b2} alt="banner2" className="" />
  </Link>
</div>;
let rightSlide3 = 
<div>
  <Link to="/">
    <img src={b3} alt="banner3" className="" />
  </Link>
</div>;
 
  return (
    <section className="hero-container">
        <div className="hero-left">
          <Slider dotsVal={false} autoplay={true} autoplaySpeed={3000} arrowsVal={false} slide1={leftSlide1} slide2={leftSlide2} slide3={leftSlide3}/>
        </div>
        <div className="hero-right">
          <Slider dotsVal={true} autoplay={true} autoplaySpeed={1500} arrowsVal={false} slide1={rightSlide1} slide2={rightSlide2} slide3={rightSlide3}/>
        </div>     
    </section>
  )
}

Hero.defaultProps = {
}

Hero.propTypes = {
}

export default Hero
