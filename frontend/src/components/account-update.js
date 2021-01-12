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

const AccountUpdate = ({ data }) => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [firstName, setFirstName] = useState(``)
  const [lastName, setLastName] = useState(``)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  let newCustomerData = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  }
  console.log(data)
  console.log('update token ',customerAccessToken)
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
                    customerAccessToken: customerAccessToken.accessToken,
                    customer: newCustomerData,
                  },
                })
                  .then(result => {
                    console.log("result", result)
                    if(result.data.customerUpdate.customerAccessToken === null){
                      result.data.customerUpdate.customerUserErrors.map(msg => {
                        alert(msg.message)
                      })
                    }
                    else{
                    handleCustomerAccessToken(
                      result.data.customerUpdate.customerAccessToken
                    )
                    alert('Success')
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error("error", err)
                  })
                  data.refetch()
              }}
            >
              {/*p = TtaJL5zi8ZeyXP! */}
              <span>First Name</span>
              <input
                type="text"
                onChange={e => setFirstName(e.target.value)}
              ></input>
              <span>Last Name</span>
              <input
                type="text"
                onChange={e => setLastName(e.target.value)}
              ></input>
              <span>E-Mail</span>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></input>
              <span>New Password</span>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
              ></input>
              <button type="submit">Update Info</button>
            </form>
            <button type="submit" onClick={() => handleCustomerAccessToken(null)}>Logout</button>
          </div>
        )
      }}
    </Mutation>
  )
}

export default AccountUpdate
