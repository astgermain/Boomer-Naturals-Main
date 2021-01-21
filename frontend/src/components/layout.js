import React, { useContext } from "react"
import Header from "./header"
import Footer from "./footer"
import ShoppingCart from "./shopping-cart"
import { useStaticQuery, graphql } from "gatsby"
// import Client from "shopify-buy"
import StoreContext from "../util/store"
import HomeLayout from "./home-layout"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const { isCartOpen } = useContext(StoreContext)

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
      allShopifyCollection {
        nodes {
          id
          products {
            shopifyId
            id
            title
            priceRange {
              minVariantPrice {
                amount
              }
            }
            variants {
              id
            }
            images {
              originalSrc
              altText
              id
              localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
          }
          title
        }
      }
    }
  `)

  let content
  if (isRootPath) {
    content = (


      <HomeLayout />


      /*
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      */
    )
  }
  else {
    content = (

      children
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
      <div style={isCartOpen ? { display: 'flex' } : {}}>
        <div
          className={`layout-body-wrapper ${isCartOpen && "active"}`}
          data-is-root-path={isRootPath}
        >
          <Header data={data} />
          {content}
          <footer>
            <Footer />
          </footer>
        </div>
        <aside className={`shopping-cart-aside ${!isCartOpen && "inactive"}`}>
          <ShoppingCart />
        </aside>
      </div>
    </>
  )
}

export default Layout
