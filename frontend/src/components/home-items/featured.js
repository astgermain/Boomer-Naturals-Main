import React, { useEffect } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ProductSlider from "../productslider"
import Infocta from "../infocta"
import "../../styles/featured.css"

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyCollection(
        filter: { title: { regex: "/Featured Covers/" } }
        sort: { fields: title }
      ) {
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

  useEffect(() => {}, [])

  let shopIcon = (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Shop Icon</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Product-Page-Copy-7"
          transform="translate(-341.000000, -661.000000)"
          fill="#26293E"
        >
          <g id="Group-12" transform="translate(337.000000, 661.000000)">
            <path
              d="M32.4959599,3.55271368e-15 L33.9952714,26.8335899 C34.0877047,28.4878932 32.8138614,29.9034753 31.1500628,29.9953811 C31.0664232,29.9992299 31.0664232,29.9992299 30.9826976,30 L7.01721928,30 C5.35085508,30 4,28.6568542 4,27 C4.00077454,26.9167522 4.00077454,26.9167522 4.00464545,26.8335899 L5.50395702,3.55271368e-15 L32.4959599,3.55271368e-15 Z M29.6417113,3 L8.35820563,3 L7.01721928,27 L30.9826976,27 L29.6417113,3 Z M14.4741295,6 L14.4741295,9.75 C14.4741295,11.6225595 16.5637627,13.5 18.9999584,13.5 C21.4361542,13.5 23.5257874,11.6225595 23.5257874,9.75 L23.5257874,6 L26.5430066,6 L26.5430066,9.75 C26.5430066,13.3510434 23.0381478,16.5 18.9999584,16.5 C14.9617691,16.5 11.4569102,13.3510434 11.4569102,9.75 L11.4569102,6 L14.4741295,6 Z"
              id="icon"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )

  let pSlide = () => {
    try{
      return(
      <ProductSlider collection={data.allShopifyCollection.nodes[0].products} />
      )
    }
    catch {
      return(
      <div>Update collection title</div>
      )
    }
  }

  return (
    <section className="featured-container">
      <Infocta
        svgProp={shopIcon}
        maintextProp="Let's Shop"
        buttontextProp="View All"
      />
      {pSlide()}
      
    </section>
  )
}

export default Featured
