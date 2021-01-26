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
import "../../styles/account.css"
import Alert from "@material-ui/lab/Alert"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import Grow from "@material-ui/core/Grow"
import Button from "@material-ui/core/Button"
import MainButtonEvent from "../main-button-event"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

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

const Account = () => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [checked, setChecked] = React.useState(false)
  const [checked2, setChecked2] = React.useState(false);
  const [updatedModal, setUpdateModal] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const [closed, setClosed] = React.useState("")
  const [severity, setSeverity] = React.useState("")
  const handleChange = (value) => {
    if(value){
      setChecked(value)
    }
    else{
      setChecked(prev => !prev)
    }
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));
  const handleEditModal = (value) => {
    if(value){
      setUpdateModal(value)
    }
    else{
      setUpdateModal(prev => !prev)
    }
  }
  const handleAlert = ({ message = "", close = "", severity = "" }) => {
    if(checked == true){
      handleChange()
    }
    setMessage(message)
    setClosed(close)
    setSeverity(severity)
    handleChange()
    if(severity == "success") handleEditModal(false)
  }
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
      <>
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
      <br></br>
      </>
    )
  })
  //console.log("current page: ", curPage)
  let queryFunc = () => {
    if (customerAccessToken != null) {
      var firstDate = new Date(Date.now())
      var secondDate = new Date(customerAccessToken.expiresAt)
      if (secondDate <= firstDate) {
        alert("Login has expired, please relog")
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

              <>
              
                <Pagination alt="My Account" altLink="/profile" />
                <section className="account-section">
                  <div className="account-alert-row">
                    {checked == true && (
                      <Grow in={checked}>
                        <Alert
                          severity={severity}
                          action={
                            <Button
                              color="inherit"
                              size="small"
                              onClick={handleChange}
                            >
                              {closed}
                            </Button>
                          }
                        >
                          {message}
                        </Alert>
                      </Grow>
                    )}
                  </div>

                  {/*
                <button name="info" onClick={() => console.log(data)}>
                  click for data
                </button>
                <button name="info" onClick={() => data.refetch()}>
                  Refetch
                </button>
                */}
                  <div className="account-content">
                    <div className="account-left">
                      {NAV_LIST_ITEMS}
                      <MainButtonEvent
                                text="Logout"
                                func={()=>handleCustomerAccessToken(null)}
                              />
                    </div>
                    <div className="account-right">
                      {
                        //Start main Account
                      }
                      {curPage == "My Account" && (
                        <>
                          <h1>My Account</h1>
                          {updatedModal == true && (
                            <>
                          <div className="hi">
                            <Collapse in={updatedModal} appear={true}>
                              <AccountUpdate
                                data={data}
                                oFirstName={firstName}
                                oLastName={lastName}
                                oEmail={email}
                                oPhone={phone}
                                handleAlert={handleAlert}
                              />
                              <button
                                onClick={() => handleEditModal()} className="blue-text-field">
                                Back To Account
                                </button>
                            </Collapse>
                            </div>
                            </>
                          )}
                          {updatedModal == false && (
                            <>
                              <div className="account-row">
                                <div className="account-col first">
                                  <div className="profile-bold">Name</div>
                                  <div className="profile-reg">
                                    {firstName} {lastName}
                                  </div>
                                </div>
                                <div className="account-col">
                                  <div className="profile-bold">E-Mail</div>
                                  <div className="profile-reg">{email}</div>
                                </div>
                              </div>
                              <br></br>
                              <div className="profile-bold">
                                Default Address: <br></br>
                                {name ? (
                                  <div className="profile-reg">
                                    {name}
                                    <br></br>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {company ? (
                                  <div className="profile-reg">
                                    {company}
                                    <br></br>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {address1 ? (
                                  <div className="profile-reg">
                                    {address1}
                                    <br></br>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {address2 ? (
                                  <div className="profile-reg">
                                    {address2}
                                    <br></br>
                                  </div>
                                ) : (
                                  ""
                                )}
                                <div className="profile-reg">
                                  {city ? <>{city} </> : ""}
                                  {provinceCode ? provinceCode : ""}
                                  {zip ? (
                                    <>
                                      {zip}
                                      <br></br>
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                {country ? (
                                  <div className="profile-reg">
                                    {country}
                                    <br></br>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {phone1 ? (
                                  <div className="profile-reg">
                                    {phone1}
                                    <br></br>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                              <br></br>
                              <MainButtonEvent
                                text="Update Account"
                                func={handleEditModal}
                              />
                            </>
                          )}
                        </>
                      )}
                      {
                        //Start Addresses
                      }
                      {curPage == "Addresses" && (
                        <>
                          <h1>Addresses</h1>
                          <Addresses data={data} id={id} handleAlert={handleAlert}/>
                        </>
                      )}
                      {
                        //Start Order History
                      }
                      {curPage == "Order History" && (
                        <>
                          <h1>Order History</h1>
                          <OrderHistory data={data} />
                        </>
                      )}
                    </div>
                  </div>
                </section>
              </>
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

  useEffect(() => { }, [])

  return <div>{queryFunc()}</div>
}

export default Account
