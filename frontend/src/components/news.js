import React from 'react'
import Infocta from './infocta'
import Slider from './slider'

//Props:  svgProp, maintextProp, subtextProp, buttontextProp
// URLS: [https://www.youtube.com/embed/dQw4w9WgXcQ, https://www.youtube.com/embed/L_jWHffIx5E, https://www.youtube.com/embed/cE0wfjsybIQ]
const VidIframe = ({ url }) => (
    <iframe
        width="420"
        height="315"
        title="Boomer News Video"
        style={{ border: 'none' }}
        src={url}
    ></iframe>
)

const News = () => {
    const videoSVG = "insert svg for InfoCTA prop here"
    return (
        <section>
            <Slider
                dotsVal={true}
                speed={750}
                autoplay={false}
                arrowsVal={false}
                slide1={<VidIframe url="https://www.youtube.com/embed/dQw4w9WgXcQ" />}
                slide2={<VidIframe url="https://www.youtube.com/embed/L_jWHffIx5E" />}
                slide3={<VidIframe url="https://www.youtube.com/embed/cE0wfjsybIQ" />}
            />
            <Infocta
                maintextProp="In The News"
            />
        </section>
    )
}

export default News