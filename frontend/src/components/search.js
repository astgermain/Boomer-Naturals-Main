import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/search.css"
import SearchResults from "./search-results"
// Needs regex
// Needs to pass shopifyId to results page to render products
// Possible to just have a popup and render results same page

const Search = ({ closeSearch }) => {

  const data = useStaticQuery(graphql`
  {
    allShopifyProduct {
      nodes {
        availableForSale
        descriptionHtml
        handle
        id
        images {
          altText
          originalSrc
        }
        onlineStoreUrl
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        productType
        shopifyId
        tags
        title
        totalInventory
        variants {
          availableForSale
          id
          image {
            altText
            originalSrc
          }
          priceV2 {
            amount
            currencyCode
          }
          quantityAvailable
          requiresShipping
          selectedOptions {
            name
            value
          }
          shopifyId
          title
        }
      }
    }
  }
`)

  const [searchValue, setSearchValue] = useState("")
  const [searchResults, setSearchResults] = useState()

  useEffect(() => {
    let filteredData = data.allShopifyProduct.nodes.filter(product => {
      if (product.title.toLowerCase().match(searchValue.toLowerCase()) && product.images.length) {
        return product
      }
    })

    setSearchResults(filteredData)
  }, [searchValue])

  // prevents reload on form submit
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="search-section">
      <div>
        <form onSubmit={handleSubmit} className="search-form">
          <label>
            <input
              name="search"
              type="input"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Search Boomer Naturals"
            />
          </label>
        </form>
        <a className="close" onClick={closeSearch}></a>
      </div>
      {searchValue && <SearchResults allProducts={data.allShopifyProduct} productsArray={searchResults} searchInput={searchValue} />}

    </section>
  )
}

export default Search
