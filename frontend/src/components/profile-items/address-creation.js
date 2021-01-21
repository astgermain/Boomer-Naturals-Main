import React, { useState, useContext } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../util/store"

const ADDRESS_CREATE = gql`
  mutation customerAddressCreate(
    $customerAccessToken: String!
    $address: MailingAddressInput!
  ) {
    customerAddressCreate(
      customerAccessToken: $customerAccessToken
      address: $address
    ) {
      customerAddress {
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



const AddressCreation = () => {
  const { customerAccessToken } = useContext(StoreContext)
  // Please consider deleting unused vars
  /* eslint-disable no-unused-vars */
  const [email, setEmail] = useState(``)
  /* eslint-disable no-unused-vars */
  const [password, setPassword] = useState(``)
  // const [message, setMessage] = useState(``)
  /* eslint-disable no-unused-vars */
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  // const handleCustomerAccessToken = value => {
  //   setValue(value)
  // }
  return (
    <Mutation mutation={ADDRESS_CREATE}>
      {createFunc => {
        /* eslint-disable no-unused-vars */
        let address = {}
        return (
          <div className="address-create-form">
            <form
              onSubmit={e => {
                e.preventDefault()
                address = {
                  address1: "",
                  address2: "",
                  city: "",
                  company: "",
                  country: "",
                  firstName: "",
                  lastName: "",
                  phone: "",
                  province: "",
                  zip: "",
                }
              }}
            >
              <span>New Address</span>
              <br></br>
              <span>E-Mail</span>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></input><br></br>
              <span>Password</span>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
              ></input><br></br>
              <button type="submit">Login</button>
            </form>

            <button
              onClick={() =>
                createFunc({
                  variables: {
                    customerAccessToken: `${customerAccessToken.accessToken}`,
                    address: {},
                  },
                })
                  .then(result => {
                    console.log("create address result", result)

                    if (
                      result.data.customerAddressCreate.customerUserErrors
                        .length
                    ) {
                      setIncorrectCredMsg("Address already exists for customer")
                      alert("Address already exists for customer")
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error(err)
                  })
              }
            >
              Create
            </button>
          </div>
        )
      }}
    </Mutation>

  )
}

export default AddressCreation