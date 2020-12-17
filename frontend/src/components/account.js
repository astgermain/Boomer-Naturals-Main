import React, { useState, useContext, useEffect } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../util/store"

const GET_CUSTOMER_OBJECT = gql`
   query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      email
      firstName
      lastName
      phone
      defaultAddress {
        id
        address1
        address2
        city
        lastName
        firstName
        country
        name
        zip
        company
        phone
      }
      orders(first: 10, reverse: true) {
        edges {
          node {
            name
            totalPrice
            processedAt
            statusUrl
            currencyCode
            orderNumber
            fulfillmentStatus
            financialStatus
            successfulFulfillments {
              trackingCompany
            }
            shippingAddress {
              address1
              address2
              city
              country
              zip
            }
            lineItems(first: 10) {
              edges {
                node {
                  title
                  quantity
                  variant {
                    price
                    image {
                      src
                    }
                    product {
                      handle
                    }
                  }
                }
              }
            }
            shippingAddress {
              address1
              city
              lastName
              firstName
              zip
              country
            }
            subtotalPrice
            totalPrice
          }
        }
      }
      addresses(first: 10) {
        edges {
          node {
            id
            address1
            address2
            city
            lastName
            firstName
            country
            name
            zip
            company
            phone
          }
        }
      }
    }
  }
`
const Account = () => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [message, setMessage] = useState(``)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  try {
  return (
     
    <Query
      query={GET_CUSTOMER_OBJECT}
      variables={{
        customerAccessToken: customerAccessToken.accessToken,
      }}
    >
      {(data) => {
        console.log(data)
       
        return <button name="info" onClick={()=>console.log(data)}>click for data</button>
      }}
    </Query>
      
  )
    }
   catch{
        return(
            <div>No account data, not logged in</div>
        )
    }
}

export default Account
