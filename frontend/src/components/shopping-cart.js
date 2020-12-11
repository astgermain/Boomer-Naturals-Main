import React, { useState, useEffect, useContext } from "react"

import { Store } from "../util/store"

const ShoppingCart = () => {
  console.log('Cart: ', Store)
  const [checkout, setCheckout] = useState({})
  const { checkoutContext, toggleCart, removeFromCart } = useContext(Store)

  useEffect(() => {
    checkoutContext.create().then(createdCheckout => {
      setCheckout(createdCheckout)
    })
  }, [])
  return <div></div>
}

export default ShoppingCart
