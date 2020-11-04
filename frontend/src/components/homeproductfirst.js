import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Slider from "./slider"
import Product from "./product"
import "../styles/product.css"


const HomeProductFirst = () => {
  {
    /* Takes a shopify id of a collection and displays it, in this case the Featured collection 
  
  pageInfo probably not needed and totalCount
  bottom descriptionHTML shows nothign but may show collection text
  
  */
  }

  const data = useStaticQuery(graphql`
    {
      allShopifyCollection(
        filter: {
          products: {elemMatch: {availableForSale: {eq: true}}}, shopifyId: {eq: "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE2Nzg4MzgzMzQ2Mg=="}
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
  {/* 
    Sort variants by color name and group color names
    Then offer options for size and adjustability.


    For variant color displays, create a stack and loop through the number of displayed you want. 
    If value has been pushed to the stack then don't add an image, but add a size and adjustability to that entry.

    

  */}
  {/*

  const firstThreeProducts = [data.allShopifyCollection.nodes[0].products[0], data.allShopifyCollection.nodes[0].products[1], data.allShopifyCollection.nodes[0].products[2]]
  console.log(data.allShopifyCollection.nodes[0])
  let firstThree = 
  <div className="product-container">
    <Link to="/">
      <div className="product-header">
        <span className="product-header-text">{data.allShopifyCollection.nodes[0].products[0].title}</span>
        <div className="product-header-price"><span className="price-mini">from</span>  <span className="price-mini">${data.allShopifyCollection.nodes[0].products[0].priceRange.minVariantPrice.amount}</span></div>
      </div>
    </Link>
    <Link to="/">
      <div className="product-images">
        <img className="product-image" src={data.allShopifyCollection.nodes[0].products[0].images[0].originalSrc} alt={data.allShopifyCollection.nodes[0].products[0].images[0].altText} />
      </div>
    </Link>

    <div className="product-button">Product Options</div>
    
  </div>;

   
    
    <pre>{JSON.stringify(data, null, 4)}</pre> 

  */}

  let firstThree = <Product />

  return (
    <div className="product-slider">
      {data.allShopifyCollection.nodes[0].title}
      <Slider dotsVal={true} speed={750} autoplay={false} arrowsVal={false} slide1={firstThree} />
    </div>
  
  
  )
}

HomeProductFirst.defaultProps = {
}

HomeProductFirst.propTypes = {
}

export default HomeProductFirst
