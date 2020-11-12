import React, { useState } from "react"
import Product from "./product";

const SearchResults = ({ productsArray }) => {
    const [modalShow, setModalShow] = useState("")

    const handleModalShow = e => {
        setModalShow(e)
    }
    return (
        <div className="search-results">
            Hello from search results
        </div>
    )
}

export default SearchResults;