import React from 'react'
import { CART_PAGE_CSS } from "../util/imports"

import ErrImg from "../../content/assets/errorImg.png"

const CartPageItem = ({ productTitle, variantTitle, variantId, quantity, price, imgSrc = ErrImg, imgAltText = "err image", linkToProduct, removeFromCart, addToCart, lineItemId, extraData, toggleCart }) => {
    // const [isLoading, setIsLoading] = useState(false)
    
    const [variantColor, variantSize, variantAdjustable] = variantTitle.split(' / ')
    const TOTAL_PRICE = (parseFloat(price) * parseInt(quantity)).toFixed(2)
    const handleRemove = () => removeFromCart(lineItemId)

    const handlePlus = () => addToCart(variantId, 1)

    const handleMinus = () => {
        // removes from cart if qty will equal zero
        if (quantity - 1 === 0) handleRemove()
        addToCart(variantId, -1)
    }

    return (
        <tr>
            <td className="cart-img-box cart-table-data">
                <button aria-label="close button" className="close cart-close" onClick={handleRemove}></button>
                <div className="variant-icon-wrapper">
                    <a href={linkToProduct}>
                        <img src={imgSrc} alt={imgAltText} />
                    </a>
                </div>
            </td>
            <td className="cart-table-data">
                <div className="cart-page-item-details">
                    <h6>{productTitle}</h6>
                    <p>Color: {variantColor}</p>
                    <p>Size: {variantSize}</p>
                    {variantAdjustable ? <p>Adjustable: {variantAdjustable}</p> : undefined}

                </div>
            </td>
            <td className="cart-table-data"><strong>${price}</strong></td>
            <td className="cart-table-data">
                <div className="qty-display-wrapper cart-page-version">
                    <div className="cart-qty-adjuster cart-page-version">
                        <button onClick={handleMinus}>-</button>
                        <input type="number" value={quantity} readOnly />
                        <button onClick={handlePlus}>+</button>
                    </div>
                </div>
            </td>
            <td className="cart-table-data"><strong>${TOTAL_PRICE}</strong></td>
        </tr>
    )
}

export default CartPageItem