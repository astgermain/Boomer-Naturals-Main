import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const PASSWORD_RECOVER = gql`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

const PasswordRecover = () => {
  const [email, setEmail] = useState(null)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)

  return (
    <Mutation mutation={PASSWORD_RECOVER}>
      {passwordRecover => {
        return (
          <div className="recover-form">
            <form
              onSubmit={e => {
                e.preventDefault()
                passwordRecover({
                  variables: {
                      email: email,
                  },
                })
                  .then(result => {
                    console.log('result',result.data)
                    if (result.data.customerRecover.customerUserErrors.length) {
                      setIncorrectCredMsg("E-Mail doesn't exist")
                      alert({incorrectCredMsg})
                    }
                    else {
                        alert('An E-Mail should have been sent to the provided E-Mail address')
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error(err)
                  })
              }}
            >
                <span>E-Mail</span>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></input>
              <button type="submit">Recover Password</button>
            </form>
          </div>
        )
      }}
    </Mutation>
  )
}

export default PasswordRecover  