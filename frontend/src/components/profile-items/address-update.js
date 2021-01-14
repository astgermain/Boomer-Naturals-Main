import React, { useState, useContext } from "react"
import StoreContext from "../../util/store"

const AddressUpdate = ({ updateFunc, id, address }) => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
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
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
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
                alert(incorrectCredMsg)
              }
            })
            .catch(err => {
              alert(err)
              console.error(err)
            })
        }}
      >
        {/* NEEDS TO HAVE FORM VALIDATIONS AND REQUIRED COMPLETE */}
        <span>Address Editing</span>
        <br></br>
        <span>First Name</span>
        <input defaultValue={firstName} type="text" onChange={e => setFirstName(e.target.value)}></input>
        <span>Last Name</span>
        <input defaultValue={lastName} type="text" onChange={e => setLastName(e.target.value)}></input>
        <br></br>
        <span>Company</span>
        <input defaultValue={company} type="text" onChange={e => setCompany(e.target.value)}></input>
        <br></br>
        <span>Address1</span>
        <input defaultValue={address1} type="text" onChange={e => setAddress1(e.target.value)}></input>
        <br></br>
        <span>Address2</span>
        <input defaultValue={address2} type="text" onChange={e => setAddress2(e.target.value)}></input>
        <br></br>
        <span>City</span>
        <input defaultValue={city} type="text" onChange={e => setCity(e.target.value)}></input>
        <br></br>
        <span>Country</span>
        <input defaultValue={country} type="text" onChange={e => setCountry(e.target.value)}></input>
        <br></br>
        {/*Needs Drop Down*/}
        <span>Province</span>
        <input defaultValue={province} type="text" onChange={e => setProvince(e.target.value)}></input>
        <br></br>
        <span>Zip</span>
        <input defaultValue={zip} type="text" onChange={e => setZip(e.target.value)}></input>
        <span>Phone</span>
        <input defaultValue={phone} type="text" onChange={e => setPhone(e.target.value)}></input>
        <br></br>
        <button type="submit">Update Address</button>
        <br></br>
      </form>
    </div>
  )
}

export default AddressUpdate
