import React, {useState} from 'react'
import "../styles/upsell.css"

const UpSell = ({ upsellShow, setupsellShow }) => {
    const handleUpsellClick = () => {
        setupsellShow(!upsellShow)
      }
    

    return ( 
        <div className="upsell-container">
            <button className="continue-shop-upsell" onClick={handleUpsellClick}>
                Continue Shopping
          </button>
          <button className="view-cart-upsell" >
                View Cart
          </button>
          </div>
     );
}
 
export default UpSell;