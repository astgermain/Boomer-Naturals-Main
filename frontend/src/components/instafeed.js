import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Slider from "./slider"
import "../styles/instafeed.css"
import bottomleftimg from "../../content/assets/instagramgreenmask.png"
import toprightimg from "../../content/assets/instagramkids.png"
import bottomrightimg from "../../content/assets/instagramman.png"

const Instafeed = () => {
  let instaSlide1 = (
    <div className="review-text-box">
      <div className="quote-mark">
        <svg viewBox="0 0 200 50" version="1.1">
          <title>“</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Product-Page-Copy-7"
              transform="translate(-921.000000, -3755.000000)"
            >
              <rect
                id="Rectangle-Copy-46"
                fill=""
                x="0"
                y="3600"
                width="1920"
                height="812"
                fillOpacity="1"
              ></rect>
              <g
                id="Group-3"
                opacity="0.55"
                transform="translate(865.000000, 3700.000000)"
                fill=""
              >
                <circle
                  id="Oval-Copy-21"
                  opacity="0.596981957"
                  cx="54.5"
                  cy="54.5"
                  r="3.5"
                ></circle>
                <circle
                  id="Oval-Copy-26"
                  opacity="0.596981957"
                  cx="54.5"
                  cy="71.5"
                  r="3.5"
                ></circle>
                <circle
                  id="Oval-Copy-22"
                  opacity="0.596981957"
                  cx="71.5"
                  cy="54.5"
                  r="3.5"
                ></circle>
                <circle
                  id="Oval-Copy-27"
                  opacity="0.596981957"
                  cx="71.5"
                  cy="71.5"
                  r="3.5"
                ></circle>
              </g>
              <rect
                id="Rectangle-Copy-21"
                x="901"
                y="3735"
                width="272"
                height="373"
              ></rect>
              <text
                id="“"
                fontFamily="LucidaGrande, Lucida Grande"
                fontSize="96"
                fontWeight="normal"
                linespacing="60"
                letterSpacing="-1.5"
                fill="#FFFFFF"
              >
                <tspan x="916" y="3845">
                  “
                </tspan>
              </text>
            </g>
          </g>
        </svg>
      </div>
      <div className="review-text-container">
        <div className="review-text">
          Finally, I found a mask that is comfortable and doesn't fall off my
          face.
        </div>
        <div className="reviewer-name">Joe</div>
      </div>
    </div>
  )

  let instaSlide2 = (
    <div className="review-text-box">
      <div className="quote-mark">
        <svg viewBox="0 0 200 50" version="1.1">
          <title>“</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Product-Page-Copy-7"
              transform="translate(-921.000000, -3755.000000)"
            >
              <rect
                id="Rectangle-Copy-46"
                fill=""
                x="0"
                y="3600"
                width="1920"
                height="812"
                fillOpacity="1"
              ></rect>
              <g
                id="Group-3"
                opacity="0.55"
                transform="translate(865.000000, 3700.000000)"
                fill=""
              >
                <circle
                  id="Oval-Copy-21"
                  opacity="0.596981957"
                  cx="54.5"
                  cy="54.5"
                  r="3.5"
                ></circle>
                <circle
                  id="Oval-Copy-26"
                  opacity="0.596981957"
                  cx="54.5"
                  cy="71.5"
                  r="3.5"
                ></circle>
                <circle
                  id="Oval-Copy-22"
                  opacity="0.596981957"
                  cx="71.5"
                  cy="54.5"
                  r="3.5"
                ></circle>
                <circle
                  id="Oval-Copy-27"
                  opacity="0.596981957"
                  cx="71.5"
                  cy="71.5"
                  r="3.5"
                ></circle>
              </g>
              <rect
                id="Rectangle-Copy-21"
                x="901"
                y="3735"
                width="272"
                height="373"
              ></rect>
              <text
                id="“"
                fontFamily="LucidaGrande, Lucida Grande"
                fontSize="96"
                fontWeight="normal"
                linespacing="60"
                letterSpacing="-1.5"
                fill="#FFFFFF"
              >
                <tspan x="916" y="3845">
                  “
                </tspan>
              </text>
            </g>
          </g>
        </svg>
      </div>
      <div className="review-text-container">
        <div className="review-text">
        Visible, non-interactive elements with click handlers must have at
        </div>
        <div className="reviewer-name">Mama</div>
      </div>
    </div>
  )

  let instaSlide3 = (
    <div className="review-text-box">
      <div className="quote-mark">
        <svg viewBox="0 0 200 50" version="1.1">
          <title>“</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Product-Page-Copy-7"
              transform="translate(-921.000000, -3755.000000)"
            >
              <rect
                id="Rectangle-Copy-46"
                fill=""
                x="0"
                y="3600"
                width="1920"
                height="812"
                fillOpacity="1"
              ></rect>
              <g
                id="Group-3"
                opacity="0.55"
                transform="translate(865.000000, 3700.000000)"
                fill=""
              >
                <circle
                  id="Oval-Copy-21"
                  opacity="0.596981957"
                  cx="54.5"
                  cy="54.5"
                  r="3.5"
                ></circle>
                <circle
                  id="Oval-Copy-26"
                  opacity="0.596981957"
                  cx="54.5"
                  cy="71.5"
                  r="3.5"
                ></circle>
                <circle
                  id="Oval-Copy-22"
                  opacity="0.596981957"
                  cx="71.5"
                  cy="54.5"
                  r="3.5"
                ></circle>
                <circle
                  id="Oval-Copy-27"
                  opacity="0.596981957"
                  cx="71.5"
                  cy="71.5"
                  r="3.5"
                ></circle>
              </g>
              <rect
                id="Rectangle-Copy-21"
                x="901"
                y="3735"
                width="272"
                height="373"
              ></rect>
              <text
                id="“"
                fontFamily="LucidaGrande, Lucida Grande"
                fontSize="96"
                fontWeight="normal"
                linespacing="60"
                letterSpacing="-1.5"
                fill="#FFFFFF"
              >
                <tspan x="916" y="3845">
                  “
                </tspan>
              </text>
            </g>
          </g>
        </svg>
      </div>
      <div className="review-text-container">
        <div className="review-text">
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        </div>
        <div className="reviewer-name">Bobby</div>
      </div>
    </div>
  )

  return (
    <div className="insta-container">
      <div className="insta-left">
        <div className="insta-slider">
          <Slider
            dotsVal={true}
            arrowsVal={false}
            speed={750}
            autoplay={false}
            slide1={instaSlide1}
            slide2={instaSlide2}
            slide3={instaSlide3}
          />
        </div>
        <div className="bottom-left-img">
          <Link to="/">
            <img src={bottomleftimg} alt="instagram-image" className="" />
          </Link>
        </div>
      </div>
      <div className="insta-right">
        <div className="top-right-img">
          <Link to="/">
            <img src={toprightimg} alt="instagram-image" className="" />
          </Link>
        </div>

        <div className="bottom-right-img">
          <Link to="/">
            <img src={bottomrightimg} alt="instagram-image" className="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

Instafeed.defaultProps = {}

Instafeed.propTypes = {}

export default Instafeed
