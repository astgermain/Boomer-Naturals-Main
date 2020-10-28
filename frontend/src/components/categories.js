/**
 * Category Component
 *  
 * 
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../categories.css"


const Categories = () => {
 
  return (
    <div className="category-container">
        {/* Facemask category button */}
        <Link to="/" className="full-category">
            <span className="category-text">Face Mask</span>
        </Link>
        {/* Gaiters category button */}
        <Link to="/" className="full-category">
            <span className="category-text">Gaiters</span>
        </Link>
        {/* PPE category button */}
        <Link to="/" className="full-category">
            <span className="category-text">PPE</span>
        </Link>
        <div className="category-group">
            {/* Botanics category button */}
            <Link to="/" className="half-category">
                <span className="category-text-half">Botanics</span>
            </Link>
            {/* Skin Care category button */}
            <Link to="/" className="half-category">
                <span className="category-text-half">Skin Care</span>
            </Link>
        </div>
    </div>
  )
}

Categories.defaultProps = {
}

Categories.propTypes = {
}

export default Categories
