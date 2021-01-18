import React, { useState, useContext, useEffect } from "react"
import "../styles/search.css"
import SearchResults from "./search-results"
import StoreContext from "../util/store"
// Needs regex
// Needs to pass shopifyId to results page to render products
// Possible to just have a popup and render results same page

const Search = ({ closeSearch, data, setUpdatedSearch }) => {

  const [searchValue, setSearchValue] = useState("")
  const [searchResults, setSearchResults] = useState({})
  const [allProds, setAllProds] = useState({})
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const { sortedData, setSortedValue } = useContext(StoreContext)

  useEffect(() => {
    
      let filteredData = data.allShopifyProduct.nodes.filter(product => {
        if (
          product.title.toLowerCase().match(searchValue.toLowerCase()) &&
          product.images.length 
          
        ) {
          return product
        }
      }) 
      setAllProds(data.allShopifyProduct.nodes)
      setSortedValue(filteredData)
      return function cleanup() {
      }
  }, [searchValue])

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
          allProducts={allProds}
          productsArray={sortedData}
          searchInput={searchValue}
        />
      )}
    </section>
  )
}

export default Search
