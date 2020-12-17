import React, { useState, useEffect, useContext } from "react"
import CartItem from './cart-item'
import { Slide } from "react-awesome-reveal"

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

  useEffect(() => {
    console.log('PRODS IN CART',PRODUCTS_IN_CART)

  }, [PRODUCTS_IN_CART])
  
  return (
    <Slide
      triggerOnce={true}
      direction="right"
    >
      <div style={{height: "100vh"}}>
        <h1>Welcome to shopping cart</h1>
      </div>
    </Slide>
  )
  
}

export default ShoppingCart
