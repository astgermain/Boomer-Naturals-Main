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
import "../styles/hero.css"

const Hero = () => {

  let leftSlide1 = 
      <div className="slider-responsive">
        <div className="sub-text-main">Need a Face Mask?</div>
        <div className="text-main">We've Got You Covered</div>
        <Link to="/">
            <button className="main-site-button">
            <span className="button-text">Learn More</span> 
            <svg width="25px" height="25px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Group 11</title>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Product-Page-Copy-7" transform="translate(-499.000000, -416.000000)">
                        <rect id="Rectangle-Copy-47" fill="#00A0C5" x="341" y="408" width="206" height="49" rx="24.5"></rect>
                        <g id="Group-11" transform="translate(499.000000, 416.000000)">
                            <path d="M17,34 C7.61115925,34 0,26.3888407 0,17 C0,7.61115925 7.61115925,0 17,0 C26.3888407,0 34,7.61115925 34,17 C34,26.3888407 26.3888407,34 17,34 Z" id="Path-Copy-5" fill="#FFFFFF"></path>
                            <polygon id="icon" fill="#26293E" points="19.7505352 19.0933354 9 19.0933354 9 15.9066646 19.7505352 15.9066646 16.007652 12.2533166 18.3161922 10 26 17.5 18.3161922 25 16.007652 22.7466834"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
            </button>
        </Link>
      </div>;

       let leftSlide2 = 
       <div className="slider-responsive">
         <div className="sub-text-main">Pick From Our Varients</div>
         <div className="text-main">Let's Shop Masks</div>
         <Link to="/">
             <button className="main-site-button">
             <span className="button-text">Learn More</span> 
             <svg width="25px" height="25px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                 <title>Group 11</title>
                 <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                     <g id="Product-Page-Copy-7" transform="translate(-499.000000, -416.000000)">
                         <rect id="Rectangle-Copy-47" fill="#00A0C5" x="341" y="408" width="206" height="49" rx="24.5"></rect>
                         <g id="Group-11" transform="translate(499.000000, 416.000000)">
                             <path d="M17,34 C7.61115925,34 0,26.3888407 0,17 C0,7.61115925 7.61115925,0 17,0 C26.3888407,0 34,7.61115925 34,17 C34,26.3888407 26.3888407,34 17,34 Z" id="Path-Copy-5" fill="#FFFFFF"></path>
                             <polygon id="icon" fill="#26293E" points="19.7505352 19.0933354 9 19.0933354 9 15.9066646 19.7505352 15.9066646 16.007652 12.2533166 18.3161922 10 26 17.5 18.3161922 25 16.007652 22.7466834"></polygon>
                         </g>
                     </g>
                 </g>
             </svg>
             </button>
         </Link>
       </div>;

        let leftSlide3 = 
        <div className="slider-responsive">
          <div className="sub-text-main">Free Shipping!</div>
          <div className="text-main">All Orders Over $50</div>
          <Link to="/">
              <button className="main-site-button">
              <span className="button-text">Learn More</span> 
              <svg width="25px" height="25px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>Group 11</title>
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Product-Page-Copy-7" transform="translate(-499.000000, -416.000000)">
                          <rect id="Rectangle-Copy-47" fill="#00A0C5" x="341" y="408" width="206" height="49" rx="24.5"></rect>
                          <g id="Group-11" transform="translate(499.000000, 416.000000)">
                              <path d="M17,34 C7.61115925,34 0,26.3888407 0,17 C0,7.61115925 7.61115925,0 17,0 C26.3888407,0 34,7.61115925 34,17 C34,26.3888407 26.3888407,34 17,34 Z" id="Path-Copy-5" fill="#FFFFFF"></path>
                              <polygon id="icon" fill="#26293E" points="19.7505352 19.0933354 9 19.0933354 9 15.9066646 19.7505352 15.9066646 16.007652 12.2533166 18.3161922 10 26 17.5 18.3161922 25 16.007652 22.7466834"></polygon>
                          </g>
                      </g>
                  </g>
              </svg>
              </button>
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
