import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  const [searchResults, setSearchResults] = useState();
  let filteredData;
  useEffect(() => {
    filteredData = data.allShopifyProduct.nodes.filter(product => {
        if (product.title.toLowerCase().match(searchValue.toLowerCase())) {
          return product
        }
      })

    setSearchResults(filteredData.map(product => {
        return <li key={product.shopifyId}>{product.title}</li>
    }))
  },[searchValue])

  return (
    <section>
        <form>
      <label>
          Search Value
          <input
            name="search"
            type="input"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)} />
        </label>
        </form>
      {searchResults}
    </section>
  )
}

export default Search
