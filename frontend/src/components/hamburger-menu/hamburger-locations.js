/**
 * Hamburger In The News Content Component
 *
 *
 */
import React from "react"
import { Link } from "gatsby"
import { HAMBURGER_SHOP_CSS } from "../../util/imports"


const HamburgerLocations = () =>{

    return(
        <div className="hamburger-content-shop">
            <div className="shop-links">
              <Link to="/locations" className="shop-collection-link">
                <span className="shop-c-links underline-me">Locations</span>
              </Link>
              <Link to="/vegasstore" className="btm-shop-links">
                <span className="btm-shop-links">Vegas Store</span>
              </Link>
              <Link to="/cvsnearyou" className="btm-shop-links">
                <span className="btm-shop-links">Find a CVS Near You</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerLocations;