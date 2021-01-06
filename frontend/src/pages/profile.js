import React, { useState } from "react"
import { graphql } from "gatsby"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import Header from "../components/header"
import Footer from "../components/footer"
import Account from "../components/account"
import Register from "../components/register"
import Login from "../components/login"
import StoreContext from "../util/store"


const Profile = ({}) => {
  const [clickedNavBtn, setClickedNavBtn] = useState("New Arrivals")
  const handleNavClick = e => {
    // value constant is the title of the clicked nav btn
    const { value } = e.target
    setClickedNavBtn(value)
  }
  const NAV_TITLE_ARR = ["My Account", "Addresses", "Order History"]
  const NAV_LIST_ITEMS = NAV_TITLE_ARR.map((title, index) => {
    const isActive = clickedNavBtn === title && "active"
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
  return (
    <StoreContext.Consumer>
      {context => (
        <React.Fragment>
          <Header />
          <Account />
          <Login />
          <Register />
          <Footer />
        </React.Fragment>
      )}
    </StoreContext.Consumer>
  )
}

export default Profile

/*
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
*/
