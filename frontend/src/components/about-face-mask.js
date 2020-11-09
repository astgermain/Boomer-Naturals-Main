import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/about-face-mask.css"
import MainButton from "./main-button"

import MastImg from "../../content/assets/mask.png"
import MiniInfoModal from "./mini-info-modal"

const AboutFaceMask = () => {

    const [btnState, setBtnState] = useState({
        btnOne: "hide",
        btnTwo: "hide",
        btnThree: "hide",
        btnFour: "hide",
    })

    const handleHoverEvent = hoveredBtn => {
        const changeBtnState = btn =>
            btnState[btn] == "hide"
                ?
                setBtnState({ ...btnState, [btn]: "show" })
                :
                setBtnState({ ...btnState, [btn]: "hide" })

        switch (hoveredBtn) {
            case 1:
                changeBtnState("btnOne")
                break;
            case 2:
                changeBtnState("btnTwo")
                break;
            case 3:
                changeBtnState("btnThree")
                break;
            case 4:
                changeBtnState("btnFour")
                break;
            default:
                break;
        }
    }

    return (
        <section className="about-face-mask-section">
            <h4>About Our Face Mask</h4>
            <div className="image-container">
                <img src={MastImg} alt="Boomer Naturals Mask Information" width="100%" height="auto" />
                <span
                    onMouseEnter={() => handleHoverEvent(1)}
                    onMouseLeave={() => handleHoverEvent(1)}
                    className="pulse-btn pulse-btn-1"
                >
                    <MiniInfoModal currBtnState={btnState.btnOne}>
                        This will say something
                    </MiniInfoModal>
                </span>
                <span
                    className="pulse-btn pulse-btn-2"
                    onMouseEnter={() => handleHoverEvent(2)}
                    onMouseLeave={() => handleHoverEvent(2)}
                >
                    <MiniInfoModal currBtnState={btnState.btnTwo}>
                        This will say something
                    </MiniInfoModal>
                </span>
                <span
                    className="pulse-btn pulse-btn-3"
                    onMouseEnter={() => handleHoverEvent(3)}
                    onMouseLeave={() => handleHoverEvent(3)}
                >
                    <MiniInfoModal currBtnState={btnState.btnThree}>
                        This will say something
                    </MiniInfoModal>
                </span>
                <span
                    className="pulse-btn pulse-btn-4"
                    onMouseEnter={() => handleHoverEvent(4)}
                    onMouseLeave={() => handleHoverEvent(4)}
                >
                    <MiniInfoModal currBtnState={btnState.btnFour}>
                        This will say something
                    </MiniInfoModal>
                </span>
            </div>
            <div className="extra-info-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus corporis</p>
                <div className="redirect-btns">
                    <MainButton text="Learn More" />
                    <Link to="/">Customize Mask</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutFaceMask