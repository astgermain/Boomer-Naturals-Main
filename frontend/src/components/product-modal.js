/**
 * Modal component for quick buy feature
 */

import React, { useState, useEffect, useContext } from "react"
import { PRODUCT_MODAL_CSS, UPSELL_CSS } from "../util/imports"
import { Slide } from "react-awesome-reveal"
import errorImg from "../../content/assets/errorImg.png"
import UpSell from "./upsell"
import StoreContext from "../util/store"

const ProductModal = ({ type1, type2, data, setModalShow, setProductShow }) => {


  let x = () => {
    try {
      return [data.images[0].originalSrc, data.images[0].altText]
    } catch {
      return [errorImg, "error image"]
    }
  }
  // Will check current product type so when the component renders, 
  // we'll know what kind of default message to render in the thumbnail section of modal
  const checkIfHasPattern = ({ productType }) => {
    if (productType.includes("Neck Gaiter") || productType.includes("Face Cover") || productType.includes("Shield Cover")) return "Select a pattern"
    return ""
  }
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState(x()[0])
  const [mainImageAlt, setMainImageAlt] = useState(x()[1])

  const [isLoading, setIsLoading] = useState(false)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(checkIfHasPattern(data))
  const [upsellShow, setupsellShow] = useState(false)
  const { addToCart } = useContext(StoreContext)
  const handleVariantSelection = data => {
    try {
      // sets color value to state from what user selects
      const colorToSet = data[0].selectedOptions.find(element => element.name === "Color").value
      setSelectedColor(colorToSet)

    } catch {
    }
    try {
      setMainImage(data[0].image.originalSrc)
    } catch {
      setMainImage(errorImg)
    }
    try {
      setMainImageAlt(data[0].image.altText)
    } catch {
      setMainImageAlt("error image")
    }
  }

  const handleSizeSelection = (e, size) => {
    try {
      setSelectedSize(size)
    } catch {
    }
  }

  useEffect(() => { }, [])

  let mainArray = []
  let dataSet = new Set()
  let colorSet = new Set()
  let sizeSet = new Set()
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
        if (option.name === "Size") {
          sizeSet.add(option.value)
        }
      })
      tempHolder.push(variant)
    }
  })

  sizeSet = [...sizeSet]
  // If there is a pattern/color selected,
  // the size display will only show sizes
  // that are available for that color/pattern
  if(selectedColor !== "Select a pattern") {
    const selectedVariantArray = data.variants.filter((variant)=> variant.title.includes(selectedColor))
    sizeSet = sizeSet.filter((size) => {
      return selectedVariantArray.some((variant)=> variant.title.includes(size))
    })
  }
  //Sets array for size display
  sizeSet.map((size) => {
    if (size.includes("Ages")) return size
    if (size.includes("/")) return size
    if (size[0] === "X") return size
    return size[0]
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
    return variantData.map((data, index) => {
      try {
        return (
          <button
            className="variant-thumb"
            onClick={() => handleVariantSelection(data)}
            key={index}
          >
            <img
              src={data[0].image.originalSrc}
              className="variant-thumb"
              alt={data[0].image.altText}
            />
          </button>
        )
      } catch {
        return (
          <button
            className="variant-thumb"
            onClick={() => handleVariantSelection(data)}
          >
            <img src={errorImg} className="variant-thumb" alt="error" />
          </button>
        )
      }
    })
  }
  let variantThumbs = generateVariantThumbs(mainArray)
  let handleSub = () => {
    if (quantity > 1) return setQuantity(quantity - 1)
  }

  const handleAddToCart = e => {
    const findVariantsBySelection = data.variants.find((variant) => (
      variant.selectedOptions.some((option) => option.value.includes(selectedColor))
      &&
      variant.selectedOptions.some((option) => option.value.includes(selectedSize))
    ))

    const variantIdToAddToCart = findVariantsBySelection?.id.split("Shopify__ProductVariant__").join("")

    addToCart(variantIdToAddToCart, quantity, setIsLoading)
    //upsells products onclick add to cart
    setupsellShow(true)
  }



  return (
    <Slide
      duration={500}
      triggerOnce={true}
      direction="up"
      className={type1}
    >
      <div className={type2}>
        <div className="modal-options">
          <div className="modal-price">
            from ${formattedPrice}{" "}
            {
              sizeSet.length
                ?
                <span className="selectsize-text">Select Size</span>
                :
                undefined
            }
          </div>

          {/* <div className="modal-type">
            <div className="adult-type">Adult</div>
            <div className="kid-type">Children</div>
          </div> */}
          <div className="modal-size">
            {
              sizeSet.length
                ?
                sizeSet.map((size, index) => (
                  <div
                    role="button"
                    onKeyDown={(e) => handleSizeSelection(e, size)}
                    tabIndex={0}
                    onClick={(e) => handleSizeSelection(e, size)}
                    data-color={size}
                    key={index}
                    className={`product-size-option ${size === selectedSize && 'active'}`}
                  >{size}</div>
                ))
                :
                undefined
            }
          </div>
          <div className="modal-quantity">
            <span>Quantity</span>
            <div className="quantityButton">
              <div
                role="button"
                tabIndex={0}
                className="quantityButtonPartL"
                onKeyDown={handleAdd}
                onClick={handleAdd}
              >
                <span>+</span>
              </div>
              <span>{quantity}</span>
              <div
                role="button"
                tabIndex={0}
                className="quantityButtonPartR"
                onKeyDown={handleSub}
                onClick={handleSub}
              >
                <span>-</span>
              </div>
            </div>
          </div>
          <div className="modal-submit">
            {/* Add to cart button for testing */}
            <button 
            onClick={handleAddToCart} 
            className={`add-to-cart ${(!selectedSize || selectedColor === "Select a pattern") ? "disabled" : ""}`}
            >
              Add to Cart
            </button>
            {upsellShow && (
              <UpSell setupsellShow={setupsellShow} upsellShow={upsellShow} />
            )}
          </div>
          <button className="close" onClick={() => {
            hideModal()
            setProductShow(true)
          }}>
            {" "}
          </button>
        </div>
        <div className="modal-variants">
          <span className="variant-text">Select</span>
          <div className="variants-thumbnails">{variantThumbs}</div>
        </div>
        <div className="modal-image">
          <div>
            <h4>{data.title}</h4>
            <p>{selectedColor}</p>
          </div>
          <img src={mainImage} alt={mainImageAlt} />
        </div>
      </div>
    </Slide>
  )
}

ProductModal.defaultProps = {}

ProductModal.propTypes = {}

export default ProductModal
