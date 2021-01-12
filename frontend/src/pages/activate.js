import React, { useState } from "react"
import ActivateByURL from "../components/activate-by-url"
import Layout from "../components/layout"



const Activate = ({location}) => {
    
    return (
      <Layout location={location}>
        <ActivateByURL />
      </Layout>
    )
  }
  
  export default Activate