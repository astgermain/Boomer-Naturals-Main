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
  const [footerMenuTrack, setFooterMenuTrack] = useState(false)
  const [footerMenuReverse, setFooterMenuReverse] = useState("up")
  const [shown, setShown] = useState(false)
  const [dir, setDir] = useState("right")
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return function cleanup() {
      document.body.style.overflow = "scroll"
    }
  }, [])

  const yeetFooterMenu = () => {
    setFooterMenuTrack(!footerMenuTrack)
    setFooterMenuReverse("down")
    
  }
  const [page, setPage] = useState("default")
  const sayHello = () => {
    console.log("Hello!")
  }
  const createMenu = () => {
    setShowFooter(!showFooter)
    setPage("footer")
    setFooterMenuTrack(!footerMenuTrack)
  }
  const closeMenu = () => {
    setShowFooter(!showFooter)
    setPage("default")
    setFooterMenuReverse("up")
  }

  const [showFooter, setShowFooter] = useState(false)
  const footerMenu = () => {
    return showFooter ? (
      <Slide
        duration={500}
        triggerOnce={false}
        direction={footerMenuReverse}
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
    ) : (
      <Slide></Slide>
    )
  }
  


  const yeetHamburgerMenu = () => {
    setDir("left")
    setShown(!shown)
    setDir("right")
    setTimeout(()=>{
      close()
    },500)
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

          <a id="hamburgerclose" className="close" onClick={yeetHamburgerMenu}></a>
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

            {footerMenu()}
          </div>
        </div>

        {/*bottom footer v */}

        <div
          style={{ display: showFooter ? "none" : "block" }}
          className="footerV"
        >
          <button onClick={createMenu}>Expand Footer V</button>
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
