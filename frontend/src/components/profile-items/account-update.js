import React, { useState, useContext, useEffect } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../util/store"

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

const AccountUpdate = ({ data, oFirstName, oLastName, oEmail }) => {
  console.log("data and fn", data, oFirstName)
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [password2, setPassword2] = useState(``)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState(``)
  const handleCustomerAccessToken = value => {
    setValue(value)
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
                      result.data.customerUpdate.customerUserErrors.map(msg => {
                        alert(msg.message)
                      })
                    } else {
                      handleCustomerAccessToken(
                        result.data.customerUpdate.customerAccessToken
                      )
                      alert("Success")
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error("error", err)
                  })
                data.refetch()
              }}
            >
              {/*p = TtaJL5zi8ZeyXP! */}
              <span>First Name</span>
              <input
                defaultValue={firstName}
                type="text"
                onChange={e => setFirstName(e.target.value)}
              ></input><br></br>
              <span>Last Name</span>
              <input
                defaultValue={lastName}
                type="text"
                onChange={e => setLastName(e.target.value)}
              ></input><br></br>
              <span>E-Mail: </span>
              <span>{email}</span><br></br>
              <span>New Password</span>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
              ></input><br></br>
              <span>Confirm Password</span>
              <input
                type="password"
                onChange={e => setPassword2(e.target.value)}
              ></input><br></br>
              <button type="submit">Update Info</button>
            </form>
          </div>
        )
      }}
    </Mutation>
  )
}

export default AccountUpdate
