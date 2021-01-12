import React, { useState } from "react"
import PasswordRecoverByURL from "../components/password-recover-by-url"
import Layout from "../components/layout"



const Reset = ({location}) => {
    
    return (
      <Layout location={location}>
        <PasswordRecoverByURL />
      </Layout>
    )
  }
  
  export default Reset