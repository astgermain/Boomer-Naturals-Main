import React, { useState, useContext } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../util/store"
import MainButtonStyle from "../main-button-style"

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



<<<<<<< HEAD
const AddressCreation = ({handleAlert, handleAlert2, back}) => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [city, setCity] = useState("")
  const [company, setCompany] = useState("")
  const [country, setCountry] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [province, setProvince] = useState("")
  const [zip, setZip] = useState("")
=======
const AddressCreation = () => {
  const { customerAccessToken } = useContext(StoreContext)
  // Please consider deleting unused vars
  /* eslint-disable no-unused-vars */
  const [email, setEmail] = useState(``)
  /* eslint-disable no-unused-vars */
  const [password, setPassword] = useState(``)
  // const [message, setMessage] = useState(``)
  /* eslint-disable no-unused-vars */
>>>>>>> 9f137aca43320b7baaf5f798e8da870b4d744800
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
<<<<<<< HEAD
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
                }
=======
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
>>>>>>> 9f137aca43320b7baaf5f798e8da870b4d744800
                createFunc({
                  variables: {
                    customerAccessToken: `${customerAccessToken.accessToken}`,
                    address: address,
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
                    handleAlert({
                      message: "Address Has Been Updated",
                      close: "Close",
                      severity: "success",
                  })
                  handleAlert2(null)
                  back()
                  })
                  .catch(err => {
                    alert(err)
                    console.error(err)
                  })
              }}
            >
<<<<<<< HEAD
              <span>New Address</span>
              <br></br>
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
            <br></br>
              <MainButtonStyle text="Create" />
            </form>
            </div>
          )}}
      </Mutation>
        
=======
              Create
            </button>
          </div>
        )
      }}
    </Mutation>

>>>>>>> 9f137aca43320b7baaf5f798e8da870b4d744800
  )
}

export default AddressCreation