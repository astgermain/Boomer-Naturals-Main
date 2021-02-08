/**
 * Hamburger Menu Component * Left Links & collapse footer
 *
 *
 */

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { HAMBURGER_CSS } from "../../util/imports"
import { Slide } from "react-awesome-reveal"
import HamburgerShop from "./hamburger-shop"
import HamburgerNews from "./hamburger-news"
import HamburgerBotanic from "./hamburger-botanic"
import HamburgerLocations from "./hamburger-locations"
import HamburgerAbout from "./hamburger-about"
import HamburgerSale from "./hamburger-sale"
import FooterVContent from "./hamburger-footer-v"


const Hamburger = ({ close }) => {
  // const [isShown, setIsShown] = useState(false)
  // const [footerMenuTrack, setFooterMenuTrack] = useState(false)
  // const [footerMenuDir, setFooterMenuDir] = useState("up")
  const [shown, setShown] = useState(false)
  const [dir, setDir] = useState("right")
  const [page, setPage] = useState("default")
  const [showFooter, setShowFooter] = useState(false)
  const [displayNoneOpenVFooter, setDisplayNoneOpenVFooter] = useState(false);
  const [displayNoneMobileSlide, setDisplayNoneMobileSlide] = useState(false);
  const [displayShowMobileSlide, setDisplayShowMobileSlide] = useState(true);
  const [backbuttonShow, setBackbuttonShow] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return function cleanup() {
      document.body.style.overflowY = "scroll"
    }
  }, [page])
  
  const HideShowInnerMenu = () =>{
    if (displayNoneOpenVFooter)
    return "right-side-hambrg"
    if(displayNoneMobileSlide)
    return "hide-on-mobile-hambrg"
  }

  const yeetFooterMenu = (page) => {
    // setFooterMenuDir("down")
    // setFooterMenuTrack(!footerMenuTrack)
    setTimeout(() => {
      setPage(page)
      setDisplayNoneOpenVFooter(false)
      setShowFooter(!showFooter)
    }, 100)
  }

  const createMenu = () => {
    setPage("default")
    // setFooterMenuDir("up")
    setShowFooter(!showFooter)
    // setFooterMenuTrack(!footerMenuTrack)
    setDisplayNoneOpenVFooter(true)
  }
  

  const footerMenu = () => {
    return (
      <div className="footerVcontainer">
        <div className="footerVcontent">
          <button onClick={() => yeetFooterMenu("default")} className="slidebutton">
            Collapse Footer V
          </button>
        </div>
        <Slide
          duration={500}
          triggerOnce={false}
          direction={'up'}
        >
          <FooterVContent />

        </Slide>
      </div>
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

  const openSideMenu = (page) =>{
    setDisplayNoneMobileSlide(true)
    setBackbuttonShow(true)
    setTimeout(() => {
      setDisplayShowMobileSlide(false)
      
    },300)
      if(showFooter){
        yeetFooterMenu(page)
      }
      else{
        setPage(page)
      }
  }
  const handleBackButton = () =>{
    setDisplayNoneMobileSlide(false)
    setBackbuttonShow(false)
    setDisplayShowMobileSlide(true)
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
          <div
            id="hamburgerclose"
            className="close"
            aria-label="close"
            role="button"
            tabIndex={0}
            onKeyDown={yeetHamburgerMenu}
            onClick={yeetHamburgerMenu}
          ></div>
          <div
            id="hamburger-back"
            className={backbuttonShow ? 'back-btn' : ''}
            aria-label="back"
            role="button"
            tabIndex={0}
            onClick={handleBackButton}
            
          ></div>
          <div className={`hamburger-content-top ${HideShowInnerMenu()}`} >
            <div className="link-level1">
              <button>
                <Link to="/" className="ham-link1">
                  <span className="links" role="button" tabIndex={0} onClick={yeetHamburgerMenu} onKeyDown={yeetHamburgerMenu}>
                    Home
                  </span>
                </Link>
              </button>

              <button onClick={() => openSideMenu("shop") }>
                <Link to="/" className="ham-link1">
                  <span role="button" tabIndex={0} onMouseEnter={() => openSideMenu("shop") } className="links">Shop</span>
                </Link>
              </button>

              <button onClick={() => openSideMenu("news") }>
                <Link to="" className="ham-link1">
                  <span  role="button" tabIndex={0} onMouseEnter={() => openSideMenu("news") } className="links">News</span>
                </Link>
              </button>
              <button onClick={() => openSideMenu("botanics") }>
                <Link to="" className="ham-link1">
                  <span role="button" tabIndex={0} onMouseEnter={() => openSideMenu("botanics") } className="links">Boomer Botanics</span>
                </Link>
              </button>

    

              <button onClick={() => openSideMenu("locations") }>
                <Link to="" className="ham-link1">
                  <span role="button" tabIndex={0} onMouseEnter={() => openSideMenu("locations") } className="links">Locations</span>
                </Link>
              </button>

              <button onClick={() => openSideMenu("about") }>
                <Link to="" className="ham-link1">
                  <span role="button" tabIndex={0} onMouseEnter={() => openSideMenu("about")} className="links" >About</span>
                </Link>
              </button>

              <button onClick={() => openSideMenu("sale") }>
                <Link to="" className="ham-link1">
                  <span role="button" tabIndex={0} onMouseEnter={() => openSideMenu("sale")} className="links">Sale</span>
                </Link>
              </button>
            </div>
          </div>

          <div className={`hamburger-content-right-width ${displayShowMobileSlide ? 'hamburger-content-right' : ''}`}>
            {page === "default" && (
              <div className="welcome">
                <span>
                  Welcome <br /> to Boomer Naturals
                </span>
              </div>
            )}

            {page === "shop" &&   
            <Slide
            duration={300}
            triggerOnce={false}
            
            direction={dir}
            
          ><HamburgerShop/>
          </Slide>
         }
         {page === "news" &&   
            <Slide
            duration={300}
            triggerOnce={false}
            direction={"right"}
          ><HamburgerNews/>
          </Slide>
         }
         {page === "botanics" &&   
            <Slide
            duration={300}
            triggerOnce={false}
            direction={"right"}
          ><HamburgerBotanic/>
          </Slide>
         }
         {page === "locations" &&   
            <Slide
            duration={300}
            triggerOnce={false}
            direction={"right"}
          ><HamburgerLocations/>
          </Slide>
         }
         {page === "about" &&   
            <Slide
            duration={300}
            triggerOnce={false}
            direction={"right"}
          ><HamburgerAbout/>
          </Slide>
         }
         {page === "sale" &&   
            <Slide
            duration={300}
            triggerOnce={false}
            direction={"right"}
          ><HamburgerSale/>
          </Slide>
         }

         
            {showFooter ? footerMenu() : <div></div>}
          </div>
        </div>

        {/*bottom footer v */}
        <div style={{ opacity: showFooter ? 0 : 1 }} className="footerV">
       
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
