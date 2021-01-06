import React, { useState, useContext, useEffect } from "react"
import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext, { defaultStoreContext } from "../util/store"
import AccountUpdate from "./account-update"

const GET_CUSTOMER_OBJECT = gql`
  query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      acceptsMarketing
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
        countryCodeV2
        name
        zip
        company
        phone
        provinceCode
        province
        formattedArea
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
        {data => {
          let updatedCustomer
          try {
            updatedCustomer = data.data.customer
          } catch {
            updatedCustomer = {
              accpetsMarketing: true,
              email: 'themail123@ymail.com',
              firstName: "andrew",
              lastName: "st germain",
              password: "TtaJL5zi8ZeyXP!",
              phone: '3106969341',
            }
          }

          let {
            firstName,
            lastName,
            phone,
            email,
            addresses,
            defaultAddress,
            orders,
          } = data.data.customer || ""
          let {
            address1,
            address2,
            city,
            company,
            country,
            id,
            name,
            zip,
            formattedArea,
            provinceCode,
          } = defaultAddress || ""
          let phone1
          try {
            phone1 = defaultAddress.phone
          } catch {
            phone1 = ""
          }
          console.log(defaultAddress)
          return (
            <section>
              <button name="info" onClick={() => console.log(data)}>
                click for data
              </button>
              <div>First Name: {firstName ? firstName : "No first name"}</div>
              <div>Last Name: {lastName ? lastName : "No last name"}</div>
              <div>E-Mail: {email ? email : "No e-mail"}</div>
              <div>Phone: {phone ? phone : "No phone number"}</div>
              <div>
                Default Address: <br></br>
                {name ? (
                  <>
                    {name}
                    <br></br>
                  </>
                ) : (
                  ""
                )}
                {company ? (
                  <>
                    {company}
                    <br></br>
                  </>
                ) : (
                  ""
                )}
                {address1 ? (
                  <>
                    {address1}
                    <br></br>
                  </>
                ) : (
                  ""
                )}
                {address2 ? (
                  <>
                    {address2}
                    <br></br>
                  </>
                ) : (
                  ""
                )}
                {city ? <>{city} </> : ""}
                {provinceCode ? <>{provinceCode}, </> : ""}
                {zip ? (
                  <>
                    {zip}
                    <br></br>
                  </>
                ) : (
                  ""
                )}
                {country ? (
                  <>
                    {country}
                    <br></br>
                  </>
                ) : (
                  ""
                )}
                {phone1 ? (
                  <>
                    {phone1}
                    <br></br>
                  </>
                ) : (
                  ""
                )}
              </div>
              <AccountUpdate
                passedCustomer={updatedCustomer}
                passedCustomerAccessToken={customerAccessToken.accessToken}
              />
            </section>
          )
        }}
      </Query>
    )
  } catch {
    return <div>No account data, not logged in</div>
  }
}

export default Account
