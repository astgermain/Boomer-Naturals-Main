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



const AddressCreation = ({}) => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [message, setMessage] = useState(``)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  let address = {}
return(
<Mutation mutation={ADDRESS_CREATE}>
        {createFunc => {
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
          )}}
      </Mutation>
        
  )
            }

            export default AddressCreation