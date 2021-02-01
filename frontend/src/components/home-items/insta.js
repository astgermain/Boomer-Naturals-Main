import React from "react"
// import PropTypes from "prop-types"
import Instafeed from "../instafeed"
import Infocta from "../infocta"
import "../../styles/insta.css"
import { INSTA_CSS } from "../../util/imports"

const Insta = () => {
  let svgIcon = (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>icon</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Product-Page-Copy-7"
          transform="translate(-418.000000, -3804.000000)"
        >
          <rect
            id="Rectangle-Copy-46"
            fillOpacity="0.25"
            fill="#E0F1F6"
            x="0"
            y="3600"
            width="1920"
            height="812"
          ></rect>
          <path
            d="M439,3804 C443.970563,3804 448,3808.02944 448,3813 L448,3825 C448,3829.97056 443.970563,3834 439,3834 L427,3834 C422.029437,3834 418,3829.97056 418,3825 L418,3813 C418,3808.02944 422.029437,3804 427,3804 L439,3804 Z M439,3807 L427,3807 C423.686292,3807 421,3809.68629 421,3813 L421,3825 C421,3828.31371 423.686292,3831 427,3831 L439,3831 C442.313708,3831 445,3828.31371 445,3825 L445,3813 C445,3809.68629 442.313708,3807 439,3807 Z M433,3811.5 C437.142136,3811.5 440.5,3814.85786 440.5,3819 C440.5,3823.14214 437.142136,3826.5 433,3826.5 C428.857864,3826.5 425.5,3823.14214 425.5,3819 C425.5,3814.85786 428.857864,3811.5 433,3811.5 Z M433,3814.5 C430.514719,3814.5 428.5,3816.51472 428.5,3819 C428.5,3821.48528 430.514719,3823.5 433,3823.5 C435.485281,3823.5 437.5,3821.48528 437.5,3819 C437.5,3816.51472 435.485281,3814.5 433,3814.5 Z M440.5,3810 C441.328427,3810 442,3810.67157 442,3811.5 C442,3812.32843 441.328427,3813 440.5,3813 C439.671573,3813 439,3812.32843 439,3811.5 C439,3810.67157 439.671573,3810 440.5,3810 Z"
            id="icon"
            fill="#26293E"
          ></path>
        </g>
      </g>
    </svg>
  )
  return (
    <section className="main-insta-container">
      <div className="insta-margin">
        <Infocta
          svgProp={svgIcon}
          maintextProp="Share Your Story"
          buttontextProp="Learn More"
        />
        <Instafeed />
      </div>
    </section>
  )
}

export default Insta
