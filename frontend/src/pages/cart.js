import React, { useState, useContext } from "react"
import CartPageItem from "../components/cart-page-item"
import Layout from "../components/layout"
import store from "../util/store"
import "../styles/cart-page.css"

const ShoppingCartPage = ({ location }) => {
    const {
        addToCart,
        isCartOpen,
        buyNow,
        checkout,
        removeFromCart,
        setValue,
        toggleCart,
    } = useContext(store)
    const PRODUCTS_IN_CART = checkout.lineItems

    return (
        <Layout location={location}>
            <section className="shopping-cart-page">
                <header>
                    <h2>My Cart</h2>
                </header>
                <div>
                    {/* Iterate through product map */}
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PRODUCTS_IN_CART.map((data) => {
                                try {
                                    return (
                                        <CartPageItem
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
                                            linkToProduct={"/"}
                                            toggleCart={toggleCart}
                                        />
                                    )
                                } catch (err) {
                                    removeFromCart()
                                }
                            })}
                        </tbody>
                    </table>
                </div>
                <footer>
                    <div></div>
                    <div></div>
                </footer>
            </section>
        </Layout>
    )
}

export default ShoppingCartPage