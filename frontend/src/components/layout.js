import React from "react"
import Header from "./header"
import Hero from "./hero"
import Categories from "./categories"
import AsSeenOn from "./as-seen-on"
import Email from "./email"
import Infocta from "./infocta"
import Instafeed from "./instafeed"
import ProductSlider from "./productslider"
import ProductCarousel from "./product-carousel"
import Featured from "./featured"
import Search from "./search"
import AboutFaceMask from "./about-face-mask"
import Insta from "./insta"
import Footer from "./footer"
import News from "./news"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Header title={title} />
      /*
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      */
    )
  } else {
    header = (
      <Header />
      /*
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      */
    )
  }

  return (
    <div className="" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>

      <main>
        <Hero />
        <Featured />
        <Categories />
        <ProductCarousel />
        <Insta />
        <AsSeenOn />
        <Email />
        <AboutFaceMask />
        <News />
      </main>

      <footer><Footer /></footer>
    </div>
  )
}

export default Layout
