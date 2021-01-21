import React from 'react'
import { Link } from "gatsby"

const CartItem = ({ productTitle, variantTitle, variantId, quantity, price, imgSrc, imgAltText, linkToProduct, removeFromCart, addToCart, lineItemId, extraData }) => {
    // const [isLoading, setIsLoading] = useState(false)

    const handleRemove = () => removeFromCart(lineItemId)

    const handlePlus = () => addToCart(variantId, 1)

    const handleMinus = () => {
        // removes from cart if qty will equal zero
        if (quantity - 1 === 0) handleRemove()
        addToCart(variantId, -1)
    }

    const TOTAL_PRICE = (parseFloat(price) * parseInt(quantity)).toFixed(2)
    return (
        <div className="cart-item-wrapper">
            <div className="variant-icon-wrapper">
                <Link to={linkToProduct}>
                    <img src={imgSrc} alt={imgAltText} />
                </Link>
            </div>
            <div className="cart-item-content-wrapper">
                <div style={{ textAlign: 'left', margin: '1rem' }}>
                    <a href={linkToProduct}><h5 style={{ marginTop: '0' }}>{productTitle}</h5></a>
                    <span className="variant-title">{variantTitle}</span>
                    <div className="qty-display-wrapper">
                        <div className="cart-qty-adjuster">
                            <button onClick={handleMinus}>-</button>
                            <input type="number" value={quantity} readOnly />
                            <button onClick={handlePlus}>+</button>
                        </div>
                        <button className="remove-item-btn" onClick={handleRemove}>Remove</button>
                    </div>
                </div>
                <div style={{ margin: '1rem' }}>
                    <span style={{ color: 'var(--color-heading)' }}>{TOTAL_PRICE}</span>
                    <br />
                    <span style={{ color: 'var(--color-text-light)' }}>{price}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem