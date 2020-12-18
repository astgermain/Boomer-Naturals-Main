/**
 * Hamburger Menu Component * Left Links & collapse footer
 *
 *
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/hamburger.css"
import { Slide } from "react-awesome-reveal"
import HamburgerShop from "./hamburger-shop"
import FooterVContent from "./hamburger-footer-v"

const Hamburger = ({ close }) => {
  const [isShown, setIsShown] = useState(false)
  const [footerMenuTrack, setFooterMenuTrack] = useState(true)
  const [footerMenuDir, setFooterMenuDir] = useState("up")
  const [shown, setShown] = useState(false)
  const [dir, setDir] = useState("right")
  const [page, setPage] = useState("default")
  const [showFooter, setShowFooter] = useState(false)
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return function cleanup() {
      document.body.style.overflowY = "scroll"
    }
  }, [page])

  const yeetFooterMenu = () => {
    setPage("default")
    setFooterMenuDir('down')
    setFooterMenuTrack(!footerMenuTrack)
    setTimeout(()=>{
      setShowFooter(!showFooter)
    },600)
    
  }
  
  const sayHello = () => {
    console.log("Hello!")
  }
  const createMenu = () => {
    setPage("footer")
    setFooterMenuDir('up')
    setShowFooter(!showFooter)
    setFooterMenuTrack(!footerMenuTrack)
    
  }

  const footerMenu = () => {
    return (
      <Slide
        duration={500}
        triggerOnce={true}
        direction={footerMenuDir}
        className=""
        reverse={footerMenuTrack}
      >
        
        <div className="footerVcontent">
          <button onClick={yeetFooterMenu} className="slidebutton">
            Collapse Footer V
          </button>
        </div>
        <FooterVContent />
    </Slide>
    )
  }

  const yeetHamburgerMenu = () => {
    setDir("left")
    setShown(!shown)
    setDir("right")
    setTimeout(() => {
      close()
    }, 500)
  }

  return (
    <Slide
      duration={500}
      triggerOnce={true}
      direction={dir}
      className="hamburger-container"
      reverse={shown}
    >
      <section className="hamburger-container">
        <div className="hamburger-content">
          <a
            id="hamburgerclose"
            className="close"
            onClick={yeetHamburgerMenu}
          ></a>
          <div className="hamburger-content-top">
            <div className="link-level1">
              <button onClick={sayHello}>
                <Link to="/" className="ham-link1">
                  <span className="links" onClick={close}>
                    Home
                  </span>
                </Link>
              </button>

              <button onClick={() => setPage("shop")}>
                <Link to="/" className="ham-link1">
                  <span className="links">Shop</span>
                </Link>
              </button>

              <button onClick={sayHello}>
                <Link to="/" className="ham-link1">
                  <span className="links">Boomer Botanics</span>
                </Link>
              </button>

              <button onClick={sayHello}>
                <Link to="/" className="ham-link1">
                  <span className="links">In The News</span>
                </Link>
              </button>

              <button onClick={sayHello}>
                <Link to="/" className="ham-link1">
                  <span className="links">Locations</span>
                </Link>
              </button>

              <button onClick={sayHello}>
                <Link to="/" className="ham-link1">
                  <span
                    className="links"
                    onMouseEnter={() => setIsShown(false)}
                  >
                    About
                  </span>
                </Link>
              </button>

              <button onClick={sayHello}>
                <Link to="/" className="ham-link1">
                  <span className="links">Sale</span>
                </Link>
              </button>
            </div>
          </div>

          <div className="hamburger-content-right">
            {page === "default" && (
              <div className="welcome">
                <span>
                  Welcome <br /> to Boomer Naturals
                </span>
              </div>
            )}

            {page === "shop" && <HamburgerShop />}

            {showFooter ? footerMenu() : <div></div>}
          </div>
        </div>

        {/*bottom footer v */}

        <div
          style={{ opacity: showFooter ? 0 : 1 }}
          className="footerV"
        >
          <button onClick={createMenu}>Expand Footer V</button>
        </div>
        <div className="hamburger-content-bottom"></div>
      </section>
    </Slide>
  )
}

Hamburger.defaultProps = {}

Hamburger.propTypes = {}

export default Hamburger
