import React, { useState } from "react"
import Product from "./product";
import "../styles/search.css"

const SearchResults = ({ productsArray, searchInput }) => {
    const [modalShow, setModalShow] = useState("")

    const handleModalShow = e => {
        setModalShow(e)
    }
    console.log("products from props:", productsArray)

    const PRODUCT_LIST_ITEMS = productsArray.map(
        product =>
            <li key={product.shopifyId}>
                <Product productInfo={product} handleModalShow={handleModalShow} />
            </li>
    )
    
    const NO_RESULTS_MSG = (
        <li className="no-results">Your search for "{searchInput}" did not yield any results.</li>
    )
    
    return (
        <div className="search-results">
            <span className="results-info">
                Showing {productsArray.length} result{productsArray.length === 1 ? "" : "s"} for "{searchInput}"
            </span>
            <ul className="results-list">
                {productsArray.length ? PRODUCT_LIST_ITEMS : NO_RESULTS_MSG}
            </ul>
        </div>
    )
}

export default SearchResults;