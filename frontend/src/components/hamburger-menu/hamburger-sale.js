/**
 * Hamburger In The News Content Component
 *
 *
 */
import React from "react"
import { Link } from "gatsby"
import "../../styles/hamburger-shop.css"

const HamburgerSale = () =>{

    return(
        <div className="hamburger-content-shop">
            <div className="shop-links">
              <Link to="/" className="shop-collection-link">
                <span className="shop-c-links underline-me">Sale</span>
              </Link>
              <Link to="/dailysale" className="btm-shop-links">
                <span className="btm-shop-links">Daily Sale</span>
              </Link>
              <Link to="/flashsale" className="btm-shop-links">
                <span className="btm-shop-links">Flash Sale</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerSale;