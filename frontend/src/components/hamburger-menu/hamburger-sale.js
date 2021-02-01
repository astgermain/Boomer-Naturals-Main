/**
 * Hamburger In The News Content Component
 *
 *
 */
import React from "react"
import { Link } from "gatsby"
import { HAMBURGER_SHOP_CSS } from "../../util/imports"


const HamburgerSale = () =>{

    return(
        <div className="hamburger-content-shop">
            <div className="shop-links">
              <Link to="/" className="shop-collection-link">
                <span className="shop-c-links underline-me">Sale</span>
              </Link>
              <Link to="/flashsale" className="btm-shop-links">
                <span className="btm-shop-links">Flash Sale</span>
              </Link>
              <Link to="/collections/all-bundles" className="btm-shop-links">
                <span className="btm-shop-links">Bundles</span>
              </Link>
              <Link to="/collections/sale" className="btm-shop-links">
                <span className="btm-shop-links">View All</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerSale;