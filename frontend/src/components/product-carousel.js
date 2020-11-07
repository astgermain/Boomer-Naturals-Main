import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/product-carousel.css"
import ProductSlider from "./productslider"

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
            <button className="redirect-btn">
                <span class="button-text">View All</span>
                <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 34 34"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Product-Page-Copy-7" transform="translate(-499.000000, -416.000000)">
                            <rect id="Rectangle-Copy-47" fill="#00A0C5" x="341" y="408" width="206" height="49" rx="24.5"></rect>
                            <g id="Group-11" transform="translate(499.000000, 416.000000)">
                                <path d="M17,34 C7.61115925,34 0,26.3888407 0,17 C0,7.61115925 7.61115925,0 17,0 C26.3888407,0 34,7.61115925 34,17 C34,26.3888407 26.3888407,34 17,34 Z" id="Path-Copy-5" fill="#FFFFFF"></path>
                                <polygon id="icon" fill="#26293E" points="19.7505352 19.0933354 9 19.0933354 9 15.9066646 19.7505352 15.9066646 16.007652 12.2533166 18.3161922 10 26 17.5 18.3161922 25 16.007652 22.7466834"></polygon>
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
        </Link>
    )

    return (
        <section className="product-carousel-container">
            <div className="carousel-nav-links-container">
                <ul className="carousel-nav-wrapper">
                    {NAV_LIST_ITEMS}
                </ul>
                {REDIRECT_LINK}
            </div>
            <ProductSlider collection={renderedProductsArray} />
        </section>
    )
}

export default ProductCarousel