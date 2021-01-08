import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import SuggestedProductDisplay from './suggested-product-display'
import "../../styles/product-template.css"

const SuggestedProducts = () => {
    const data = useStaticQuery(graphql`
    {
      allShopifyCollection(
        filter: {
          title: { regex: "/New Arrivals|Most Popular|On Sale Items/" }
        }
        sort: { fields: title }
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
            shopifyId
            onlineStoreUrl
            descriptionHtml
            availableForSale
            totalInventory
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
  // Array of shopify nodes is in alphabetical order.  Make sure to destructure array in same order
  const [
    MOST_POPULAR_DATA,
    NEW_ARRIVALS_DATA,
    ON_SALE_DATA,
  ] = data.allShopifyCollection.nodes
    
    console.log('hi')
    console.log(MOST_POPULAR_DATA)
    return ( 
        <div className="suggested-products-container">
            <span>Suggested Products</span>
            <SuggestedProductDisplay MOST_POPULAR_DATA={MOST_POPULAR_DATA} />
        </div>
     );
}
 
export default SuggestedProducts;