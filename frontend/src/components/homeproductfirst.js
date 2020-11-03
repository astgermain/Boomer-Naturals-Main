import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "./slider"

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
          products {
            title
            onlineStoreUrl
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
            descriptionHtml
            availableForSale
            totalInventory
          }
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
  const firstThreeProducts = [data.allShopifyCollection.nodes[0].products[0], data.allShopifyCollection.nodes[0].products[1], data.allShopifyCollection.nodes[0].products[2]]
  //console.log(data.allShopifyCollection.nodes[0].products[0])
  let firstThree = <div>hi</div>
  {/* 
    
    <pre>{JSON.stringify(data, null, 4)}</pre> 

  */}
  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      {data.allShopifyCollection.nodes[0].title}
      <Slider dotsVal={true} speed={750} autoplay={false} arrowsVal={false} slide1={firstThree}/>
    </div>
  
  
  )
}

export default HomeProductFirst
