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
                <img src={MastImg} alt="Boomer Naturals Mask Information"/>
                <span className="pulse-btn"></span>
                <span className="pulse-btn"></span>
                <span className="pulse-btn"></span>
                <span className="pulse-btn"></span>
            </div>
            <div className="extra-info-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus corporis, ratione blanditiis commodi eum repudiandae dolore deleniti laborum.</p>
                <div className="redirect-btns">
                    <MainButton text="Learn More"/>
                    <Link to="/">Customize Mask</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutFaceMask