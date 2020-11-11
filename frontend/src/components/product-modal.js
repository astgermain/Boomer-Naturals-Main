/**
 * Modal component for quick buy feature
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/product-modal.css"
import { Slide } from "react-awesome-reveal"

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
            if (!start) {
              let tmp = new Set(dataSet)
              mainArray.push(tmp)
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
  console.log(mainArray)
  console.log(data)
  return (
    
      <Slide direction="up" className="product-modal">
        <div className="product-modal">
        <div className="modal-options">
        <div className="modal-price">from ${data.priceRange.minVariantPrice.amount}</div>
        <a className="close" onClick={hideModal}></a>
        </div>
        <div className="modal-variants">

        </div>
        <div className="modal-image">

        </div>
        </div>
    </Slide>
  )
}

ProductModal.defaultProps = {}

ProductModal.propTypes = {}

export default ProductModal
