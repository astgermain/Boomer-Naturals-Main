/*
    NEEDS STYLING
    
   activates using url sent to account email entered in password recover

    In Shopify-Settings-Notifications-PasswordReset
    URL NEEDS TO BE UPDATED TO GO TO THE RESET PAGE FOR THIS APP

    EXAMPLE HERE: https://shopify.dev/tutorials/update-customer-data-with-storefront-api#update-the-account-invite-template
*/

import React, { useState, useContext } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import StoreContext from "../../util/store"
import GetPathURL from "./get-path-url"

const ACTIVATE_BY_URL = gql`
  mutation customerActivateByUrl($activationUrl: URL!, $password: String!) {
    customerActivateByUrl(activationUrl: $activationUrl, password: $password) {
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

const ActivateByURL = ({ activationURL }) => {
  const [password, setPassword] = useState(null)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  const { setValue } = useContext(StoreContext)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  let url = GetPathURL()

  return (
    <Mutation mutation={ACTIVATE_BY_URL}>
      {activateByUrl => {
        return (
          <div className="activate-form">
            <form
              onSubmit={e => {
                e.preventDefault()
                activateByUrl({
                  variables: {
                    activationUrl: url,
                    password: password,
                  },
                })
                  .then(result => {
                    //console.log("result", result.data)
                    if (
                      result.data.customerActivateByUrl.customerUserErrors.length
                    ) {
                      setIncorrectCredMsg(
                        "E-Mail has not registered, please register"
                      )
                      alert({ incorrectCredMsg })
                    } else {
                      /* Example success

                      result.data.customerActivateByUrl
                        -customer {id}
                        -customerAccessToken {accessToken, expiresAt}
                        -customerUserErrors { [] }

                      */
                      //update customerAccessToken
                      handleCustomerAccessToken(
                        result.data.customerActivateByUrl.customerAccessToken
                      )
                      //Alert and redirect
                      alert("Account has been activated *redirect here")
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error(err)
                  })
              }}
            >
              <span>Password</span>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
              ></input>
              <button type="submit">Activate Account</button>
            </form>
          </div>
        )
      }}
    </Mutation>
  )
}

export default ActivateByURL
