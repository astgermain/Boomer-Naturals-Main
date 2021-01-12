import React, { useContext } from "react"
import Header from "./header"
import Hero from "./hero"
import Categories from "./categories"
import AsSeenOn from "./as-seen-on"
import Email from "./email"
import ProductCarousel from "./product-carousel"
import Featured from "./featured"
import AboutFaceMask from "./about-face-mask"
import Insta from "./insta"
import Footer from "./footer"
import News from "./news"
import ShoppingCart from "./shopping-cart"
import { useStaticQuery, graphql } from "gatsby"
// import Client from "shopify-buy"
import Register from "./register"
import StoreContext from "../util/store"
import Login from "./login"
import Reviews from "./reviews"

const HomeLayout = () => {
  return (
    <main className="main-section">
      <Login />
      <Reviews />
      <Register />
      <Hero />
      <Featured />
      <Categories />
      <ProductCarousel />
      <Insta />
      <AboutFaceMask />
      <News />
      <AsSeenOn />
      <Email />
    </main>
  )
}

export default HomeLayout
