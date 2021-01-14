import React, { useState, useContext, useEffect } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../util/store"
import AccountUpdate from "./account-update"
import Register from "../../components/profile-items/register"
import Login from "../../components/profile-items/login"
import PasswordRecover from "../../components/profile-items/password-recover"
import Addresses from "./addresses"
import OrderHistory from "./order-history"
import Pagination from "../pagination"

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
            province
            provinceCode
            phone
          }
        }
      }
    }
  }
`

const Account = ({pageContext, location}) => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [message, setMessage] = useState(``)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  const [curPage, setCurPage] = useState("My Account")
  const handleNavClick = e => {
    // value constant is the title of the clicked nav btn
    const { value } = e.target
    setCurPage(value)
  }
  const NAV_TITLE_ARR = ["My Account", "Addresses", "Order History"]
  const NAV_LIST_ITEMS = NAV_TITLE_ARR.map((title, index) => {
    const isActive = curPage === title && "active"
    return (
      <li key={index} className={`nav-btn-list-items ${isActive.toString()}`}>
        <div>
          <span className={isActive.toString()}></span>
        </div>
        <button
          className={`carousel-nav-btn ${isActive.toString()}`}
          onClick={handleNavClick}
          value={title}
        >
          {title}
        </button>
      </li>
    )
  })
  //console.log("current page: ", curPage)
  let queryFunc = () => {
    if(customerAccessToken != null){
      var firstDate = new Date(Date.now())
      var secondDate = new Date( customerAccessToken.expiresAt)
      if(secondDate <= firstDate){
        alert('Login has expired, please relog')
        handleCustomerAccessToken(null)
      }
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
            
            //console.log(customerAccessToken.accessToken)
            //console.log("Query data: ", data)
            let updatedCustomer
            try {
              updatedCustomer = data.data.customer
            } catch {
              updatedCustomer = {}
            }

            let {
              firstName,
              lastName,
              phone,
              email,
              addresses,
              defaultAddress,
              orders,
            } = updatedCustomer || ""
            
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
            
            return (
              <section>
                <Pagination alt="My Account" altLink="/profile"/>
                {/*
                <button name="info" onClick={() => console.log(data)}>
                  click for data
                </button>
                <button name="info" onClick={() => data.refetch()}>
                  Refetch
                </button>
                */}
                {NAV_LIST_ITEMS}
                <button
                  type="submit"
                  onClick={() => handleCustomerAccessToken(null)}
                >
                  Logout
                </button>
                <br></br>
                <br></br>
                {
                  //Start main Account
                }
                {curPage == "My Account" && (
                  <>
                    <AccountUpdate
                      data={data}
                      oFirstName={firstName}
                      oLastName={lastName}
                      oEmail={email}
                      oPhone={phone}
                    />
                    <br></br>
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
                  </>
                )}
                {
                  //Start Addresses
                }
                {curPage == "Addresses" && <Addresses data={data} id={id}/>}
                {
                  //Start Order History
                }
                {curPage == "Order History" && <OrderHistory />}
                
              </section>
            )
          }}
        </Query>
      )
    } catch {
      return (
        <>
          <div>No account data, not logged in</div>
          <Login />
          <Register />
          <PasswordRecover />
        </>
      )
    }
  }

  useEffect(() => {}, [])

  return <div>{queryFunc()}</div>
}

export default Account
