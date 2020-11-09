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
  {
    /*
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
  */
  }

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
  let collectionSize = 0
  let prodData = []

  // Uses the product stack to generate product components
  let populateProductSliderData = products => {
    collectionSize = products.length
    let tempArr = []
    for (let i = 0; i < products.length; i++) {
      if (products[i]) {
        let prod = <Product key={products[i].shopifyId} productInfo={products[i]} />
        if(products[i].variants.length > 1){
          let prodVariantArr = products[i].variants.map((data)=> {
            return ({
              "@type": "Product",
              image: `${data.image.originalSrc}`,
              /* TODO: Need URL For Variants */
              url: `${data.title}`,
              name: `${products[i].title} ${data.title}`,
              offers: {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                price: `${data.priceV2.amount}`,
                "priceCurrency": `${data.priceV2.currencyCode}`
              },
              /* TODO: Products need reviews entered in structured data */
            })
          })
          prodData.push({
            "@type": "ProductGroup",
            image: `${products[i].images[0].originalSrc}`,
            /* This URL might be wrong */
            url: `${products[i].onlineStoreUrl}`,
            name: `${products[i].title}`,
            offers: {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              price: `${products[i].title}`,
              "priceCurrency": "USD"
            },
            "hasVariant": prodVariantArr,
          })
        }
        else {
          prodData.push({
            "@type": "Product",
            image: `${products[i].images[0].originalSrc}`,
            url: `${products[i].onlineStoreUrl}`,
            name: `${products[i].title}`,
            offers: {
              "@type": "Offer",
              price: `${products[i].title}`,
            },
          })
        }
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
  populateProductSliderData(collection.slice(0, 9))
  populateSlides(slideData)
  let strucData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: `${collectionSize}`,
    itemListElement: { prodData },
  }
  let strucDataJson = JSON.stringify(strucData)

  return (
    <div className="product-slider">
      {/* Script is for structured data and SEO purposes            */}
      <script type="application/ld+json">{strucDataJson}</script>
      {collection.title}
      {slider}
    </div>
  )
}

ProductSlider.defaultProps = {}

ProductSlider.propTypes = {}

export default ProductSlider
