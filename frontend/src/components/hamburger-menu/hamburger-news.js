/**
 * Hamburger In The News Content Component
 *
 *
 */
import React from "react"
import { Link } from "gatsby"
import "../../styles/hamburger-shop.css"

const HamburgerNews = () =>{

    return(
        <div className="hamburger-content-shop">
            <div className="shop-links">
              <Link to="/" className="shop-collection-link">
                <span className="shop-c-links underline-me">In The News</span>
              </Link>
              <Link to="/southvietnam" className="btm-shop-links">
                <span className="btm-shop-links">Silver and S.Vietnam</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">Investor Relations</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Donations</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Interviews</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Blog</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerNews;