import React, { useState, useEffect } from "react"
import Client from 'shopify-buy'

const { GATSBY_STOREFRONT_TOKEN } = process.env

const ShoppingCart = () => {

    const [checkout, setCheckout] = useState({})

    useEffect(() => {
        const client = Client.buildClient({
            domain: 'boomerfacemasks.myshopify.com',
            storefrontAccessToken: GATSBY_STOREFRONT_TOKEN
        })
        console.log('client', client)
        client.checkout.create()
            .then((checkout) => {
                setCheckout(checkout)
            })
    }, [])
    console.log('checkout:', checkout)
    return (
        <div>
            Hello from Shopping Cart
        </div>
    )
}

export default ShoppingCart