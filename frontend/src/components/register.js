  
import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation, Query } from "react-apollo"

const CUSTOMER_REGISTER = gql`
mutation customerCreate($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    customer {
      id
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}
`

const RegisterForm = () => {
    const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  return(
    <Mutation mutation={CUSTOMER_REGISTER}>
        {customerRegister => {
          return (
            <p>hi</p>
          )
        }}
      </Mutation>
  )
}

const Register = () => {
    return (
      <div>
       
            <RegisterForm />
       </div>   
        
      
    )
  }

export default Register