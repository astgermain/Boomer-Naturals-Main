/**
 * Filter Component
 *
 *  Used whenever going to a collection, search results, 
 *  or all product type of page
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/filter.css"
import Product from "../components/product"

const Filter = ( {location} ) => {
  const [modalShow, setModalShow] = useState("")
  const ITEMS_TO_SHOW = 10

  const handleModalShow = e => {
      setModalShow(e)
  }


  // Creates array of product components with length of ITEMS_TO_SHOW amount
  const PRODUCT_LIST_ITEMS = location.state.productsArray.slice(0, ITEMS_TO_SHOW).map(
      product =>
          <li key={product.shopifyId}>
              <Product productInfo={product} handleModalShow={handleModalShow} />
          </li>
  )
  return (
    <section className="filter-container">
      <div className="filter-sidebar">

      </div>
      <div className="filter-results">
          {PRODUCT_LIST_ITEMS}
      </div>
    </section>
  )
}

Filter.defaultProps = {}

Filter.propTypes = {}

export default Filter
