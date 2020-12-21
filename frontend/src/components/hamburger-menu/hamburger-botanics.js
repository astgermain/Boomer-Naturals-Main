/**
 * Hamburger Botanics Content Component
 *
 *
 */
import React from "react"
import { Link } from "gatsby"
import "../../styles/hamburger-shop.css"

const HamburgerBotanics = () =>{

    return(
        <div className="hamburger-content-shop">
            <div className="shop-links">
              <Link to="/" className="shop-collection-link">
                <span className="shop-c-links underline-me">Boomer Botanics</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">Doctor-Formulated Boomer Botanics</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">Shop Boomer Botanics</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerBotanics;