import React, { useState, useContext, useEffect } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../util/store"

const LOGIN_USER = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`



const Login = ({}) => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [message, setMessage] = useState(``)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }


  return (
    <Mutation mutation={LOGIN_USER}>
      {loginFunc => {
        return (
          <div className="login-form">
            <form
              onSubmit={e => {
                e.preventDefault()
                loginFunc({
                  variables: {
                    input: {
                      email: email,
                      password: password,
                    },
                  },
                })
                  .then(result => {
                    console.log('login result', result)
                    handleCustomerAccessToken(
                      result.data.customerAccessTokenCreate.customerAccessToken
                    )
                    console.log(customerAccessToken)
                    if (
                      result.data.customerAccessTokenCreate.customerUserErrors
                        .length
                    ) {
                      setIncorrectCredMsg("Username or Password is incorrect")
                      alert(incorrectCredMsg)
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error(err)
                  })
              }}
            >
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></input>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
              ></input>
              <button type="submit">Login</button>
            </form>
          </div>
        )
      }}
    </Mutation>
  )}

export default Login
