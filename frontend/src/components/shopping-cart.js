import React, { useState, useEffect, useContext } from "react"
import CartItem from './cart-item'
import { Slide } from "react-awesome-reveal"
import "../styles/shopping-cart.css"

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

  const SHOPPING_CART_ITEMS = (
    <ul>
      {
        PRODUCTS_IN_CART.map(({ title, quantity, variant, id }) => (
          <li key={id}>
            <CartItem
              productTitle={title}
              variantTitle={variant.title}
              quantity={quantity}
              price={variant.price}
              imgSrc={variant.image.src}
              imgAltText={variant.image.altText}
              extraData={variant}
              lineItemId={id}
              variantId={variant.id}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              linkToProduct={"/"} //need to update
            />
          </li>
        ))
      }
    </ul>
  )

  const NO_CART_ITEMS = (
    <p>No Products in your cart.</p>
  )

  useEffect(() => {
    console.log('PRODS IN CART', PRODUCTS_IN_CART)

  }, [PRODUCTS_IN_CART])

  return (
    <Slide
      triggerOnce={true}
      direction="right"
    >
      <section className="shopping-cart-wrapper">
        <header>
          <h3>YOUR CART</h3>
        </header>
        <div className="shopping-cart-body">
          {
            PRODUCTS_IN_CART.length
              ?
              SHOPPING_CART_ITEMS
              :
              NO_CART_ITEMS
            // Need to add component for "no items in cart"
          }
        </div>
        <footer>
          <span>Free Shipping on All Orders Over $50</span>
        </footer>
      </section>
    </Slide>
  )

}

export default ShoppingCart
