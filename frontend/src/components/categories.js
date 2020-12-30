/**
 * Category Component
 *
 *
 */

import React from "react"
import { Link } from "gatsby"
import "../styles/categories.css"

const Categories = () => {
  return (
    <section className="category-container">
      {/* Facemask category button */}
      <Link to="/" className="full-category cat1">
       <span className="category-text">Face Cover</span>
       <div className="overlay">
         <div className="viewMoreText">View More</div>  
       </div>
        
      </Link>

      {/* Gaiters category button */}
      <Link to="/" className="full-category cat2">
        <span className="category-text">Gaiters</span>
        <div className="overlay">
         <div className="viewMoreText">View More</div>  
       </div>
      </Link>
      {/* PPE category button */}
      <Link to="/" className="full-category cat3">
        <span className="category-text">PPE</span>
        <div className="overlay">
         <div className="viewMoreText">View More</div>  
       </div>
      </Link>
      <div className="category-group">
        {/* Botanics category button */}
        <Link to="/" className="half-category">
          <span className="category-text-half">Botanics</span>
          <div className="overlay">
         <div className="viewMoreText">View More</div>  
       </div>  
        </Link>
        {/* Skin Care category button */}
        <Link to="/" className="half-category">
          <span className="category-text-half">Skin Care</span>
          <div className="overlay">
         <div className="viewMoreText">View More</div>  
       </div>
        </Link>
      </div>
    </section>
  )
}

Categories.defaultProps = {}

Categories.propTypes = {}

export default Categories
