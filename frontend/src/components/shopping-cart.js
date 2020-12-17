import React, { useState, useEffect, useContext } from "react"
import CartItem from './cart-item'
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
    <h1>ShoppingCart</h1>
  )
  
}

export default ShoppingCart
