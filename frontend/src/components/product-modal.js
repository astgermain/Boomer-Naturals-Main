/**
 * Modal component for quick buy feature
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/product-modal.css"

const ProductModal = ({ data, setModalShow }) => {
  let mainArray = []
  let dataSet = new Set()
  let colorSet = new Set()
  let start = true
  data.variants.forEach(variant => {
    if (variant.availableForSale) {    
      variant.selectedOptions.forEach(option => {
        if (option.name == "Color") {
          if (!colorSet.has(option.value)) {
            colorSet.add(option.value)
            if(!start){
              let tmp = new Set(dataSet)
              mainArray.push(tmp)
            }
            else{
              start = false
            }
            dataSet.clear()
            dataSet.add(option.value)
          }
        } else {
          dataSet.add(option.value)
        }
      })
      dataSet.add(variant)
    }
  })
  let array = []
  dataSet.forEach(value => {
    array.push(value)
  })
  mainArray.push(array)
  let hideModal = () => {
    setModalShow({})
  }
  return (
    <div className="product-modal">
      <h1>{data.priceRange.minVariantPrice.amount}</h1>
      <a className="close" onClick={hideModal}></a>
    </div>
  )
}

ProductModal.defaultProps = {}

ProductModal.propTypes = {}

export default ProductModal
