import React, { useState, useContext, useEffect } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../util/store"
import AddressCreation from "./address-creation"
import AddressUpdate from "./address-update"
import DefAddressUpdate from "./def-address-update"

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

const Addresses = ({ data, id }) => {
  //console.log("addresses data: ", data)
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [showEditForm, setShowEditForm] = useState("")
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  let handleEditClick = id => {
    if (id == null) {
      setShowEditForm("")
    } else {
      setShowEditForm(id)
    }
  }
  let handleNewAddress = () => {
    setShowCreateForm(!showCreateForm)
  }

  useEffect(() => {}, [data])
  let addressRenders = []
  //console.log("VALUES:", data)
  try {
    return (
      <>
        <div>Addresses</div>
        {
          (addressRenders = data.data.customer.addresses.edges.map(
            (edge, index) => {
              //Needs to hide or update when changed, probably save the frag in state
              return (
                <React.Fragment key={edge.node.id}>
                  <div>
                    Block {index + 1}: 
                    <br></br>
                    {edge.node.firstName} {edge.node.lastName}
                    <br></br>
                    {edge.node.company != "" && <><span>{edge.node.company}</span><br></br></>}
                    {edge.node.address1 != "" && <><span>{edge.node.address1}</span><br></br></>}
                    {edge.node.address2 != "" && <><span>{edge.node.address2}</span><br></br></>}                    
                    {edge.node.city} {edge.node.province}, {edge.node.zip}
                    <br></br>
                    {edge.node.country}
                    <br></br>
                    {edge.node.phone}
                  </div>
                  
                  <div>
                    {data.data.customer.defaultAddress.id == edge.node.id && (
                      <div>Is Default: True</div>
                    )}
                  </div>
                  {edge.node.id != showEditForm && (
                    <button onClick={() => handleEditClick(edge.node.id)}>
                      Edit
                    </button>
                  )}
                  {edge.node.id != id && (
                    <Mutation mutation={DEFAULT_ADDRESS_UPDATE}>
                      {defUpdateFunc => {
                        return (
                          <>
                            <DefAddressUpdate
                              defUpdateFunc={defUpdateFunc}
                              id={edge.node.id}
                            />
                          </>
                        )
                      }}
                    </Mutation>
                  )}
                  {edge.node.id == showEditForm && (
                    <Mutation mutation={ADDRESS_UPDATE}>
                      {updateFunc => {
                        return (
                          <>
                            <AddressUpdate
                              updateFunc={updateFunc}
                              id={edge.node.id}
                              address={edge.node}
                            />
                            <button onClick={handleEditClick}>Close</button>
                            <br></br>
                          </>
                        )
                      }}
                    </Mutation>
                  )}
                  <Mutation mutation={ADDRESS_DELETE}>
                    {deleteFunc => {
                      return (
                        <button
                          onClick={() =>
                            deleteFunc({
                              variables: {
                                id: edge.node.id,
                                customerAccessToken:
                                  customerAccessToken.accessToken,
                              },
                            })
                              .then(result => {
                                console.log("delete result", result)
                                if (
                                  result.data.customerAddressDelete
                                    .customerUserErrors.length
                                ) {
                                  setIncorrectCredMsg(
                                    result.data.customerAddressDelete
                                      .customerUserErrors[0].message
                                  )
                                  //message gets set but not in time for the alert maybe just display
                                  alert(incorrectCredMsg)
                                } else {
                                  alert("Address has been deleted")
                                }
                              })
                              .catch(err => {
                                alert(err)
                                console.error(err)
                              })
                          }
                        >
                          Delete
                        </button>
                      )
                    }}
                  </Mutation>
                </React.Fragment>
              )
            }
          ))
        }
        <br></br>
        {!showCreateForm && (
          <button onClick={handleNewAddress}>Add New Address</button>
        )}
        {showCreateForm && (
          <>
            <AddressCreation />
            <button onClick={handleNewAddress}>Cancel</button>
          </>
        )}
      </>
    )
  } catch {
    //No addresses to return
    return (
      <div>
        <span>No Address To Return, Try Logging Out and Logging Back In</span>
      </div>
    )
  }
}

export default Addresses
