import React from "react"
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

import Client from 'shopify-buy'
const { GATSBY_STOREFRONT_TOKEN } = process.env


// Client object with methods for
// creating checkout and other methods
const client = Client.buildClient({
  domain: 'boomerfacemasks.myshopify.com',
  storefrontAccessToken: GATSBY_STOREFRONT_TOKEN
})
// Context that will be used in other components
export const ClientContext = React.createContext(client)

  
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  console.log(client)

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
    <ClientContext.Provider value={client}>
      <div className="" data-is-root-path={isRootPath}>
        {header}

        <main>
          <ShoppingCart />
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

        <footer><Footer /></footer>
      </div>
    </ClientContext.Provider>
  )
}

export default Layout
