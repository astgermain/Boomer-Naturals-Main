import React from "react"
import Hero from "./home-items/hero"
import InfoBanner from "./home-items/info-banner.js"
import Categories from "./home-items/categories"
import AsSeenOn from "./home-items/as-seen-on"
import Email from "./home-items/email"
import ProductCarousel from "./product-carousel"
import Featured from "./home-items/featured"
import AboutFaceMask from "./home-items/about-face-mask"
import Insta from "./home-items/insta"
import News from "./home-items/news"
import HeroMobile from "./home-items/hero-mobile"


const HomeLayout = ({data}) => {
  return (
    <main className="main-section">
      <InfoBanner/>
      <Hero/>
      <HeroMobile/>
      <Featured data={data}/>
      <Categories />
      <ProductCarousel whichPage={"product-carousel"} />
      <Insta />
      <AboutFaceMask />
      <News />
      <AsSeenOn />
      <Email />
    </main>
  )
}

export default HomeLayout
