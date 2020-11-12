import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/search.css"
import SearchResults from "./search-results"
// Needs regex
// Needs to pass shopifyId to results page to render products
// Possible to just have a popup and render results same page

const Search = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        nodes {
          title
          shopifyId
        }
      }
    }
  `)
  const [searchValue, setSearchValue] = useState("")
  const [searchResults, setSearchResults] = useState()
  let filteredData
  useEffect(() => {
    filteredData = data.allShopifyProduct.nodes.filter(product => {
      if (product.title.toLowerCase().match(searchValue.toLowerCase())) {
        return product
      }
    })

    setSearchResults(
      filteredData.map(product => {
        return <li key={product.shopifyId}>{product.title}</li>
      })
    )
  }, [searchValue])
console.log("searchresults ->",searchResults)
  return (
    <section className="search-section">
      <form className="search-form">
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
        <SearchResults />
    </section>
  )
}

export default Search
