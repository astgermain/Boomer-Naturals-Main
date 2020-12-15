/**
 * Modal component for quick buy feature
 */

import React, { useState, useEffect } from "react"
import "../styles/product-modal.css"
import { Slide } from "react-awesome-reveal"
import errorImg from "../../content/assets/errorImg.png"

const ProductModal = ({ data, setModalShow }) => {
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState(data.images[0].originalSrc)
  const [mainImageAlt, setMainImageAlt] = useState(data.images[0].altText)
 
  let variantSelected = ( data ) =>{
    setMainImage(data[0].image.originalSrc);
    setMainImageAlt(data[0].image.altText);
  }
  useEffect(() => {
  }, [])

 

  let mainArray = []
  let dataSet = new Set()
  let colorSet = new Set()
  let tempHolder = []
  let start = true
  data.variants.forEach(variant => {
    if (variant.availableForSale) {
      variant.selectedOptions.forEach(option => {
        if (option.name === "Color") {
          if (!colorSet.has(option.value)) {
            colorSet.add(option.value)
            if (!start) {
              let tmp = []
              tempHolder.forEach(val => {
                tmp.push(val)
              })
              let options = new Set()
              dataSet.forEach(value => {
                options.add(value)
              })
              tmp.push(options)
              mainArray.push(tmp)
              tempHolder = []
            } else {
              start = false
            }
            dataSet.clear()
            dataSet.add(option.value)
          }
        } else {
          dataSet.add(option.value)
        }
      })
      tempHolder.push(variant)
    }
  })
  let tSet = []
  tempHolder.forEach(val => {
    tSet.push(val)
  })
  let rSet = new Set()
  dataSet.forEach(value => {
    rSet.add(value)
  })
  tSet.push(rSet)
  mainArray.push(tSet)
  let hideModal = () => {
    setModalShow({})
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

  let formattedPrice = priceFormat(data.priceRange.minVariantPrice.amount)

  let handleAdd = () => {
    setQuantity(quantity + 1)
  }
  let generateVariantThumbs = variantData => {
    return variantData.map(data => {
      try {
        return (
          <button className="variant-thumb" onClick={() => variantSelected(data)}  >
          <img
            src={data[0].image.originalSrc}
            className="variant-thumb"
            alt={data[0].image.altText}
          />
          </button>
        )
      } catch {
        return (
          <button className="variant-thumb" onClick={() => variantSelected(data)}  >
          <img
            src={errorImg}
            className="variant-thumb"
            alt="error image"
          />
          </button>
        )
      }
    })
  }
  let variantThumbs = generateVariantThumbs(mainArray)

  let handleSub = () => {
    if (quantity > 1) return setQuantity(quantity - 1)
  }
  console.log("data set:", data)
  console.log('mainarray:', mainArray)

  return (
    <Slide
      duration={500}
      triggerOnce={true}
      direction="up"
      className="product-modal"
    >
      <div className="product-modal-inner">
        <div className="modal-options">
          <div className="modal-price">from ${formattedPrice}</div>
          <div className="modal-type">
            <div className="adult-type">Adult</div>
            <div className="kid-type">Children</div>
          </div>
          <div className="modal-size">
            <div className="product-size-option">S</div>
            <div className="product-size-option">M</div>
            <div className="product-size-option">L</div>
            <div className="product-size-option">XL</div>
          </div>
          <div className="modal-quantity">
            <span>Quantity</span>
            <div className="quantityButton">
            <div
                role="button"
                tabIndex={0}
                className="quantityButtonPartL"
                onClick={handleAdd}
              >
                <span>+</span>
              </div>
              <span>{quantity}</span>
              <div
                role="button"
                tabIndex={0}
                className="quantityButtonPartR"
                onClick={handleSub}
              >
                <span>-</span>
              </div>
            </div>
          </div>
          <div className="modal-submit">
            <span>Select Size</span>
          </div>
          <button className="close" onClick={hideModal}>
            {" "}
          </button>
        </div>
        <div className="modal-variants">
          <span className="variant-text">Select</span>
          <div className="variants-thumbnails">{variantThumbs}</div>
        </div>
        <div className="modal-image">
        <img
                src={mainImage}
                alt={mainImageAlt}
              />
        </div>
      </div>
    </Slide>
  )
}

ProductModal.defaultProps = {}

ProductModal.propTypes = {}

export default ProductModal
