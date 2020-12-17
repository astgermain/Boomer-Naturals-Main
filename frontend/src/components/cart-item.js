import React, { useState } from 'react'

const CartItem = ({ productTitle, variantTitle, quantity, price, imgSrc, imgAltText, extraData, linkToProduct }) => {
    console.log('item props:', productTitle)
    return (
        <div className="cart-item-wrapper">
            <a href={linkToProduct}>
                <img src={imgSrc} alt={imgAltText} />
            </a>
        </div>
    )
}

export default CartItem