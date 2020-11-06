import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import ProductSlider from "./productslider"
import Infocta from "./infocta"
import "../styles/featured.css"

const Featured = () => {

    const data = useStaticQuery(graphql`
    {
      allShopifyCollection(
        filter: {title: {regex: "/Featured Masks/"}},
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

    useEffect(() => {
        
    }, [])

    return (
        <section className="featured-container">
            <Infocta svgProp="svg image" maintextProp="Share Your Story"  buttontextProp="Learn More"  />
            <ProductSlider collection={data.allShopifyCollection.nodes[0].products} />
        </section>
    )
}

export default Featured