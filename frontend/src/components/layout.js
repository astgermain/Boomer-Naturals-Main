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
import Account from "./account"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const { isCartOpen, toggleCart } = useContext(StoreContext)
  console.log('the cartttt', isCartOpen)

  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        nodes {
          availableForSale
          descriptionHtml
          handle
          id
          images {
            altText
            originalSrc
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          onlineStoreUrl
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          productType
          shopifyId
          tags
          title
          totalInventory
          variants {
            availableForSale
            id
            image {
              altText
              originalSrc
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            priceV2 {
              amount
              currencyCode
            }
            quantityAvailable
            requiresShipping
            selectedOptions {
              name
              value
            }
            shopifyId
            title
          }
        }
      }
    }
  `)

  let header
  if (isRootPath) {
    header = (
      <Header title={title} data={data} />
      /*
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      */
    )
  } else {
    header = (
      <Header data={data} />
      /*
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      */
    )
  }

  return (
    <>
      {/* Overlay for when shopping cart is opened */}
      <div className={`layout-body-wrapper ${isCartOpen && 'active'}`} data-is-root-path={isRootPath}>
        <aside className={`shopping-cart-aside ${!isCartOpen && 'inactive'}`}>
          <ShoppingCart />
        </aside>
        <div className={`screen-overlay ${isCartOpen && 'active'}`} onClick={isCartOpen && toggleCart}></div>
        <div>
          {header}
          <main className="main-section">
            <Login />
            <Register />
            <Account />
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
          <footer>
            <Footer />
          </footer>
        </div>

      </div>
    </>
  )
}

export default Layout
