/**
 * Product Component
 *
 *
 */

import React, { useState } from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"

const Product = ({ productInfo }) => {
  const [options, setOptions] = useState("Closed")

  const optionsClick = () => {
    setOptions("Opened")
  }

  let priceFormat = price => {
    price *= 100
    price = price.toString()
    if (price.length < 3) {
      price = "0." + price
    } else {
      price =
        price.slice(0, price.length - 2) + "." + price.slice(price.length - 2)
    }
    return price
  }

  let formattedPrice = priceFormat(
    productInfo.priceRange.minVariantPrice.amount
  )
  return (
    <section className="product-container" vocab="https://schema.org/" typeof="Product">
      <Link to="/">
        <div className="product-header">
          <title className="product-header-text">{productInfo.title}</title>
          <div className="product-header-price">
            <span className="price-mini">from</span>
            <span className="price-mini">${formattedPrice}</span>
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="product-images">
          <img
            className="product-image"
            src={productInfo.images[0].originalSrc}
            alt={productInfo.images[0].altText}
          />
        </div>
      </Link>

      <div className="product-button" onClick={optionsClick}>
        Product Options
      </div>
    </section>
  )
}

Product.defaultProps = {
  title: `Product Title`,
  minPrice: `9.99`,
  mainImageSrc: `https://cdn.shopify.com/s/files/1/0269/0013/6054/products/ADULT1.jpg?v=1604435084`,
  imageAltText: `alt text`,
  productButtonText: `Product Options`,
}

Product.propTypes = {
  title: propTypes.string,
  minPrice: propTypes.string,
  mainImageSrc: propTypes.string,
  imageAltText: propTypes.string,
  productButtonText: propTypes.string,
}

export default Product
