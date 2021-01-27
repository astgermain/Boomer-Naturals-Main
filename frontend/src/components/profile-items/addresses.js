import React, { useState, useContext, useEffect } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../util/store"
import AddressCreation from "./address-creation"
import AddressUpdate from "./address-update"
import DefAddressUpdate from "./def-address-update"
import "../../styles/addresses.css"
import MainButtonEvent from "../main-button-event"
import { Slide } from "react-awesome-reveal"

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

const Addresses = ({ data, id, handleAlert }) => {
  //console.log("addresses data: ", data)
  const { customerAccessToken } = useContext(StoreContext)
  const [showEditForm, setShowEditForm] = useState("")
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  // const handleCustomerAccessToken = value => {
  //   setValue(value)
  // }
  let handleEditClick = id => {
    console.log("id", id)
    if (id === null) {
      setShowEditForm("")
    } else {
      setShowEditForm(id)
    }
  }
  let handleNewAddress = () => {
    setShowCreateForm(!showCreateForm)
  }

  useEffect(() => {}, [data])
  /* eslint-disable no-unused-vars */
  let addressRenders = []
  //console.log("VALUES:", data)
  try {
    return (
      <>
        {
          // This could really use a refactor in the future
          /* eslint-disable array-callback-return */
          (addressRenders = data.data.customer.addresses.edges.map(
            (edge, index) => {
              //Needs to hide or update when changed, probably save the frag in state
              if (!showCreateForm && showEditForm === "") {
                return (
                  <React.Fragment key={edge.node.id}>
                    <div className="address">
                      {edge.node.id !== showEditForm && (
                        <div className="address-left">
                          <div className="default">
                            {data.data.customer.defaultAddress.id ===
                              edge.node.id && <>Default Address</>}
                          </div>
                          <div className="profile-reg">
                            {edge.node.firstName} {edge.node.lastName}
                          </div>
                          <div className="profile-reg">
                            {edge.node.company !== "" && (
                              <>
                                <span>{edge.node.company}</span>
                                <br></br>
                              </>
                            )}
                            {edge.node.address1 !== "" && (
                              <>
                                <span>{edge.node.address1}</span>
                                <br></br>
                              </>
                            )}
                            {edge.node.address2 !== "" && (
                              <>
                                <span>{edge.node.address2}</span>
                                <br></br>
                              </>
                            )}
                            {edge.node.city} {edge.node.province},{" "}
                            {edge.node.zip}
                            <br></br>
                            {edge.node.country}
                            <br></br>
                            {edge.node.phone}
                          </div>
                        </div>
                      )}
                      <div className="address-right">
                        {edge.node.id !== showEditForm && (
                          <button
                            className="blue-text-field"
                            onClick={() => handleEditClick(edge.node.id)}
                          >
                            Edit
                          </button>
                        )}

                        {edge.node.id !== showEditForm && (
                          <Mutation mutation={ADDRESS_DELETE}>
                            {deleteFunc => {
                              return (
                                <button
                                  className="blue-text-field"
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
                                          handleAlert({
                                            message: result.data.customerAddressDelete
                                            .customerUserErrors[0].message,
                                            close: "Close",
                                            severity: "warning",
                                          })
                                          console.error(
                                            "Error:",
                                            incorrectCredMsg
                                          )
                                        } else {
                                          handleAlert({
                                            message: "Address has been deleted",
                                            close: "Close",
                                            severity: "success",
                                          })
                                        }
                                      })
                                      .catch(err => {
                                        handleAlert({
                                          message:
                                            "There was an error trying to delete this address",
                                          close: "Close",
                                          severity: "error",
                                        })
                                        console.error("Error:", err)
                                      })
                                  }
                                >
                                  Delete
                                </button>
                              )
                            }}
                          </Mutation>
                        )}
                        {edge.node.id !== id && (
                          <Mutation mutation={DEFAULT_ADDRESS_UPDATE}>
                            {defUpdateFunc => {
                              return (
                                <>
                                  <DefAddressUpdate
                                    defUpdateFunc={defUpdateFunc}
                                    id={edge.node.id}
                                    handleAlert={handleAlert}
                                  />
                                </>
                              )
                            }}
                          </Mutation>
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                )
              } else if (edge.node.id === showEditForm) {
                return (
                  <>
                    {edge.node.id === showEditForm && (
                      <Mutation mutation={ADDRESS_UPDATE}>
                        {updateFunc => {
                          return (
                            <Slide
                              triggerOnce={false}
                              direction="right"
                              duration="500"
                            >
                              <AddressUpdate
                                updateFunc={updateFunc}
                                id={edge.node.id}
                                address={edge.node}
                                handleAlert={handleAlert}
                                handleAlert2={handleEditClick}
                              />
                              <button
              onClick={() => handleEditClick(null)}
              className="blue-text-field"
            >
              Back To Addresses
            </button>
                              
                              <br></br>
                            </Slide>
                          )
                        }}
                      </Mutation>
                    )}
                  </>
                )
              }
            }
          ))
        }
        {showEditForm === "" && (
          <div className="extra-border">
            {!showCreateForm && (
              <MainButtonEvent
                text="Add New Address"
                func={() => handleNewAddress()}
              >
                Add New Address
              </MainButtonEvent>
            )}
          </div>
        )}
        {showCreateForm && showEditForm === "" && (
          <>
            <AddressCreation />
            <button
              onClick={() => handleNewAddress()}
              className="blue-text-field"
            >
              Back To Addresses
            </button>
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
