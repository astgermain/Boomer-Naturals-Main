import React, { useState, useContext, useEffect } from "react"
import { SEARCH_CSS } from "../util/imports"
import SearchResults from "./search-results"
import StoreContext from "../util/store"


const Search = ({ closeSearch, data, setUpdatedSearch }) => {

  const [searchValue, setSearchValue] = useState("")
  // const [searchResults, setSearchResults] = useState({})
  const [allProds, setAllProds] = useState({})
  const { sortedData, setSortedValue } = useContext(StoreContext)
  useEffect(() => {
    /*eslint-disable */
    let filteredData = data.allShopifyProduct.nodes.filter(product => {
      if (
        product.title.toLowerCase().match(searchValue.toLowerCase()) &&
        product.images.length

      ) {
        return product
      }
    })
    /*eslint-enable */
    setAllProds(data.allShopifyProduct.nodes)
    setSortedValue(filteredData)
    return function cleanup() {
    }
  }, [searchValue, data.allShopifyProduct.nodes, setSortedValue])

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
        <button className="close-search" onClick={closeSearch}>
          {" "}
        </button>
      </div>
      {searchValue && (
        <SearchResults
          allProducts={allProds}
          productsArray={sortedData}
          searchInput={searchValue}
        />
      )}
    </section>
  )
}

export default Search
