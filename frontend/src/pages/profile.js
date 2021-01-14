import React, { useState } from "react"
import Account from "../components/profile-items/account"
import Register from "../components/profile-items/register"
import Login from "../components/profile-items/login"
import Layout from "../components/layout"
import PasswordRecover from "../components/profile-items/password-recover"

const Profile = ({location}) => {
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
          onClick={() => handleNavClick()}
          value={title}
        >
          {title}
        </button>
      </li>
    )
  })
  return (
    <Layout location={location}>
      {NAV_LIST_ITEMS}
      <Account />
      <Login />
      <Register />
      <PasswordRecover />
    </Layout>
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
