import React, { useState, useEffect, useContext } from "react"
import CartItem from './cart-item'
//import { Store } from "../util/store"
/**
 * addToCart - variantId, quantity, setIsLoading
 * buyNow - productID, quantity, setIsLoading
 * checkout
 * removeFromCart - lineItemId
 * setValue - value
 * toggleCart
 */
const ShoppingCart = (props) => {
  console.log('Cart: ', props)
  
  const {
    addToCart,
    buyNow,
    checkout,
    removeFromCart,
    setValue,
    toggleCart
  } = props.context

  const PRODUCTS_IN_CART = checkout.lineItems

  // const [checkout, setCheckout] = useState({})

  return (
    <h1>ShoppingCart</h1>
  )
  //const { checkoutContext, toggleCart, removeFromCart } = useContext(Store)
  /*
    useEffect(() => {
      checkoutContext.create().then(createdCheckout => {
        setCheckout(createdCheckout)
      })
    }, [])
    */
  return <div></div>

}

export default ShoppingCart
