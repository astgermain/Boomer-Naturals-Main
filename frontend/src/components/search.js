import React, { useState, useEffect } from "react"
import "../styles/search.css"
import SearchResults from "./search-results"
// Needs regex
// Needs to pass shopifyId to results page to render products
// Possible to just have a popup and render results same page

const Search = ({ closeSearch, data }) => {

  const [searchValue, setSearchValue] = useState("")
  const [searchResults, setSearchResults] = useState()

  useEffect(() => {
    let filteredData = data.allShopifyProduct.nodes.filter(product => {
      if (
        product.title.toLowerCase().match(searchValue.toLowerCase()) &&
        product.images.length
      ) {
        return product
      }
    })

    setSearchResults(filteredData)
  }, [searchValue, data.allShopifyProduct.nodes])

  // prevents reload on form submit
  const handleSubmit = e => {
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
        <button className="close" onClick={closeSearch}>
          {" "}
        </button>
      </div>
      {searchValue && (
        <SearchResults
          allProducts={data.allShopifyProduct}
          productsArray={searchResults}
          searchInput={searchValue}
        />
      )}
    </section>
  )
}

export default Search
