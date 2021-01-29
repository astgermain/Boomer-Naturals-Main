import React from 'react'
import { Link } from 'gatsby'
import "../styles/upsell.css"

const UpSell = ({ upsellShow, setupsellShow  }) => {
    // handle to close upsell window
    const handleUpsellClick = () => {
        setupsellShow(!upsellShow)
      }
    
    //const currentContext = useContext(StoreContext)

    //getting the last product added to cart 
    // const { lineItems } = currentContext.checkout.lineItems
    // const LAST_ITEM_IN_CART = lineItems.filter( (product) => { return product.variant.id == selectedVariantId  })

    // const ProdTitle = LAST_ITEM_IN_CART.title
    // const ProdQuantity = LAST_ITEM_IN_CART.quantity
    // const ProdVariant = LAST_ITEM_IN_CART.variant.title
    // const ProdPrice = LAST_ITEM_IN_CART.variant.price
    // const ProdImg = LAST_ITEM_IN_CART.variant.image.src
    


    return ( 
        <div className="upsell-container">
            <section className="recent-add-to-cart">
                <span className="upsell-header">Product Added to Cart</span>
                {/* product that was added to cart */}

                {/* <span>{ProdTitle}</span>
                <span>Qty: {ProdQuantity} | {ProdVariant}</span>
                <span>{ProdPrice}</span>
                <img src={ProdImg}></img> */}

               <button className="continue-shop-upsell" onClick={handleUpsellClick}>
                Continue Shopping
                </button>
                <Link to="/">
                <button className="view-cart-upsell" >
                        View Cart
                </button>
                </Link> 
            </section>

            <section className="you-might-like">
            <button className="close" onClick={handleUpsellClick}>
            {" "}
          </button>
                <span>You Might Like...</span>
                <div></div>
                <div></div>
            </section>
            
          </div>
     );
}
 
export default UpSell;