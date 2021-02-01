import React from 'react'
import Infocta from '../infocta'
import Slider from '../slider'
import { Link } from "gatsby"
import { NEWS_CSS } from "../../util/imports"

const VidIframe = ({ url, title, link }) => (
    <div className="video-slide">
        <iframe
            width="500"
            height="350"
            title="Boomer News Video"
            style={{ border: 'none' }}
            src={url}
            className="homepage-video"
        ></iframe>
        <div className="video-details">
            <p>{title}</p>
            <Link to={link}>Read More</Link>
        </div>
    </div>

)

const News = () => {
    const videoSVG = (
        <svg width="30px" height="19px" viewBox="0 0 30 19" version="1.1" xmlns="http://www.w3.org/1999/xlink">
            <title>icon</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Product-Page-Copy-7" transform="translate(-1176.000000, -4549.000000)" fill="#26293E">
                    <path d="M1194.75,4549 C1196.22933,4549 1197.42857,4550.21523 1197.42857,4551.71429 L1197.428,4554.115 L1206,4549.86364 L1206,4568 L1197.428,4563.747 L1197.42857,4565.28571 C1197.42857,4566.78477 1196.22933,4568 1194.75,4568 L1178.67857,4568 C1177.19924,4568 1176,4566.78477 1176,4565.28571 L1176,4551.71429 C1176,4550.21523 1177.19924,4549 1178.67857,4549 L1194.75,4549 Z M1194.85714,4551.59091 L1178.57143,4551.59091 L1178.57143,4565.40909 L1194.85714,4565.40909 L1194.85714,4551.59091 Z M1203.2377,4554.29777 L1197.428,4557.178 L1197.428,4560.684 L1203.2377,4563.56587 L1203.2377,4554.29777 Z" id="icon"></path>
                </g>
            </g>
        </svg>
    )
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
                svgProp={videoSVG}
            />

        </section >
    )
}

export default News