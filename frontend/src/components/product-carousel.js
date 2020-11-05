import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/product-carousel.css"


const ProductCarousel = () => {
    const [clickedNavBtn, setClickedNavBtn] = useState("New Arrivals")
    const [renderedProductsArray, setRenderedProductsArray] = useState([])

    // perform query when clickedNavBtn is updated
    useEffect(() => {
        console.log('Current Products: ', renderedProductsArray, clickedNavBtn)
    }, [clickedNavBtn])

    const handleNavClick = (e) => {
        // title constant is the title of the clicked nav btn
        const { value } = e.target
        setClickedNavBtn(value)
    }

    const NAV_TITLE_ARR = ["New Arrivals", "Most Popular", "On-Sale"]

    const NAV_LIST_ITEMS = NAV_TITLE_ARR.map((title, index) => (
        <li key={index}>
            <button className="carousel-nav-btn" onClick={handleNavClick} value={title}>{title}</button>
        </li>
    ))

    return (
        <div className="product-carousel-container">
            <div className="carousel-nav-links-container">
                <ul className="carousel-nav-wrapper">
                    {NAV_LIST_ITEMS}
                </ul>
                <div className="redirect-btn">
                    <Link to="/">View All</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCarousel