/**
 * Filter Component
 *
 *  Used whenever going to a collection, search results,
 *  or all product type of page
 */

import React from "react"
import "../styles/filter.css"
import Layout from "../components/layout"
import FilterComponent from "../components/filter-component"

const Filter = ({ location }) => {
  
 
  return (
    <Layout location={location}>
      {/*
      <FilterComponent />
      */}
    </Layout>
  )
}

Filter.defaultProps = {}

Filter.propTypes = {}

export default Filter
