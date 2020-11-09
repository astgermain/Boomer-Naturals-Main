import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import Instafeed from "./instafeed"
import Infocta from "./infocta"
import "../styles/insta.css"

const Insta = () => {
  return (
    <section className="main-insta-container">
      <div className="insta-margin">
        <Infocta
          svgProp="svg image"
          maintextProp="Share Your Story"
          buttontextProp="Learn More"
        />
        <Instafeed />
      </div>
    </section>
  )
}

export default Insta
