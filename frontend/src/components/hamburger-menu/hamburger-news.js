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
                <span className="btm-shop-links">Boomer Silver & S.Vietnam</span>
              </Link>
              <Link to="/investorrelations" className="btm-shop-links">
                <span className="btm-shop-links">On Business Wire</span>
              </Link>
              <Link to="https://ir.boomernaturals.com/" className="btm-shop-links">
                <span className="btm-shop-links">Investor Relations</span>
              </Link>
              <Link to="/donations" className="btm-shop-links">
                <span className="btm-shop-links" >Donations</span>
              </Link>
              <Link to="/blog" className="btm-shop-links">
                <span className="btm-shop-links" >Blog</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerNews;