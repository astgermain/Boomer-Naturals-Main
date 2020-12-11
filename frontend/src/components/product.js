/**
 * Product Component
 *
 *
 */

import React, { useState } from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Product = ({ productInfo, handleModalShow }) => {
  const [options, setOptions] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const optionsClick = () => {
    handleModalShow(productInfo)
    setOptions(true)
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

  const areMultipleVariants = productInfo.variants.length > 1

  let handleAdd = () => {
    setQuantity(quantity + 1)
  }

  let handleSub = () => {
    if (quantity > 1) return setQuantity(quantity - 1)
  }

  return (
    <div
      className="product-container"
      vocab="https://schema.org/"
      typeof="Product"
    >
      {areMultipleVariants ? (
        <div className="multiple-varient-product">
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
              {/*<img
                className="product-image"
                src={productInfo.images[0].originalSrc}
                alt={productInfo.images[0].altText}
              />
              */}
              <Img
                fluid={productInfo.images[0].localFile.childImageSharp.fluid}
                alt={productInfo.images[0].altText}
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>
          </Link>

          <div
            className="product-button"
            role="button"
            tabIndex={0}
            onClick={optionsClick}
          >
            <span>Product Options</span>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 34 34"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Product-Page-Copy-7"
                  transform="translate(-499.000000, -416.000000)"
                >
                  <rect
                    id="Rectangle-Copy-47"
                    fill="#00A0C5"
                    x="341"
                    y="408"
                    width="206"
                    height="49"
                    rx="24.5"
                  ></rect>
                  <g
                    id="Group-11"
                    transform="translate(499.000000, 416.000000)"
                  >
                    <path
                      d="M17,34 C7.61115925,34 0,26.3888407 0,17 C0,7.61115925 7.61115925,0 17,0 C26.3888407,0 34,7.61115925 34,17 C34,26.3888407 26.3888407,34 17,34 Z"
                      id="Path-Copy-5"
                      fill="#FFFFFF"
                    ></path>
                    <polygon
                      id="icon"
                      fill="#26293E"
                      points="19.7505352 19.0933354 9 19.0933354 9 15.9066646 19.7505352 15.9066646 16.007652 12.2533166 18.3161922 10 26 17.5 18.3161922 25 16.007652 22.7466834"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <div className="single-varient-product">
          <Link to="/">
            <div className="product-header">
              <title className="product-header-text">{productInfo.title}</title>
              <div className="product-header-price">
                <span className="price">${formattedPrice}</span>
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

          <div className="flex-quantity-addcart">
            <div className="quantity-section">
              <div className="qty-show-num">
                <span>Quantity</span>
                <span>{quantity}</span>
              </div>
            </div>

            <div className="flex-add-minus">
              <div
                className="qty-add-num"
                role="button"
                tabIndex={0}
                onClick={handleAdd}
              >
                <span>+</span>
              </div>
              <div
                className="qty-minus-num"
                role="button"
                tabIndex={0}
                onClick={handleSub}
              >
                <span>-</span>
              </div>
            </div>

            <div
              className="product-button"
              role="button"
              tabIndex={0}
              id="add-to-cart-btn"
              onClick={optionsClick}
            >
              <span>Add To Cart</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

Product.defaultProps = {
  title: `Product Title`,
  minPrice: `9.99`,
  originalSrc: `https://cdn.shopify.com/s/files/1/0269/0013/6054/products/ADULT1.jpg?v=1604435084`,
  imageAltText: `alt text`,
  productButtonText: `Product Options`,
}

Product.propTypes = {
  title: propTypes.string,
  minPrice: propTypes.string,
  originalSrc: propTypes.string,
  imageAltText: propTypes.string,
  productButtonText: propTypes.string,
}

export default Product
