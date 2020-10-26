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
import herol1 from "../../content/assets/bnlogoheader.png"

const Hero = () => {
  
  return (
    <div className="hero-container">
        <div className="hero-left">
            <Link to="/"><img src={herol1} alt="" className="header-logo" /></Link>
        </div>
        <div className="hero-right">
            <Link to="/">Home</Link>
        </div>     
    </div>
  )
}

Hero.defaultProps = {
}

Hero.propTypes = {
}

export default Hero
