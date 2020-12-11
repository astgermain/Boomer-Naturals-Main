import React, { useState, useEffect, useContext } from "react"

//import { Store } from "../util/store"

const ShoppingCart = (props) => {
  console.log('Cart: ', props)
  const [checkout, setCheckout] = useState({})
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
