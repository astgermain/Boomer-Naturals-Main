import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/about-face-mask.css"
import MainButton from "./main-button"

import MastImg from "../../content/assets/mask.png"

const AboutFaceMask = () => {
    return (
        <section className="about-face-mask-section">
            <h4>About Our Face Mask</h4>
            <div className="image-container">
                <img src={MastImg} alt="Boomer Naturals Mask Information" width="100%" height="auto"/>
                <span className="pulse-btn pulse-btn-1"></span>
                <span className="pulse-btn pulse-btn-2"></span>
                <span className="pulse-btn pulse-btn-3"></span>
                <span className="pulse-btn pulse-btn-4"></span>
            </div>
            <div className="extra-info-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus corporis</p>
                <div className="redirect-btns">
                    <MainButton text="Learn More"/>
                    <Link to="/">Customize Mask</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutFaceMask