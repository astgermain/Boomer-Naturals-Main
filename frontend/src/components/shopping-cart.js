import React, { useEffect, useContext } from "react"
import store from "../util/store"
import CartItem from "./cart-item"
import { Slide } from "react-awesome-reveal"
import "../styles/shopping-cart.css"
import { Link } from "gatsby"

/**
 * addToCart - variantId, quantity, setIsLoading
 * buyNow - productID, quantity, setIsLoading
 * checkout
 * removeFromCart - lineItemId
 * setValue - value
 * toggleCart
 */
const ShoppingCart = () => {
  const {
    addToCart,
    isCartOpen,
    // buyNow,
    checkout,
    removeFromCart,
    // setValue,
    toggleCart,
    // customerAddress,
    // customerInfo
  } = useContext(store)
  useEffect(() => {

  }, [isCartOpen])

  const PRODUCTS_IN_CART = checkout.lineItems
  const SUBTOTAL_PRICE = checkout.subtotalPrice
  const TOTAL_DIFFERENCE_UNTIL_FREE_SHIPPING = (
    50 - parseFloat(SUBTOTAL_PRICE)
  ).toFixed(2)

  const differenceToDisplay = currentDifference => {
    if (currentDifference > 0) {
      return (
        <p>
          Add <span className="difference-num">{currentDifference}</span> more
          for <strong>FREE SHIPPING!</strong>
        </p>
      )
    } else {
      return (
        <p>
          Congratulations!<br></br>You've earned <strong>FREE SHIPPING!</strong>
        </p>
      )
    }
  }
  const SHOPPING_CART_ITEMS = (
      <ul>
        {/*eslint-disable */}
        {PRODUCTS_IN_CART.map((data) => {
          try {
            return(
            <li key={data.id}>
              <CartItem
                productTitle={data.title}
                variantTitle={data.variant.title}
                quantity={data.quantity}
                price={data.variant.price}
                imgSrc={data.variant.image.src}
                imgAltText={data.variant.image.altText}
                extraData={data.variant}
                lineItemId={data.id}
                variantId={data.variant.id}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                linkToProduct={"/"} //need to update
              />
            </li>
            )
          } catch(err) {
            removeFromCart()
          }
        })}
        {/*eslint-disable */}
      </ul>
    )
  


  const NO_CART_ITEMS = <p>No Products in your cart.</p>

  useEffect(() => {
    //console.log("PRODS IN CART", PRODUCTS_IN_CART)
    //Fconsole.log("Checkout: ", checkout)
  }, [PRODUCTS_IN_CART])
  return (
    <Slide triggerOnce={true} direction="right">
      <section className="shopping-cart-wrapper">
        <header>
          <h3>My Cart</h3>
          <button className="close" aria-label="close" onClick={toggleCart}></button>
        </header>
        <div className="shopping-cart-body">
          <div>
            Already have an account? <a href="/">Login</a>
          </div>
          {PRODUCTS_IN_CART.length ? SHOPPING_CART_ITEMS : NO_CART_ITEMS}
        </div>
        <footer>
          <div className="totals-display">
            {differenceToDisplay(TOTAL_DIFFERENCE_UNTIL_FREE_SHIPPING)}
            <table className="checkout-details-table">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className="right-table-data">${SUBTOTAL_PRICE}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td className="right-table-data">Calculated at checkout</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td className="right-table-data">Calculated at checkout</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart-redirect-btns">
            <Link className="view-cart" to={"/cart"}>
              VIEW MY CART
            </Link>
            <a className={`checkout ${PRODUCTS_IN_CART.length ? "" : "disabled"}`} href={checkout.webUrl}>
              CHECK OUT
            </a>
          </div>
        </footer>
      </section>
    </Slide>
  )
}

export default ShoppingCart
