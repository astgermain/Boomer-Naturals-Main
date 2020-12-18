import React, { useState } from 'react'

const CartItem = ({ productTitle, variantTitle, quantity, price, imgSrc, imgAltText, linkToProduct, removeFromCart, lineItemId, extraData }) => {
    const handlePlus = () => {
        console.log("+1")
    }
    const handleMinus = () => {
        console.log("-1")
    }
    const handleRemove = () => {
        removeFromCart(lineItemId)
        console.log('removed')
    }
    const TOTAL_PRICE = (parseFloat(price) * parseInt(quantity)).toFixed(2)
    
    return (
        <div className="cart-item-wrapper">
            <div>
                <a href={linkToProduct}>
                    <img src={imgSrc} alt={imgAltText} />
                </a>
            </div>
            <div>
                <a href={linkToProduct}><h5>{productTitle}</h5></a>
                <span>{variantTitle}</span>
                <div>
                    <span>{TOTAL_PRICE}</span>
                    <br />
                    <span>{price}</span>
                </div>
            </div>
            <div>
                <input onClick={handleMinus} type="button" value="-"/>
                <input type="number" value={quantity}/>
                <input onClick={handlePlus} type="button" value="+"/>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem