import React, { useState, useEffect } from "react"
import Product from "./product";
import { Link } from "gatsby"
import "../styles/search.css"

const SearchResults = ({ productsArray, searchInput }) => {
    const [modalShow, setModalShow] = useState("")
    // Num of products to display
    const ITEMS_TO_SHOW = 10

    const handleModalShow = e => {
        setModalShow(e)
    }


    // Creates array of product components with length of ITEMS_TO_SHOW amount
    const PRODUCT_LIST_ITEMS = productsArray.slice(0, ITEMS_TO_SHOW).map(
        product =>
            <li key={product.shopifyId}>
                <Product productInfo={product} handleModalShow={handleModalShow} />
            </li>
    )
    
    const NO_RESULTS_MSG = (
        <li className="no-results">Your search for "{searchInput}" did not yield any results.</li>
    )
    
    // creates "results-info" text with products being presented and length of results as input
    const createResultsInfo = (numShowing, arrLength) => {
        const showingTxt = `${numShowing < arrLength ? numShowing : arrLength} of ${arrLength}`
        return `Showing ${arrLength ? showingTxt : 0} result${arrLength === 1 ? "" : "s"} for "${searchInput}"`
    }

    // Renders when there are more items to show than ITEMS_TO_SHOW
    const SEE_MORE_BTN = (
        <Link className="see-more-btn" to="/filter" state={{ productsArray }}>See all results ({productsArray.length})</Link>
    ) 

    return (
        <div className="search-results">
            <span className="results-info">
                {createResultsInfo(ITEMS_TO_SHOW, productsArray.length)}
            </span>
            <ul className="results-list">
                {productsArray.length ? PRODUCT_LIST_ITEMS : NO_RESULTS_MSG}
            </ul>
            {ITEMS_TO_SHOW < productsArray.length && SEE_MORE_BTN}
        </div>
    )
}

export default SearchResults;