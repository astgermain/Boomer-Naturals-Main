import React, { useState, useContext, useEffect } from "react"
import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext, { defaultStoreContext } from "../util/store"

const USER_UPDATE = gql`
  mutation customerUpdate(
    $customerAccessToken: String!
    $customer: CustomerUpdateInput!
  ) {
    customerUpdate(
      customerAccessToken: $customerAccessToken
      customer: $customer
    ) {
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

const AccountUpdate = ({ passedCustomer, passedCustomerAccessToken }) => {
  console.log("hi", passedCustomer)
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  let newCustomerData = {
    email: "themail12@ymail.com",
    firstName: "andrew",
    lastName: "st germain",
    password: "TtaJL5zi8ZeyXP!",
    phone: null,
  }
  return (
    <Mutation mutation={USER_UPDATE}>
      {updateFunc => {
        return (
          <div className="update-form">
            <form
              onSubmit={e => {
                e.preventDefault()
                updateFunc({
                  variables: {
                    customerAccessToken: passedCustomerAccessToken,
                    customer: newCustomerData,
                  },
                })
                  .then(result => {
                    console.log("result", result)
                    handleCustomerAccessToken(
                      result.data.customerAccessTokenCreate.customerAccessToken
                    )
                  })
                  .catch(err => {
                    alert(err)
                    console.error("error", err)
                  })
              }}
            >
              <span>E-Mail</span>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></input>
              <span>Password</span>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
              ></input>
              <button type="submit">Update Info</button>
            </form>
          </div>
        )
      }}
    </Mutation>
  )
}

export default AccountUpdate
