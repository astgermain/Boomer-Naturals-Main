/**
 * Info CTA Component 
 */
import React, { useState, useEffect } from "react"
import propTypes from 'prop-types'
import { INFOCTA_CSS } from "../util/imports"
import MainButton from "./main-button"

const Infocta = ({ svgProp, maintextProp, subtextProp, buttontextProp }) => {
    const [svg ] = useState("");
    const [maintext] = useState("");
    const [subtext] = useState("");
    const [buttontext] = useState("");

    useEffect(() => {

    }, [svg, maintext, subtext, buttontext])

    return (


        <div className="infocta-container">

            <div className="infocta-svg">{svgProp}</div>

            <div id="infocta-text-main" className="text-main">{maintextProp}</div>

            <div className="grey-line"></div>

            <div id="infocta-text-sub" className="sub-text-main">{subtextProp}</div>

            <MainButton text={buttontextProp} />

        </div>



    )
}





Infocta.defaultProps = {
    svgProp: `svg image`,
    maintextProp: `Share Your Story`,
    subtextProp: `We’d love to hear from the people that matter most, our customers. Feel free to share your favorite pictures of you and your family on social media.
    `,
    buttontextProp: `Learn More`

}

Infocta.propTypes = {
    maintextProp: propTypes.string,
    subtextProp: propTypes.string,
    buttontextProp: propTypes.string
}










export default Infocta
