/**
 * Modal component for quick buy feature
 */

import React, { useState, useEffect, useContext } from "react"
import store from '../util/store'
import "../styles/product-modal.css"
import { Slide } from "react-awesome-reveal"
import errorImg from "../../content/assets/errorImg.png"
import UpSell from './upsell'
import "../styles/upsell.css"


const ProductModal = ({ data, setModalShow }) => {
  const { addToCart } = useContext(store)
  console.log("HEY!", data)

  let x = () => {
    try {
      return (
        [data.images[0].originalSrc, data.images[0].altText]
      )
    }
    catch {
      return (
        [errorImg, "error image"]
      )
    }
  }
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState(x()[0])
  const [mainImageAlt, setMainImageAlt] = useState(x()[1])
  const [selectedVariantId, setSelectedVariantId] = useState('')
  
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [upsellShow, setupsellShow] = useState(false);

  let handleVariantSelection = (data) => {
    try {
      // sets color value to state from what user selects
      setSelectedColor(data[0].selectedOptions[0].value)
      console.log('selected data:', data)
      setSelectedVariantId(data[0].id.split('Shopify__ProductVariant__').join(''))
    }
    catch {
      console.log('selection error')
    }
    try {
      setMainImage(data[0].image.originalSrc);
    }
    catch {
      setMainImage(errorImg);
    }
    try {
      setMainImageAlt(data[0].image.altText);
    }
    catch {
      setMainImageAlt("error image");
    }

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

  let priceFormat = price => parseFloat(price).toFixed(2)
  let formattedPrice = priceFormat(data.priceRange.minVariantPrice.amount)

  let handleAdd = () => {
    setQuantity(quantity + 1)
  }
  let generateVariantThumbs = variantData => {
    return variantData.map(data => {
      try {
        return (
          <button className="variant-thumb" onClick={() => handleVariantSelection(data)}  >
            <img
              src={data[0].image.originalSrc}
              className="variant-thumb"
              alt={data[0].image.altText}
            />
          </button>
        )
      } catch {
        return (
          <button className="variant-thumb" onClick={() => handleVariantSelection(data)}  >
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
console.log('main array: ', mainArray)
  let handleSub = () => {
    if (quantity > 1) return setQuantity(quantity - 1)
  }

  // Temporary for testing
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = e => {
    // in the future this will use the 
    // values grabbed from state to
    // update the cart
    const VARIANT_ID = data.variants[0].id.split('Shopify__ProductVariant__').join('')
    addToCart(selectedVariantId, quantity, setIsLoading)
    //upsells products onclick add to cart 
    setupsellShow(true);
  }
  

  return (
    <Slide
      duration={500}
      triggerOnce={true}
      direction="up"
      className="product-modal"
    >
      <div className="product-modal-inner">
        <div className="modal-options">
          <div className="modal-price">from ${formattedPrice} <span className="selectsize-text">Select Size</span></div>
          
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
            {/* Add to cart button for testing */}
            <button onClick={handleAddToCart} className="add-to-cart">Add to Cart</button>
          { upsellShow && <UpSell setupsellShow={setupsellShow} upsellShow={upsellShow} />}
            
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
