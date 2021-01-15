import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import StoreContext, { defaultStoreContext } from "./store"
const isBrowser = typeof window !== "undefined"

const Provider = ({ children }) => {
  //console.log(`Provider: `, defaultStoreContext)
  const [store, updateStore] = useState(defaultStoreContext)
  const [checkout, setCheckout] = useState(defaultStoreContext.checkout)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [loading, setLoading] = useState(defaultStoreContext.loading)
  const [customerAddress, setCustomerAddress] = useState({})
  const [customerInfo, setCustomerInfo] = useState({})
  const toggleCart = () => {
    //console.log("cart")
    setIsCartOpen(!isCartOpen)
  }

  const getLocalStorage = value => {
    try {
      return JSON.parse(localStorage.getItem(value))
    } catch (e) {
      return ""
    }
  }
  const createNewCheckout = async () => {
    try {
      const newCheckout = await store.client.checkout.create()
      isBrowser &&
        localStorage.setItem("checkout_Id", JSON.stringify(newCheckout.id))
      return newCheckout
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    const initializeCheckout = async () => {
      try {
        // Check if browser exits
        const isBrowser = typeof window !== "undefined"
        // Check if id exits in local storage
        const existingCheckoutId = isBrowser
          ? JSON.parse(localStorage.getItem("checkout_Id"))
          : null

        let newCheckout = null
        if (existingCheckoutId) {
          // if id exits , fetch id from shopify
          newCheckout = await store.client.checkout.fetch(existingCheckoutId)
          if (newCheckout.completedAt) {
            newCheckout = await createNewCheckout()
          }
        } else {
          //else create a new checkout id
          newCheckout = await createNewCheckout()
        }
        // Set id in state
        setCheckout(newCheckout)
      } catch (e) {
        console.error(e)
      }
    }
    initializeCheckout()
  }, [])
  return (
    <StoreContext.Provider
      value={{
        store,
        checkout,
        isCartOpen,
        toggleCart,
        loading,
        sortedData: getLocalStorage("sortedData"),
        customerAccessToken: getLocalStorage("customerAccessToken"),
        customerAddress,
        customerInfo,
        updateCustomerAddress: addressObj => {
          setCustomerAddress(addressObj)
        },
        updateCustomerInfo: customerObj => {
          setCustomerInfo(customerObj)
        },
        addAddressToCheckout: async (addressObj, customerObj) => {
          const newAddress = {
            ...addressObj,
            email: customerObj.email
          }


          const newCheckout = await store.client.checkout.updateShippingAddress(
            checkout.id,
            newAddress
          )
          setCheckout(newCheckout)

        },
        setValue: value => {
          isBrowser &&
            localStorage.setItem("customerAccessToken", JSON.stringify(value))
          updateStore(state => {
            return { ...state, customerAccessToken: value }
          })
        },
        setSortedValue: value => {
          isBrowser &&
            localStorage.setItem("sortedData", JSON.stringify(value))
          updateStore(state => {
            return { ...state, sortedData: value }
          })
        },
        buyNow: async (productID, quantity, setIsLoading) => {
          setIsLoading(true)
          const checkoutId = await store.client.checkout.create()
          const lineItem = [
            {
              variantId: productID,
              quantity: quantity,
            },
          ]
          const addItem = await store.client.checkout.addLineItems(
            checkoutId.id,
            lineItem
          )

          navigate(addItem.webUrl)
        },
        addToCart: async (variantId, quantity, setIsLoading, customAttributes = null) => {
          setIsLoading(true)
          //console.log(variantId, quantity)
          const lineItem = [
            {
              variantId: variantId,
              quantity: quantity,
              customAttributes: [customAttributes]
            },
          ]


          const newCheckout = await store.client.checkout.addLineItems(
            checkout.id,
            lineItem
          )
          //console.log(newCheckout)
          setIsLoading(false)
          setCheckout(newCheckout)
        },
        removeFromCart: async lineItemId => {
          const newCheckout = await store.client.checkout.removeLineItems(
            checkout.id,
            [lineItemId]
          )
          setCheckout(newCheckout)
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);
