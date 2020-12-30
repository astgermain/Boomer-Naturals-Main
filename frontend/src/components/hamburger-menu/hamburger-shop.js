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
              <Link to="/allcollections" className="shop-collection-link">
                <span className="shop-c-links">Shop Collection</span>
              </Link>
              <Link to="/newarrivals" className="btm-shop-links">
                <span className="btm-shop-links">New Arrivals</span>
              </Link>
              <Link to="/bestsellers" className="btm-shop-links">
                <span className="btm-shop-links" >Face Covers & Best Sellers</span>
              </Link>
              <Link to="/adultfacecovers" className="btm-shop-links">
                <span className="btm-shop-links" >Adult Face Covers</span>
              </Link>
              <Link to="/childfacecovers" className="btm-shop-links">
                <span className="btm-shop-links" >Child Face Covers</span>
              </Link>
              <Link to="/customfacecovers" className="btm-shop-links">
                <span className="btm-shop-links" >Custom Face Covers</span>
              </Link>
              <Link to="/boomerbotanics" className="btm-shop-links">
                <span className="btm-shop-links" >Boomer Botanics</span>
              </Link>
              <Link to="/pets" className="btm-shop-links">
                <span className="btm-shop-links" >Pet Products</span>
              </Link>
              <Link to="/skincarewellness" className="btm-shop-links">
                <span className="btm-shop-links" >Skin Care & Wellness Supplements</span>
              </Link>
              <Link to="/bundles" className="btm-shop-links">
                <span className="btm-shop-links">Shop Bundles</span>
              </Link>
              <Link to="/allproducts" className="btm-shop-links">
                <span className="btm-shop-links" >Shop All Products</span>
              </Link>
              <Link to="/giftcards" className="btm-shop-links">
                <span className="btm-shop-links" >Gift Cards</span>
              </Link>
              <Link to="/wholesale" className="btm-shop-links">
                <span className="btm-shop-links" >Wholesale</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerShop;