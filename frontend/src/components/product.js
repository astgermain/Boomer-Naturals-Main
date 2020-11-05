/**
 * Product Component
 *
 *
 */

import React, {useState} from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"

const Product = props => {
  const [options, setOptions] = useState("Closed")

  const optionsClick = () => {
    setOptions("Opened")
  }

  return (
    <div className="product-container">
      <Link to="/">
        <div className="product-header">
          <span className="product-header-text">{props.title}</span>
          <div className="product-header-price">
            <span className="price-mini">from</span>
            <span className="price-mini">${props.minPrice}</span>
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="product-images">
          <img className="product-image" src={props.mainImageSrc} alt={props.imageAltText} />
        </div>
      </Link>

      <div className="product-button" onClick={optionsClick}>
        {props.productButtonText}
      </div>
    </div>
  )
}

Product.defaultProps = {
    title: `Product Title`,
    minPrice: `9.99`,
    mainImageSrc: `https://cdn.shopify.com/s/files/1/0269/0013/6054/products/ADULT1.jpg?v=1604435084`,
    imageAltText: `alt text`,
    productButtonText: `Product Options`

}

Product.propTypes = {
    title:propTypes.string,
    minPrice:propTypes.string,
    mainImageSrc:propTypes.string,
    imageAltText:propTypes.string,
    productButtonText:propTypes.string,
}

export default Product
