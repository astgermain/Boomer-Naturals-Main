/*
    NEEDS STYLING

    Recovers password using url sent to account email entered in password recover

    In Shopify-Settings-Notifications-PasswordReset
    URL NEEDS TO BE UPDATED TO GO TO THE RESET PAGE FOR THIS APP

    EXAMPLE HERE: https://shopify.dev/tutorials/update-customer-data-with-storefront-api#update-the-account-invite-template
*/


import React, { useState, useContext } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import StoreContext from "../../util/store"
import GetPathURL from "./get-path-url"


const PASSWORD_RECOVER_BY_URL = gql`
  mutation customerResetByUrl($resetUrl: URL!, $password: String!) {
    customerResetByUrl(resetUrl: $resetUrl, password: $password) {
      customer {
        id
      }
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

const PasswordRecoverByURL = (location) => {
  const [password, setPassword] = useState(null)
  const [password2, setPassword2] = useState(null)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  const { setValue } = useContext(StoreContext)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  let url = GetPathURL()
  return (
    <Mutation mutation={PASSWORD_RECOVER_BY_URL}>
      {passwordRecoverByUrl => {
        return (
          <div className="recover-form">
            <form
              onSubmit={e => {
                e.preventDefault()
                if(password === password2){
                  passwordRecoverByUrl({
                  variables: {
                    resetUrl: url,
                    password: password
                  },
                  })
                  .then(result => {
                    if (result.data.customerResetByUrl.customerUserErrors.length) {
                      setIncorrectCredMsg("E-Mail doesn't exist")
                      alert({ incorrectCredMsg })
                    } else {

                      /* Example success

                      result.data.customerResetByUrl
                        -customer {id}
                        -customerAccessToken {accessToken, expiresAt}
                        -customerUserErrors { [] }

                      */
                      //update customerAccessToken
                      handleCustomerAccessToken(result.data.customerResetByUrl.customerAccessToken)
                      //Alert and redirect
                      alert(
                        "Password has been reset *redirect here"
                      )
                    }
                  })
                  .catch(err => {
                    alert("Reset URL has expired or is invalid")
                    //console.error(err)
                  })
                }else{
                  alert('Passwords do not match')
                }
              }}
            >
              <span>Password</span>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
              ></input>
              <span>Confirm Password</span>
              <input
                type="password"
                onChange={e => setPassword2(e.target.value)}
              ></input>
              <button type="submit">Reset Password</button>
            </form>
          </div>
        )
      }}
    </Mutation>
  )
}

export default PasswordRecoverByURL
