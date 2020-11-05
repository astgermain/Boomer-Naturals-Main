import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/product-carousel.css"
import Product from "./product"


const ProductCarousel = () => {

    const [clickedNavBtn, setClickedNavBtn] = useState("New Arrivals")
    const [renderedProductsArray, setRenderedProductsArray] = useState([])

    const data = useStaticQuery(graphql`
    {
      allShopifyCollection(
        filter: {title: {regex: "/New Arrivals|Most Popular|On Sale Items/"}},
        sort: {fields: title}
      ) {
        nodes {
          shopifyId
          title
          descriptionHtml
          image {
            altText
            src
          }
          internal {
            content
            description
            ignoreType
            mediaType
          }
          products {
            title
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
              }
              availableForSale
            }
          }
        }
      }
    }
  `)

    // Array of shopify nodes is in alphabetical order.  Make sure to destructure array in same order 
    const [MOST_POPULAR_DATA, NEW_ARRIVALS_DATA, ON_SALE_DATA] = data.allShopifyCollection.nodes

    const NAV_TITLE_ARR = [NEW_ARRIVALS_DATA.title, MOST_POPULAR_DATA.title, ON_SALE_DATA.title]

    // Products array is updated with array from query data that matches clicked button
    useEffect(() => {
        const [dataFilteredOnClick] = data.allShopifyCollection.nodes.filter(({ title }) => title == clickedNavBtn)
        setRenderedProductsArray(dataFilteredOnClick.products)
        console.log('clicked data:', dataFilteredOnClick.products)
    }, [clickedNavBtn])

    const handleNavClick = (e) => {
        // value constant is the title of the clicked nav btn
        const { value } = e.target
        setClickedNavBtn(value)
    }

    const NAV_LIST_ITEMS = NAV_TITLE_ARR.map((title, index) => (
        <li key={index}>
            <button className="carousel-nav-btn" onClick={handleNavClick} value={title}>{title}</button>
        </li>
    ))

    const PRODUCTS_LIST_ITEMS = renderedProductsArray.map((productObject, index) => (
        <li key={index}>
            <Product
                title={productObject.title}
                minPrice={productObject.priceRange.minVariantPrice.amount}
                mainImageSrc={productObject.images[0].originalSrc}
                imageAltText={productObject.images[0].altText}
            />
        </li>
    ))

    return (
        <div className="product-carousel-container">
            <div className="carousel-nav-links-container">
                <ul className="carousel-nav-wrapper">
                    {NAV_LIST_ITEMS}
                </ul>
                <Link to="/">
                    <div className="redirect-btn">View All</div>
                </Link>
            </div>
            <div className="product-carousel-container">
                <ul className="product-carousel-wrapper">
                    {PRODUCTS_LIST_ITEMS}
                </ul>
            </div>
        </div>
    )
}

export default ProductCarousel