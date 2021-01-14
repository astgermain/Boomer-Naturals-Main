import React, { useState } from "react"
import Layout from "../components/layout"

const ShoppingCartPage = ({ location }) => {
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
                            <tr>
                                <td>x</td>
                                <td>img</td>
                                <td>product info</td>
                                <td>$9.99</td>
                                <td>qty: 1</td>
                                <td>$9.99</td>
                            </tr>
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