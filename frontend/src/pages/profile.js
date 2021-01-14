import React, { useState } from "react"
import Account from "../components/profile-items/account"
import Layout from "../components/layout"


const Profile = ({location}) => {
  
  return (
    <Layout location={location}>
      {NAV_LIST_ITEMS}
      <Account />
    </Layout>
  )
}

export default Profile

/*
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
*/
