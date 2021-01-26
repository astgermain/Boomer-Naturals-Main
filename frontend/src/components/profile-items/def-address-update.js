import React, { useState, useContext } from "react"
import StoreContext from "../../util/store"

const DefAddressUpdate = ({ defUpdateFunc, id, handleAlert }) => {
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
          defUpdateFunc({
            variables: {
              customerAccessToken: `${customerAccessToken.accessToken}`,
              addressId: id,
            },
          })
            .then(result => {
              //console.log('def up result', result)
              
              if (
                result.data.customerDefaultAddressUpdate.customerUserErrors.length
              ) {
                setIncorrectCredMsg("Username or Password is incorrect")
                handleAlert({
                  message: result.data.customerAddressUpdate.customerUserErrors[0].message,
                  close: "Close",
                  severity: "warning",
              })
              }
              handleAlert({
                message: "Your Default Address Was Updated",
                close: "Close",
                severity: "success",
            })
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
      
        <button type="submit" className="blue-text-field">Set As Default</button>
        
      </form>
    </div>
  )
}

export default DefAddressUpdate
