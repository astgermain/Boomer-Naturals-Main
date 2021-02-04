import React, { useState } from "react"
import { Link } from "gatsby"
import { ABOUT_FACE_MASK_CSS } from "../../util/imports"
import MainButton from "../main-button"
import MaskImg from "../../../content/assets/mask.png"
import { Slide } from "react-awesome-reveal"

const AboutFaceMask = () => {

    const [btnState, setBtnState] = useState("Click on a button to learn more about our face covers. It's really exciting.")

    const handleHoverEvent = hoveredBtn => {
        
        switch (hoveredBtn) {
            case 1:
                setBtnState(<Slide triggerOnce={true} direction="right">Our soft, safe material is a 65% cotton/35% polyester blend.
                </Slide>)
                break;
            case 2:
                setBtnState(<Slide triggerOnce={true} direction="up">Structured nose bridge to prevent slipping and glasses fogging.</Slide>)
                break;
            case 3:
                setBtnState(<Slide triggerOnce={true} direction="left">Three layers of silver-infused fabric to prevent droplets from spreading.</Slide>)
                break;
            case 4:
                setBtnState(<Slide triggerOnce={true} direction="down">Comfortable, adjustable earloops provide a custom fit and stay in place.</Slide>)
                break;
            default:
                break;
        }
    }

    return (
        <section className="about-face-mask-section">
            <h4>Find Your Perfect Fit</h4>
            <div className="image-container">
                <img src={MaskImg} alt="Boomer Naturals Mask Information" width="100%" height="auto" />
                <div
                    role = "button"
                    tabIndex={0}
                    onClick={() => handleHoverEvent(1)}
                    onKeyDown={() => handleHoverEvent(1)}
                    className="pulse-btn pulse-btn-1"
                >
                    <span>+</span>
                </div>
                <div
                    role = "button"
                    tabIndex={0}
                    className="pulse-btn pulse-btn-2"
                    onClick={() => handleHoverEvent(2)}
                    onKeyDown={() => handleHoverEvent(2)}
                >
                    <span>+</span>
                </div>
                <div
                    role = "button"
                    tabIndex={0}
                    className="pulse-btn pulse-btn-3"
                    onClick={() => handleHoverEvent(3)}
                    onKeyDown={() => handleHoverEvent(3)}
                >
                    <span>+</span>
                </div>
                <div
                    role = "button" 
                    tabIndex={0}
                    className="pulse-btn pulse-btn-4"
                    onClick={() => handleHoverEvent(4)}
                    onKeyDown={() => handleHoverEvent(4)}
                >
                    <span>+</span>
                </div>
            </div>
            <div className="extra-info-container">
                <p>{btnState}</p>
                <div className="redirect-btns">
                    <MainButton text="Learn More" />
                    <Link to="/">Customize Face Cover</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutFaceMask