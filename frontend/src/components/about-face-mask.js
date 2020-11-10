import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link, StaticQuery } from "gatsby"
import "../styles/about-face-mask.css"
import MainButton from "./main-button"

import MaskImg from "../../content/assets/mask.png"

const AboutFaceMask = () => {

    const [btnState, setBtnState] = useState("1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus corporis")

    const handleHoverEvent = hoveredBtn => {

        switch (hoveredBtn) {
            case 1:
                setBtnState("1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus corporis")
                break;
            case 2:
                setBtnState("2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus corporis")
                break;
            case 3:
                setBtnState("3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus corporis")
                break;
            case 4:
                setBtnState("4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus corporis")
                break;
            default:
                break;
        }
    }

    return (
        <section className="about-face-mask-section">
            <h4>About Our Face Mask</h4>
            <div className="image-container">
                <img src={MaskImg} alt="Boomer Naturals Mask Information" width="100%" height="auto" />
                <div
                    onClick={() => handleHoverEvent(1)}
                    className="pulse-btn pulse-btn-1"
                >
                    <span>+</span>
                </div>
                <div
                    className="pulse-btn pulse-btn-2"
                    onClick={() => handleHoverEvent(2)}
                >
                    <span>+</span>
                </div>
                <div
                    className="pulse-btn pulse-btn-3"
                    onClick={() => handleHoverEvent(3)}
                >
                    <span>+</span>
                </div>
                <div
                    className="pulse-btn pulse-btn-4"
                    onClick={() => handleHoverEvent(4)}
                >
                    <span>+</span>
                </div>
            </div>
            <div className="extra-info-container">
                <p>{btnState}</p>
                <div className="redirect-btns">
                    <MainButton text="Learn More" />
                    <Link to="/">Customize Mask</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutFaceMask