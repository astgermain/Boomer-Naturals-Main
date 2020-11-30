/**
 * Hamburger Menu Component
 *
 *
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/hamburger.css"
import { Slide } from "react-awesome-reveal"

const Hamburger = ({ close }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return function cleanup() {
      document.body.style.overflow = "scroll"
    }
  }, [])

  return (
    <Slide
      duration={500}
      triggerOnce={true}
      direction="right"
      className="hamburger-container"
    >
      <section className="hamburger-container">
        {/*  */}
        <div className="hamburger-content">
          <a className="close" onClick={close}></a>
          <div className="hamburger-content-top">
            <div className="link-level1">
              <Link to="/" className="ham-link1">
                <span>Home</span>
              </Link>
              <Link to="/" className="ham-link1">
                <span>About</span>
              </Link>
              <Link to="/" className="ham-link1">
                <span>Shop</span>
              </Link>
            </div>
            <div className="link-level2">
              <Link to="/" className="ham-link2">
                <span>Extra</span>
              </Link>
              <Link to="/" className="ham-link2">
                <span>Extra 2</span>
              </Link>
              <Link to="/" className="ham-link2">
                <span>Extra 3</span>
              </Link>
            </div>
          </div>
          <div className="hamburger-content-bottom"></div>
        </div>
      </section>
    </Slide>
  )
}

Hamburger.defaultProps = {}

Hamburger.propTypes = {}

export default Hamburger
