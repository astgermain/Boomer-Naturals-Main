import React, { useState } from 'react'

const CartItem = ({ productTitle, variantTitle, variantId, quantity, price, imgSrc, imgAltText, linkToProduct, removeFromCart, addToCart, lineItemId, extraData }) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleRemove = () => removeFromCart(lineItemId)

    const handlePlus = () => addToCart(variantId, 1, setIsLoading)

    const handleMinus = () => {
        // removes from cart if qty will equal zero
        if (quantity - 1 === 0) handleRemove()
        addToCart(variantId, -1, setIsLoading)
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
                <div className="cart-qty-adjuster">
                    <button onClick={handleMinus}>-</button>
                    <input type="number" value={quantity} readOnly />
                    <button onClick={handlePlus}>+</button>
                </div>
                <button onClick={handleRemove}>Remove</button>
            </div>
            <div>
                <span>{TOTAL_PRICE}</span>
                <br />
                <span>{price}</span>
            </div>
        </div>
    )
}

export default CartItem