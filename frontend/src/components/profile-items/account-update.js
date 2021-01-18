import React, { useState, useContext, useEffect } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../util/store"
import "../../styles/account.css"
import MainButtonStyle from "../main-button-style"


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

const AccountUpdate = ({
  data,
  oFirstName,
  oLastName,
  oEmail,
  handleAlert,
}) => {
  //console.log("data and fn", data, oFirstName)
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [password2, setPassword2] = useState(``)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState(``)
  const [checked, setChecked] = React.useState(false)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  const handleChange = () => {
    setChecked(prev => !prev)
  }
  let newCustomerData = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  }
  useEffect(() => {
    setFirstName(oFirstName)
    setLastName(oLastName)
    setEmail(oEmail)
  }, [data])
  return (
    <Mutation mutation={USER_UPDATE}>
      {updateFunc => {
        return (
          <>
            <div className="update-form">
              <form
                onSubmit={e => {
                  e.preventDefault()
                  updateFunc({
                    variables: {
                      customerAccessToken: customerAccessToken.accessToken,
                      customer: newCustomerData,
                    },
                  })
                    .then(result => {
                      //console.log("result", result)
                      if (
                        result.data.customerUpdate.customerAccessToken === null
                      ) {
                        result.data.customerUpdate.customerUserErrors.map(
                          msg => {
                            handleAlert({
                              message: msg.message,
                              close: "Close",
                              severity: "warning",
                            })
                          }
                        )
                      } else {
                        handleCustomerAccessToken(
                          result.data.customerUpdate.customerAccessToken
                        )
                        handleAlert({
                          message: "Your Account Has Been Updated",
                          close: "Close",
                          severity: "success",
                        })
                      }
                    })
                    .catch(err => {
                      handleAlert({
                        message: "There Was An Error Updating Your Account",
                        close: "Close",
                        severity: "error",
                      })
                      console.error("error", err)
                    })
                  data.refetch()
                }}
              >
                {/*p = TtaJL5zi8ZeyXP! */}

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
                <br></br>
                <div className="account-row">
                  <div className="account-col first">
                    <div className="profile-bold">New Password</div>
                    <input
                      type="password"
                      onChange={e => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className="account-col">
                    <div className="profile-bold">Confirm Password</div>
                    <input
                      type="password"
                      onChange={e => setPassword2(e.target.value)}
                    ></input>
                  </div>
                </div>
                <br></br>
                <MainButtonStyle text="Save Changes" />
                <br></br>
              </form>
            </div>
          </>
        )
      }}
    </Mutation>
  )
}

export default AccountUpdate
