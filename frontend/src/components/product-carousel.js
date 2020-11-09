import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/product-carousel.css"
import ProductSlider from "./productslider"
import MainButton from "./main-button"

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

    // Array of shopify nodes is in alphabetical order.  Make sure to destructure array in same order 
    const [MOST_POPULAR_DATA, NEW_ARRIVALS_DATA, ON_SALE_DATA] = data.allShopifyCollection.nodes

    // The order of array items is the order the buttons are displayed from top to bottom
    const NAV_TITLE_ARR = [NEW_ARRIVALS_DATA.title, MOST_POPULAR_DATA.title, ON_SALE_DATA.title]

    // Products array is updated with array from query data that matches clicked button
    useEffect(() => {
        const [dataFilteredOnClick] = data.allShopifyCollection.nodes.filter(({ title }) => title == clickedNavBtn)
        setRenderedProductsArray(dataFilteredOnClick.products)
    }, [clickedNavBtn])

    const handleNavClick = (e) => {
        // value constant is the title of the clicked nav btn
        const { value } = e.target
        setClickedNavBtn(value)
    }

    const NAV_LIST_ITEMS = NAV_TITLE_ARR.map((title, index) => {
        const isActive = clickedNavBtn == title && "active"
        return (
            <li key={index} className={`nav-btn-list-items ${isActive}`}>
                <div>
                    <span className={isActive}></span>
                </div>
                <button
                    className={`carousel-nav-btn ${isActive}`}
                    onClick={handleNavClick}
                    value={title}
                >
                    {title}
                </button>
            </li>
        )
    })

    const REDIRECT_LINK = (
        <Link className="redirect-link" to="/">
            <MainButton text="View All" />
        </Link>
    )

    return (
        <section className="product-carousel-container">
            <div className="carousel-nav-links-container">
                <ul className="carousel-nav-wrapper">
                    {NAV_LIST_ITEMS}
                    <li style={{paddingLeft: '3vw'}}>{REDIRECT_LINK}</li>
                </ul>
                
            </div>
            <ProductSlider collection={renderedProductsArray} />
        </section>
    )
}

export default ProductCarousel