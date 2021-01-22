/**
 * Filter Component
 *
 *  Used whenever going to a collection, search results,
 *  or all product type of page
 */

import React, { useEffect, useState, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/filter.css"
import Product from "../components/product"
import Checkbox from "../components/checkbox"
import StoreContext from "../util/store"
import Layout from "../components/layout"
import FilterComponent from "../components/filter-component"

const Filter = ({ location }) => {
  
 
  return (
    <Layout location={location}>
      <FilterComponent />
    </Layout>
  )
}

Filter.defaultProps = {}

Filter.propTypes = {}

export default Filter
