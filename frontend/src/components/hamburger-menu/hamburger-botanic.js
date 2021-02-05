/**
 * Hamburger Botanics Content Component
 *
 *
 */
import React from "react"
import { Link } from "gatsby"
import { HAMBURGER_SHOP_CSS } from "../../util/imports"


const HamburgerBotanic = () =>{

    return(
        <div className="hamburger-content-shop">
            <div className="shop-links">
              <Link to="/" className="shop-collection-link">
                <span className="shop-c-links underline-me">Boomer Botanics</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">Doctor Formulated Boomer Botanics</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">Shop Boomer Botanics</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerBotanic;