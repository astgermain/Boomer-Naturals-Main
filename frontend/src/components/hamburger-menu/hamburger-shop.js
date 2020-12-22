/**
 * Hamburger Shop Content Component
 *
 *
 */
import React from "react"
import { Link } from "gatsby"
import "../../styles/hamburger-shop.css"

const HamburgerShop = () =>{

    return(
        <div className="hamburger-content-shop">
            <span className="dashed"></span>
            <div className="shop-links">
              <Link to="/" className="shop-collection-link">
                <span className="shop-c-links">Shop Collection</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">New Arrivals</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Face Masks & Best Sellers</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Adult Face Masks</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Child Face Masks</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Custom Face Masks</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Boomer Botanics</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Pet Products</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Skin Care & Wellness Supplements</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links">Shop Bundles</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Shop All Products</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Gift Cards</span>
              </Link>
              <Link to="/" className="btm-shop-links">
                <span className="btm-shop-links" >Wholesale</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerShop;