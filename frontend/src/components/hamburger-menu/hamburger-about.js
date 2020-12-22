/**
 * Hamburger Botanics Content Component
 *
 *
 */
import React from "react"
import { Link } from "gatsby"
import "../../styles/hamburger-shop.css"

const HamburgerAbout = () =>{

    return(
        <div className="hamburger-content-shop">
            <div className="shop-links">
              <Link to="/" className="shop-collection-link">
                <span className="shop-c-links underline-me">About Us</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">About Boomer Naturals</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">Wellness Advisory Board</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Donations</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Blog</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >FAQs</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerAbout;