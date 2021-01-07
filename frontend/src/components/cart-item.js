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
            <div style={{ textAlign: 'left' }}>
                <a href={linkToProduct}><h5 style={{ marginTop: '0' }}>{productTitle}</h5></a>
                <span style={{ fontStyle: 'italic', color: 'var(--color-text-light)' }}>{variantTitle}</span>
                <div>
                    <div className="cart-qty-adjuster">
                        <button onClick={handleMinus}>-</button>
                        <input type="number" value={quantity} readOnly />
                        <button onClick={handlePlus}>+</button>
                    </div>
                    <button onClick={handleRemove}>Remove</button>
                </div>
            </div>
            <div>
                <span style={{ color: 'var(--color-heading)' }}>{TOTAL_PRICE}</span>
                <br />
                <span style={{ color: 'var(--color-text-light)' }}>{price}</span>
            </div>
        </div>
    )
}

export default CartItem