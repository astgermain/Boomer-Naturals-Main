import React from "react"
import ActivateByURL from "../components/profile-items/activate-by-url"
import Layout from "../components/layout"



const Activate = ({location}) => {
    
    return (
      <Layout location={location}>
        <ActivateByURL />
      </Layout>
    )
  }
  
  export default Activate