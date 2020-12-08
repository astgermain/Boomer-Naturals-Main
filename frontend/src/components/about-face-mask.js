import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/about-face-mask.css"
import MainButton from "./main-button"
import MaskImg from "../../content/assets/mask.png"
import { Slide } from "react-awesome-reveal"

const AboutFaceMask = () => {

    const [btnState, setBtnState] = useState("Click on a button to learn more about our face masks. It's really exciting.")

    const handleHoverEvent = hoveredBtn => {
        
        switch (hoveredBtn) {
            case 1:
                setBtnState(<Slide triggerOnce={true} direction="right">"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus corporis"</Slide>)
                break;
            case 2:
                setBtnState(<Slide triggerOnce={true} direction="up">"Perspiciatis voluptatibus corporis 2 Lorem ipsum dolor sit amet consectetur adipisicing elit."</Slide>)
                break;
            case 3:
                setBtnState(<Slide triggerOnce={true} direction="left">"sit amet consectetur adipisicing elit. Perspiciatis voluptatibus corporis 3 Lorem ipsum dolor"</Slide>)
                break;
            case 4:
                setBtnState(<Slide triggerOnce={true} direction="down">"amet consectetur adipisicing elit. 3 Lorem ipsum dolor sit  Perspiciatis voluptatibus corporis"</Slide>)
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
                    <Link to="/">Customize Mask</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutFaceMask