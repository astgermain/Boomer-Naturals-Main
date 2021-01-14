import React, { useState, useContext, useEffect } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../util/store"
import AddressCreation from "./address-creation"
import AddressUpdate from "./address-update"

const ADDRESS_DELETE = gql`
  mutation customerAddressDelete($id: ID!, $customerAccessToken: String!) {
    customerAddressDelete(id: $id, customerAccessToken: $customerAccessToken) {
      customerUserErrors {
        code
        field
        message
      }
      deletedCustomerAddressId
    }
  }
`

const ADDRESS_UPDATE = gql`
  mutation customerAddressUpdate(
    $customerAccessToken: String!
    $id: ID!
    $address: MailingAddressInput!
  ) {
    customerAddressUpdate(
      customerAccessToken: $customerAccessToken
      id: $id
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

const DEFAULT_ADDRESS_UPDATE = gql`
  mutation customerDefaultAddressUpdate(
    $customerAccessToken: String!
    $addressId: ID!
  ) {
    customerDefaultAddressUpdate(
      customerAccessToken: $customerAccessToken
      addressId: $addressId
    ) {
      customer {
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

const Addresses = ({ data }) => {
  //console.log("addresses data: ", data)
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [showEditForm, setShowEditForm] = useState("")
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  let handleEditClick = (id) => {
      if(id == null){
          setShowEditForm("")
      }
      else{
    setShowEditForm(id)
      }
  }
  let handleNewAddress = () => {
    setShowCreateForm(!showCreateForm)
  }
  //console.log("ctoken on addresses:", customerAccessToken.accessToken)
  useEffect(() => {}, [data])
  return (
    <>
      <div>Addresses</div>
      {data.data.customer.addresses.edges.map((edge, index) => {
          //Needs to hide or update when changed, probably save the frag in state
        return (
          <>
            <div>
              Address {index + 1}: {edge.node.address1}
            </div>
            {edge.node.id != showEditForm && <button onClick={() => handleEditClick(edge.node.id)}>Edit</button>}
            {edge.node.id == showEditForm && 
            <Mutation mutation={ADDRESS_UPDATE}>
            {updateFunc => {
              return (
                  <>
                    <AddressUpdate updateFunc={ updateFunc } />
                    <button onClick={handleEditClick}>Close</button>
                    <br></br>
                    </>
                )
            }}
            </Mutation>
            }
            <Mutation mutation={ADDRESS_DELETE}>
              {deleteFunc => {
                return( <button onClick={() => deleteFunc({
                    variables: {
                        id: edge.node.id,
                        customerAccessToken: customerAccessToken.accessToken,
                    },
                  })
                  .then(result => {
                    console.log('delete result', result)
                    if (
                      result.data.customerAddressDelete.customerUserErrors
                        .length
                    ) {
                      setIncorrectCredMsg(result.data.customerAddressDelete.customerUserErrors[0].message)
                      //message gets set but not in time for the alert maybe just display
                      alert(incorrectCredMsg)
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error(err)
                  })}>Delete</button>
                )
              }}
            </Mutation>
          </>
        )
      })}
      <br></br>
      {!showCreateForm && <button onClick={handleNewAddress}>Add New Address</button>}
      {showCreateForm && 
      <>
        <AddressCreation /> 
        <button onClick={handleNewAddress}>Cancel</button>
        </>}

      
      <Mutation mutation={DEFAULT_ADDRESS_UPDATE}>
        {defUpdateFunc => {
          return <div>Set As Default</div>
        }}
      </Mutation>
    </>
  )
}

export default Addresses
