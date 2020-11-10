import React from 'react'
import Infocta from './infocta'
import Slider from './slider'
import { Link } from "gatsby"
import "../styles/news.css"

//Props:  svgProp, maintextProp, subtextProp, buttontextProp
// URLS: [https://www.youtube.com/embed/dQw4w9WgXcQ, https://www.youtube.com/embed/L_jWHffIx5E, https://www.youtube.com/embed/cE0wfjsybIQ]
const VidIframe = ({ url, title, link }) => (
    <div className="video-slide">
        <iframe
            width="500"
            height="350"
            title="Boomer News Video"
            style={{ border: 'none' }}
            src={url}
        ></iframe>
        <div className="video-details">
            <p>{title}</p>
            <Link to={link}>Read More</Link>
        </div>
    </div>

)

const News = () => {
    const videoSVG = "insert svg for InfoCTA prop here"
    return (
        <section className="news-section">
            <Slider
                dotsVal={true}
                speed={750}
                autoplay={false}
                arrowsVal={false}
                slide1={<VidIframe title="Boomer refuses to give you up" link="/" url="https://www.youtube.com/embed/dQw4w9WgXcQ" />}
                slide2={<VidIframe title="Become an Allstar thanks to Boomer Naturals" link="/" url="https://www.youtube.com/embed/L_jWHffIx5E" />}
                slide3={<VidIframe title="IDK.  [Insert something funny about crabs]" link="/" url="https://www.youtube.com/embed/cE0wfjsybIQ" />}
            />
            <Infocta
                maintextProp="In The News"
            />
        </section>
    )
}

export default News