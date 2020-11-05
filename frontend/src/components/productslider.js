import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Slider from "./slider"
import Product from "./product"
import "../styles/product.css"

const ProductSlider = ({ collection }) => {
  {
    /* Takes a shopify id of a collection and displays it, in this case the Featured collection 
  
  pageInfo probably not needed and totalCount
  bottom descriptionHTML shows nothign but may show collection text
  
  */
  }
{/*
  const data = useStaticQuery(graphql`
    {
      allShopifyCollection(
        filter: {
          products: { elemMatch: { availableForSale: { eq: true } } }
          shopifyId: {
            eq: "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE2Nzg4MzgzMzQ2Mg=="
          }
        }
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
  */}

  {
    /* 
    Sort variants by color name and group color names
    Then offer options for size and adjustability.


    For variant color displays, create a stack and loop through the number of displayed you want. 
    If value has been pushed to the stack then don't add an image, but add a size and adjustability to that entry.
  */
  }

  let slideData = []
  let slider = undefined

  // Uses the product stack to generate product components
  let populateProductSliderData = products => {
    let tempArr = []
    for (let i = 0; i < products.length; i++) {
      if (products[i]) {
        let prod = <Product productInfo={products[i]} />
        //console.log(products[i])
        tempArr.push(prod)
      }
      if (tempArr.length == 3) {
        slideData.push(tempArr)
        tempArr = []
      }
    }
  }

  // Uses products components to populate Product Slider up to 3
  let populateSlides = slideData => {
    let tempSlideData = slideData
    slider = (
      <Slider
        dotsVal={true}
        speed={750}
        autoplay={false}
        arrowsVal={false}
        slide1={tempSlideData[0] && tempSlideData[0]}
        slide2={tempSlideData[1] && tempSlideData[1]}
        slide3={tempSlideData[2] && tempSlideData[2]}
      />
    )
  }
  populateProductSliderData(collection.products.slice(0,9))
  populateSlides(slideData)

  return (
    <div className="product-slider">
      {collection.title}
      {slider}
    </div>
  )
}

ProductSlider.defaultProps = {

}

ProductSlider.propTypes = {}

export default ProductSlider
