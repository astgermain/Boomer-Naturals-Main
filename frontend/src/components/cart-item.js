import React, { useState } from 'react'

const CartItem = ({ productTitle, variantTitle, quantity, price, imgSrc, imgAltText, extraData, linkToProduct }) => {
    console.log('item props:', productTitle)
    const TOTAL_PRICE = (parseFloat(price) * parseInt(quantity)).toFixed(2)
    return (
        <div className="cart-item-wrapper">
            <div>
                <a href={linkToProduct}>
                    <img src={imgSrc} alt={imgAltText} />
                </a>
            </div>
            <div>
                <h5>{productTitle}</h5>
                <span>{variantTitle}</span>
                <div>
                    <span>{TOTAL_PRICE}</span>
                    <br />
                    <span>{price}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem