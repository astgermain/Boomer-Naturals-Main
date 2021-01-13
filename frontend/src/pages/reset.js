import React from "react"
import PasswordRecoverByURL from "../components/profile-items/password-recover-by-url"
import Layout from "../components/layout"



const Reset = ({location}) => {
    
    return (
      <Layout location={location}>
        <PasswordRecoverByURL />
      </Layout>
    )
  }
  
  export default Reset