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
import { useStaticQuery, graphql } from "gatsby"
import Client from "shopify-buy"
import Register from "./register"
import StoreContext from "../util/store"
import Login from "./login"
import Account from "./account"

/*
const { GATSBY_STOREFRONT_TOKEN } = process.env


// Client object with methods for
// creating checkout and other methods
const client = Client.buildClient({
  domain: 'boomerfacemasks.myshopify.com',
  storefrontAccessToken: GATSBY_STOREFRONT_TOKEN
})
// Context that will be used in other components
export const ClientContext = React.createContext(client)
*/

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

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
    <StoreContext.Consumer>
      {context => (
        <React.Fragment>
          <div className="" data-is-root-path={isRootPath}>
            {header}

            <main>
              <ShoppingCart context={context}/>
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
        </React.Fragment>
      )}
    </StoreContext.Consumer>
  )
}

export default Layout
