import React, { useContext, useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import ShoppingCart from "./shopping-cart"
import { useStaticQuery, graphql } from "gatsby"
// import Client from "shopify-buy"
import StoreContext from "../util/store"
import HomeLayout from "./home-layout"
import FilterComponent from "./filter-component"


const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // eslint-disable-next-line no-unused-vars
  const { isCartOpen, toggleCart } = useContext(StoreContext)
  // eslint-disable-next-line no-unused-vars
  const { collectionData, setCollectionValue } = useContext(StoreContext)

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
      allShopifyCollection{
        nodes {
          shopifyId
          title
          descriptionHtml
          image {
            altText
            src
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          internal {
            content
            description
            ignoreType
            mediaType
          }
          products {
            title
            shopifyId
            onlineStoreUrl
            descriptionHtml
            availableForSale
            totalInventory
            images {
              altText
              originalSrc
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                currencyCode
                amount
              }
            }
            productType
            tags
            variants {
              title
              id
              selectedOptions {
                name
                value
              }
              priceV2 {
                amount
                currencyCode
              }
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
              availableForSale
              quantityAvailable
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    setCollectionValue(data.allShopifyCollection.nodes)
  }, [data, setCollectionValue])
  let content
  if (isRootPath) {
    content = (
      <HomeLayout data={data} />

      /*
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      */
    )
  } else if (location.pathname === `/filter`) {
    content = <FilterComponent data={data} />
  }
  else {
    content = children
    /*
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      */
  }

  return (
    <>
      {/* Overlay for when shopping cart is opened */}
      <div style={isCartOpen ? { display: "flex" } : {}}>
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
