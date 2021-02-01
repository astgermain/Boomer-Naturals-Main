/**
 * Hamburger Shop Content Component
 *
 *
 */
import React from "react"
import { Link } from "gatsby"
import { HAMBURGER_SHOP_CSS } from "../../util/imports"

const HamburgerShop = () =>{

    return(
        <div className="hamburger-content-shop">
            <span className="dashed"></span>
            <div className="shop-links">
              <Link to="/allcollections" className="shop-collection-link">
                <span className="shop-c-links">Shop Collections</span>
              </Link>
              <Link to="/all" className="btm-shop-links">
                <span className="btm-shop-links">All Products</span>
              </Link>
              <Link to="/newarrivals" className="btm-shop-links">
                <span className="btm-shop-links">New Arrivals</span>
              </Link>
              <Link to="/facecovers" className="btm-shop-links">
                <span className="btm-shop-links" >Face Coverings</span>
              </Link>
              <Link to="/coming-soon" className="btm-shop-links">
                <span className="btm-shop-links" >Apparel (Coming Soon)</span>
              </Link>
              <Link to="/coming-soon" className="btm-shop-links">
                <span className="btm-shop-links" >Silver Bed & Bath (Coming Soon)</span>
              </Link>
              <Link to="/coming-soon" className="btm-shop-links">
                <span className="btm-shop-links" >Silver Accessories (Coming Soon)</span>
              </Link>
              <Link to="/coming-soon" className="btm-shop-links">
                <span className="btm-shop-links" >Vietnamese Coffee (Coming Soon)</span>
              </Link>
              <Link to="/boomerbotanics" className="btm-shop-links">
                <span className="btm-shop-links" >Boomer Botanics</span>
              </Link>
              <Link to="/supplements" className="btm-shop-links">
                <span className="btm-shop-links" >Supplements</span>
              </Link>
              <Link to="/skin" className="btm-shop-links">
                <span className="btm-shop-links" >Skin</span>
              </Link>
              <Link to="/pets" className="btm-shop-links">
                <span className="btm-shop-links">Pets</span>
              </Link>
              <Link to="/giftcard" className="btm-shop-links">
                <span className="btm-shop-links" >Gift Card</span>
              </Link>
              <Link to="https://boomernaturalswholesale.com/" className="btm-shop-links">
                <span className="btm-shop-links" >Wholesale</span>
              </Link>
              <Link to="/loyaltyrewards" className="btm-shop-links">
                <span className="btm-shop-links" >Loyalty & Rewards</span>
              </Link>
            </div>
        </div>
    )
}

export default HamburgerShop;