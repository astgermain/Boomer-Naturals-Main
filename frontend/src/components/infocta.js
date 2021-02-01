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
    subtextProp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    buttontextProp: `Learn More`

}

Infocta.propTypes = {
    maintextProp: propTypes.string,
    subtextProp: propTypes.string,
    buttontextProp: propTypes.string
}










export default Infocta
