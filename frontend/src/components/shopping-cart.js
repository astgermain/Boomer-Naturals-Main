import React, { useState, useEffect } from "react"
import Client from 'shopify-buy'

const { GATSBY_STOREFRONT_TOKEN } = process.env

const ShoppingCart = () => {
    const client = Client.buildClient({
        domain: 'boomerfacemasks.myshopify.com',
        storefrontAccessToken: GATSBY_STOREFRONT_TOKEN
    })
    client.checkout.create()
        .then((checkout) => {
            console.log('checkout from client:',checkout)
        })
    return (
        <div>
            Hello from Shopping Cart
        </div>
    )
}

export default ShoppingCart