/**
 * Slider Component
 *  
 * 
 */

import React from "react"
import ReactSlider from "react-slick";
import { Link } from "gatsby"
import logo from "../../content/assets/bnlogoheader.png"

const Slider = ({dotsVal, arrowsVal, slide1, slide2, slide3}) => {
    const settings = {
        dots: dotsVal,
        fade: 1,
        arrows: arrowsVal,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-container">
            <ReactSlider {...settings}>
                {/* Start Slide 1 */}
                <div>
                    {slide1}
                </div>
                {/* End Slide 1 */}

                {/* Start Slide 2 */}
                <div>
                    {slide2}       
                </div>
                {/* End Slide 2 */}

                {/* Start Slide 3 */}
                <div>
                    {slide3}  
                </div>
                {/* End Slide 3 */}
            </ReactSlider>
        </div>
    )
}

Slider.defaultProps = {
}

Slider.propTypes = {
}

export default Slider