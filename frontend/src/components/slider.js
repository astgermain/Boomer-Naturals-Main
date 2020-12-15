/**
 * Slider Component
 *  
 * 
 */

import React from "react"
import ReactSlider from "react-slick";


const Slider = ({dotsVal, speed, autoplay, arrowsVal, slide1, slide2, slide3}) => {
    const settings = {
        dots: dotsVal,
        fade: 1,
        arrows: arrowsVal,
        infinite: true,
        autoplay: autoplay,
        lazyLoad: true,
        speed: speed,
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
                {slide2 !== undefined ?
                    <div>
                        {slide2}       
                    </div>
                    :
                    null
                }
                
                {/* End Slide 2 */}

                {/* Start Slide 3 */}
                {slide3 !== undefined ?
                    <div>
                        {slide3}       
                    </div>
                    :
                    null
                }
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