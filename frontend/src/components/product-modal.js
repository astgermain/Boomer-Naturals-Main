/**
 * Modal component for quick buy feature
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/product-modal.css"

const ProductModal = ({ data, setModalShow }) => {
  let whatsAvailable = new Map()
  {
    /* Can break if selected options less than 3 */
  }
  let mainArray = []
  let array = []
  let dataSet = new Set()
  mainArray.push(dataSet)
  data.variants.forEach(variant => {
    if (variant.availableForSale) {
      variant.selectedOptions.forEach(option => {
        {
          /*  */
        }
        if (option.name == "Color") {
          if (!dataSet.has(option.value)) {
            dataSet.add(option.value)
            mainArray.push(array)
            array = [option.value]
          }
        }
        array.push(option.value)
      })
      
    }
  })
  console.log(mainArray)
  let hideModal = () => {
    setModalShow({})
  }
  console.log(data)
  return (
    <div className="product-modal">
      <h1>{data.priceRange.minVariantPrice.amount}</h1>
      <a href="#" className="close" onClick={hideModal}></a>
    </div>
  )
}

ProductModal.defaultProps = {}

ProductModal.propTypes = {}

export default ProductModal
