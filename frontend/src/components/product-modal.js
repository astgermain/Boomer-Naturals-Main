/**
 * Modal component for quick buy feature
 */

import React, { useState, useEffect, useContext } from "react"
import "../styles/product-modal.css"
import { Slide } from "react-awesome-reveal"
import errorImg from "../../content/assets/errorImg.png"
import UpSell from "./upsell"
import "../styles/upsell.css"
import StoreContext from "../util/store"

const ProductModal = ({ type1, type2, data, setModalShow, setProductShow }) => {
  const { addToCart } = useContext(store)


  let x = () => {
    try {
      return [data.images[0].originalSrc, data.images[0].altText]
    } catch {
      return [errorImg, "error image"]
    }
  }
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState(x()[0])
  const [mainImageAlt, setMainImageAlt] = useState(x()[1])

  const [isLoading, setIsLoading] = useState(false)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [upsellShow, setupsellShow] = useState(false)
  const { addToCart } = useContext(StoreContext)
  const handleVariantSelection = data => {
    try {
      // sets color value to state from what user selects
      const colorToSet = data[0].selectedOptions.find(element => element.name === "Color").value
      setSelectedColor(colorToSet)

      //ToDo: Possible to use shopifyId over id possibly
      // setSelectedVariantId(
      //   data[0].id.split("Shopify__ProductVariant__").join("")
      // )
    } catch {
      console.log("color selection error")
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
    console.log('this is the size: ', size)
    try {
      setSelectedSize(size)
    } catch {
      console.error("size selection error")
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

  console.log('size set before adjustment: ', sizeSet)

  //Sets array for size display
  sizeSet = [...sizeSet].map((size) => {
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
  // console.log('main array: ', data)
  // console.log('size set: ', sizeSet)
  let handleSub = () => {
    if (quantity > 1) return setQuantity(quantity - 1)
  }

  const handleAddToCart = e => {
    const findVariantsBySelection = data.variants.find((variant) => (
      variant.selectedOptions.some((option) => option.value.includes(selectedColor))
      &&
      variant.selectedOptions.some((option) => option.value.includes(selectedSize))
    ))
    // .filter((variant) => {
    //   console.log('in filter',variant.selectedOptions.some((option) => {
    //     console.log('in Option', selectedSize, option.value)
    //     return option.value.includes(selectedSize)
    //   }))
    //   return variant
    // })
    //   data[0].id.split("Shopify__ProductVariant__").join("")
    const variantIdToAddToCart = findVariantsBySelection?.id.split("Shopify__ProductVariant__").join("")

    console.log('filtered items: ', variantIdToAddToCart)
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
                  <div role="button" onKeyDown={(e) => handleSizeSelection(e, size)} tabIndex={0} onClick={(e) => handleSizeSelection(e, size)} data-color={size} key={index} className="product-size-option">{size}</div>
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
            <button onClick={handleAddToCart} className={`add-to-cart`}>
              Add to Cart
            </button>
            {upsellShow && (
              <UpSell setupsellShow={setupsellShow} upsellShow={upsellShow} />
            )}
          </div>
          <button className="close" onClick={() => {
          hideModal()
          setProductShow(true)}}>
            {" "}
          </button>
        </div>
        <div className="modal-variants">
          <span className="variant-text">Select</span>
          <div className="variants-thumbnails">{variantThumbs}</div>
        </div>
        <div className="modal-image">
          <img src={mainImage} alt={mainImageAlt} />
        </div>
      </div>
    </Slide>
  )
}

ProductModal.defaultProps = {}

ProductModal.propTypes = {}

export default ProductModal
