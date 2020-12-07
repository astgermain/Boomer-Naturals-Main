import React, { useState, useEffect, useContext } from "react"

import { ClientContext } from "./layout"

const ShoppingCart = () => {

    const [checkout, setCheckout] = useState({})
    const client = useContext(ClientContext)

    useEffect(() => {
        client.checkout.create()
            .then((checkout) => {
                setCheckout(checkout)
            })
    }, [])
    return (
        <div>
        </div>
    )
}

export default ShoppingCart