import React, { useState, useContext } from "react"
import StoreContext from "../../util/store"
import MainButtonStyle from "../main-button-style"

const AddressUpdate = ({ updateFunc, id, address, handleAlert, handleAlert2 }) => {
  const { customerAccessToken } = useContext(StoreContext)
  const [address1, setAddress1] = useState(address.address1)
  const [address2, setAddress2] = useState(address.address2)
  const [city, setCity] = useState(address.city)
  const [company, setCompany] = useState(address.company)
  const [country, setCountry] = useState(address.country)
  const [firstName, setFirstName] = useState(address.firstName)
  const [lastName, setLastName] = useState(address.lastName)
  const [phone, setPhone] = useState(address.phone)
  const [province, setProvince] = useState(address.province)
  const [zip, setZip] = useState(address.zip)
  /* eslint-disable no-unused-vars */
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  // const handleCustomerAccessToken = value => {
  //   setValue(value)
  // }
  return (
    <div className="address-edit-form">
      <form
        onSubmit={e => {
          e.preventDefault()
          updateFunc({
            variables: {
              customerAccessToken: `${customerAccessToken.accessToken}`,
              id: id,
              address: {
                address1: address1,
                address2: address2,
                city: city,
                company: company,
                country: country,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                province: province,
                zip: zip,
              },
            },
          })
            .then(result => {
              //console.log("edit result", result)
              if (result.data.customerAddressUpdate.customerUserErrors.length) {
                setIncorrectCredMsg("Issue Updating Address")
                handleAlert({
                  message: result.data.customerAddressUpdate.customerUserErrors[0].message,
                  close: "Close",
                  severity: "warning",
                })
              }
              handleAlert({
                message: "Address Has Been Updated",
                close: "Close",
                severity: "success",
              })
              handleAlert2(null)
            })
            .catch(err => {
              handleAlert({
                message: err,
                close: "Close",
                severity: "error",
              })
              console.error(err)
            })
        }}
      >
        {/* NEEDS TO HAVE FORM VALIDATIONS AND REQUIRED COMPLETE */}
        <div className="account-row">
          <div className="account-col first">
            <div className="profile-bold">First Name</div>
            <input
              defaultValue={firstName}
              type="text"
              onChange={e => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="account-col">
            <div className="profile-bold">Last Name</div>
            <input
              defaultValue={lastName}
              type="text"
              onChange={e => setLastName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="account-row">
          <div className="account-col first">
            <div className="profile-bold">Phone</div>
            <input
              defaultValue={phone}
              type="text"
              onChange={e => setPhone(e.target.value)}
            ></input>
          </div>
          <div className="account-col">
            <div className="profile-bold">Company</div>
            <input
              defaultValue={company}
              type="text"
              onChange={e => setCompany(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="account-row">
          <div className="account-col first">
            <div className="profile-bold">Address1</div>
            <input
              defaultValue={address1}
              type="text"
              onChange={e => setAddress1(e.target.value)}
            ></input>
          </div>
          <div className="account-col">
            <div className="profile-bold">Address2</div>
            <input
              defaultValue={address2}
              type="text"
              onChange={e => setAddress2(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="account-row">
          <div className="account-col first">
            <div className="profile-bold">City</div>
            <input
              defaultValue={city}
              type="text"
              onChange={e => setCity(e.target.value)}
            ></input>
          </div>
          <div className="account-col first">
            <div className="profile-bold">Province/State</div>
            <input
              defaultValue={province}
              type="text"
              onChange={e => setProvince(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="account-row">
          <div className="account-col first">
            <div className="profile-bold">Zip</div>
            <input
              defaultValue={zip}
              type="text"
              onChange={e => setZip(e.target.value)}
            ></input>
          </div>
          <div className="account-col">
            <div className="profile-bold">Country</div>
            <input
              defaultValue={country}
              type="text"
              onChange={e => setCountry(e.target.value)}
            ></input>
          </div>
        </div>
        {/*Needs Drop Down*/}

        <br></br>
        <MainButtonStyle text="Update Address" />
        <br></br>
      </form>
    </div>
  )
}

export default AddressUpdate
