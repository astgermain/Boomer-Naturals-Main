/**
 * Hamburger In The News Content Component
 *
 *
 */
import React from "react"
import { Link } from "gatsby"
import "../../styles/hamburger-shop.css"

const HamburgerLocations = () =>{

    return(
        <div className="hamburger-content-shop">
            <div className="shop-links">
              <Link to="/" className="shop-collection-link">
                <span className="shop-c-links underline-me">Locations</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">Vegas Store</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">Find a CVS Near You</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerLocations;