/**
 * Hamburger Menu Component
 *
 *
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/hamburger.css"
import { Slide } from "react-awesome-reveal"

const Hamburger = ({ close }) => {
    const [isShown, setIsShown] = useState(false)
    const [shown, setShown] = useState(false)
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return function cleanup() {
      document.body.style.overflow = "scroll"
    }
  }, [])
  const yeetHamburgerMenu = () => {
    setShown(!shown)
  }
  return (
    <Slide
      duration={500}
      triggerOnce={true}
      direction="right"
      className="hamburger-container"
      reverse={shown}
    >
      <section className="hamburger-container">
        {/*  */}
        <div className="hamburger-content">
          <a id="hamburgerclose" className="close" onClick={yeetHamburgerMenu}></a>
          <div className="hamburger-content-top">
            <div className="link-level1">
              <Link to="/" className="ham-link1">
                <span onMouseEnter={() => setIsShown(true)}>Home</span>
                {isShown && <span>hi</span>}
              </Link>
              <Link to="/" className="ham-link1">
                <span onMouseEnter={() => setIsShown(false)}>About</span>
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
