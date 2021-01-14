import React, { useState, useContext } from "react"
import StoreContext from "../../util/store"

const AddressUpdate = ({ updateFunc }) => {
    const { customerAccessToken, setValue } = useContext(StoreContext)
    const [email, setEmail] = useState(``)
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
              
            },
          })
            .then(result => {
              console.log('edit result', result)
              handleCustomerAccessToken(
                result.data.customerAccessTokenCreate.customerAccessToken
              )
              if (
                result.data.customerAccessTokenCreate.customerUserErrors.length
              ) {
                setIncorrectCredMsg("Username or Password is incorrect")
                alert(incorrectCredMsg)
              }
            })
            .catch(err => {
              alert(err)
              console.error(err)
            })
        }}
      >
          <br></br>
        <span>Address Editing</span>
        <br></br>
        <span>Address1</span>
        <input type="email" onChange={e => setEmail(e.target.value)}></input>
        <br></br>
        <button type="submit">Update Address</button>
        <br></br>
      </form>
    </div>
  )
}

export default AddressUpdate
