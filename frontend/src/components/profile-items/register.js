import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

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
  // const [firstName, setFirstName] = useState(null)
  // const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  return (
    <Mutation mutation={CUSTOMER_REGISTER}>
      {customerRegister => {
        return (
          <div className="login-form, register-form">
            <form
              onSubmit={e => {
                e.preventDefault()
                customerRegister({
                  variables: {
                    input: {
                      email: email,
                      password: password,
                    },
                  },
                })
                  .then(result => {
                    /*
                    handleCustomerAccessToken(
                      result.data.customerCreate.customerAccessToken
                    )
                    */
                    if (result.data.customerCreate.customerUserErrors.length) {
                      setIncorrectCredMsg("Username or Password is incorrect")
                      alert({incorrectCredMsg})
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error(err)
                  })
              }}
            >
              <div className="register-text1">Sign Up</div>
              <div className="register-text2">Don't Have An Account? Register Below.</div>
              <div className="register-input">
                <input
                placeholder="Email"
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></input>
              <input
                placeholder="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              ></input>
              </div>

              <button type="submit">Sign Up</button>
            </form>
          </div>
        )
      }}
    </Mutation>
  )
}

const Register = () => {
  return (
      <RegisterForm />
  )
}

export default Register
