import React, { useState, useEffect } from "react"
import Product from "./product";
import ProductModal from "./product-modal"
import "../styles/search.css"
import MainButton from "../components/main-button"

const SearchResults = ({ allProducts, productsArray, searchInput }) => {

    const [modalShow, setModalShow] = useState("")
    // Num of products to display
    const ITEMS_TO_SHOW = 12

    const handleModalShow = e => {
        setModalShow(e)
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return function cleanup() {
            document.body.style.overflow = 'scroll'
          };
    }, [])


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
        <MainButton text="See Results" link="/filter" state={{ allProducts, productsArray }}/>
    ) 

    return (
        <div className="search-results">
            <div className="results-info">
            {createResultsInfo(ITEMS_TO_SHOW, productsArray.length)}
            {0 < productsArray.length && SEE_MORE_BTN}
            
            
            </div>


              <ul className="results-list">  
                           {modalShow.availableForSale && (
                <ProductModal type1='product-modal-search' type2='product-modal-inner-search' data={modalShow} setModalShow={setModalShow} />
                )} 
            {productsArray.length ? PRODUCT_LIST_ITEMS : NO_RESULTS_MSG}
           </ul>
           
            
        </div>
    )
}

export default SearchResults;