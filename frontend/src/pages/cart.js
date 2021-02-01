import React, { useState, useContext } from "react"
import CartPageItem from "../components/cart-page-item"
import Layout from "../components/layout"
import store from "../util/store"
import GUARANTEE_BANNER from "../../content/assets/guarantee_banner.png"
import { Link } from "gatsby"
import "../styles/cart-page.css"
import gql from "graphql-tag"


const ShoppingCartPage = ({ location }) => {

    const {
        addToCart,
        // isCartOpen,
        // buyNow,
        checkout,
        removeFromCart,
        // setValue,
        toggleCart,
    } = useContext(store)
    
const [specialInstructions, setSpecialInstructions] = useState("")

    const PRODUCTS_IN_CART = checkout.lineItems

    const TOTAL_DIFFERENCE_UNTIL_FREE_SHIPPING = (
        50 - parseFloat(checkout.subtotalPrice)
      ).toFixed(2)

    const differenceToDisplay = currentDifference => {
        if (currentDifference > 0) {
          return (
            <p>
              Add <span className="difference-num">{currentDifference}</span> more
              for <strong>FREE SHIPPING!</strong>
            </p>
          )
        } else {
          return (
            <p>
              Congratulations! You've earned <strong>FREE SHIPPING!</strong>
            </p>
          )
        }
      }

      const handleSpecialInstructionsChange = e => {
          setSpecialInstructions(e.target.value)
      }

      const NO_PRODUCTS_IN_CART = (
          <div className="no-products-in-cart-page-wrapper">
              <p className="no-products-title">No Products in the cart</p>
              <p>Before proceeding to checkout you must add some products to your shopping cart.</p>
              <p>You will find a lot of interesting products on our "Shop" page.</p>
              <Link to="/">CONTINUE SHOPPING</Link>
          </div>
      )

    return (
        <Layout location={location}>
            <section className="shopping-cart-page">
                <header>
                    {/* Shopping Icon SVG */}
                    <div>
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 21 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>icon</title>
                            <defs>
                                <rect
                                    id="path-1"
                                    x="0"
                                    y="0"
                                    width="1920"
                                    height="141"
                                ></rect>
                                <filter
                                    x="-0.1%"
                                    y="-1.1%"
                                    width="100.2%"
                                    height="102.1%"
                                    filterUnits="objectBoundingBox"
                                    id="filter-2"
                                >
                                    <feOffset
                                        dx="0"
                                        dy="0"
                                        in="SourceAlpha"
                                        result="shadowOffsetOuter1"
                                    ></feOffset>
                                    <feGaussianBlur
                                        stdDeviation="0.5"
                                        in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1"
                                    ></feGaussianBlur>
                                    <feColorMatrix
                                        values="0 0 0 0 0.149019608   0 0 0 0 0.160784314   0 0 0 0 0.243137255  0 0 0 0.5 0"
                                        type="matrix"
                                        in="shadowBlurOuter1"
                                    ></feColorMatrix>
                                </filter>
                            </defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    id="Product-Page-Copy-7"
                                    transform="translate(-1440.000000, -61.000000)"
                                >
                                    <g id="Rectangle">
                                        <use
                                            fill="black"
                                            fillOpacity="1"
                                            filter="url(#filter-2)"
                                        ></use>
                                        <use fill="#FFFFFF" fillRule="evenodd"></use>
                                    </g>
                                    <g
                                        id="Group-23"
                                        transform="translate(1394.000000, 60.000000)"
                                        fill="#26293E"
                                    >
                                        <path
                                            d="M46.3177095,1 C47.5592614,1 48.4561436,1.22422057 49.0248163,1.79289322 C49.3598659,2.12794284 49.6544489,2.56893407 49.8774658,3.06047595 C50.040153,3.02226023 50.2113563,3.00215745 50.3889566,3.0025413 L64.3584154,4.00035979 C65.6101302,4.02246314 66.8347657,5.06045128 66.2302188,6.4090559 C66.1124987,6.67166232 65.5809203,7.74107307 64.7356887,9.42380176 C64.3906049,10.1107569 64.0364843,10.8139176 63.6823719,11.5158735 C63.481721,11.9135242 63.481721,11.9135242 63.3400718,12.1940179 C63.2752361,12.3223602 63.2499633,12.3723877 63.2347347,12.4025252 C62.9473552,13.1416265 62.3403838,13.7125666 61.5821659,13.9531632 L61.4345641,14 L51.3557095,14 L51.3414014,13.9992614 L49.367264,13.9987714 C48.7990202,14.0269651 48.3446746,14.4813107 48.3177095,15 L48.315915,15.9401179 C48.350246,16.5123999 48.8077178,16.9693908 49.3177095,17 L49.4884152,17 C49.9002516,15.8348076 51.0114907,15 52.3177095,15 C53.6239283,15 54.7351674,15.8348076 55.1470038,17 L57.4884152,17 C57.9002516,15.8348076 59.0114907,15 60.3177095,15 C61.9745638,15 63.3177095,16.3431458 63.3177095,18 C63.3177095,19.6568542 61.9745638,21 60.3177095,21 C59.0114907,21 57.9002516,20.1651924 57.4884152,19 L55.1470038,19 C54.7351674,20.1651924 53.6239283,21 52.3177095,21 C51.0110177,21 49.8994469,20.1645877 49.4879681,18.9987341 L49.2609485,18.9983878 C47.6804629,18.908533 46.4145307,17.6439315 46.3177095,16 L46.3189381,14.9504455 C46.3979071,13.3588245 47.6680652,12.0855742 49.3076295,12.0005078 L48.32776,5.14142136 L48.3177095,5 C48.3177095,4.35306206 47.9885731,3.58507719 47.6106027,3.20710678 C47.5126087,3.10911276 47.0761577,3 46.3177095,3 L46.3177095,1 Z M60.3177095,17 C59.7654248,17 59.3177095,17.4477153 59.3177095,18 C59.3177095,18.5522847 59.7654248,19 60.3177095,19 C60.8699943,19 61.3177095,18.5522847 61.3177095,18 C61.3177095,17.4477153 60.8699943,17 60.3177095,17 Z M52.3177095,17 C51.7654248,17 51.3177095,17.4477153 51.3177095,18 C51.3177095,18.5522847 51.7654248,19 52.3177095,19 C52.8699943,19 53.3177095,18.5522847 53.3177095,18 C53.3177095,17.4477153 52.8699943,17 52.3177095,17 Z M50.327967,5.00073455 L51.3078634,11.8600168 C51.3174404,11.9277585 51.366371,11.9821505 51.430581,12 L61.0871376,12 C61.2205372,11.9273528 61.3242557,11.8077563 61.3764839,11.6622214 L61.4252669,11.548839 C61.4353455,11.5289026 61.4411046,11.5175104 61.4527454,11.4944722 L61.5155133,11.3702291 C61.5267149,11.3480556 61.5397035,11.3223447 61.5548568,11.2923487 C61.696309,11.0122452 61.696309,11.0122452 61.8967183,10.6150733 C62.2503593,9.91405165 62.6039921,9.21185958 62.9339939,8.55492931 L62.9484803,8.52609021 C63.5265907,7.37515943 63.9681669,6.49032194 64.211084,5.9949252 L50.327967,5.00073455 Z"
                                            id="icon"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    {/* End Shopping Icon SVG */}
                    <h2>My Cart</h2>
                </header>
                <div>
                    <table className="cart-table-wrapper">
                        <thead>
                            <tr>
                                <th aria-label="empty block"></th>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                            PRODUCTS_IN_CART.length
                            ?
                            /*eslint-disable */
                            PRODUCTS_IN_CART.map((data) => {
                                try {
                                    return (
                                        <CartPageItem
                                            key={data.variant.id}
                                            productTitle={data.title}
                                            variantTitle={data.variant.title}
                                            quantity={data.quantity}
                                            price={data.variant.price}
                                            imgSrc={data.variant.image.src}
                                            imgAltText={data.variant.image.altText}
                                            extraData={data.variant}
                                            lineItemId={data.id}
                                            variantId={data.variant.id}
                                            removeFromCart={removeFromCart}
                                            addToCart={addToCart}
                                            linkToProduct={"/"}
                                            toggleCart={toggleCart}
                                        />
                                    )
                                } catch (err) {
                                    removeFromCart()
                                }
                            })
                            /*eslint-enable */
                            :
                            NO_PRODUCTS_IN_CART
                        }
                        </tbody>
                    </table>
                </div>
                <footer>
                    <div className="extra-info-section">
                        <div className="text-area-wrapper">
                            {/* <label htmlFor="special-instructions">
                                Special Instructions For Seller
                            </label> */}
                            <h6>Special Instructions For Seller</h6>
                            <textarea onChange={handleSpecialInstructionsChange} name="special-instructions" id="special-instructions" cols="30" rows="10" placeholder="Type Here ...">
                            </textarea>
                        </div>
                        <div className="guarantee-banner-wrapper">
                            <img src={GUARANTEE_BANNER} alt="guarantee banner"/>
                        </div>
                    </div>
                    <div className="totals-display">
                        <h6>CART TOTALS</h6>
                        <table className="checkout-details-table">
                            <tbody>
                                <tr>
                                    <td><strong>Subtotal</strong></td>
                                    <td className="right-table-data">${checkout.subtotalPrice}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tax</strong></td>
                                    <td className="right-table-data">Calculated at checkout</td>
                                </tr>
                                <tr>
                                    <td><strong>Shipping</strong></td>
                                    <td className="right-table-data">Calculated at checkout</td>
                                </tr>
                                <tr>
                                    <td><strong>Coupons/Rewards</strong></td>
                                    <td className="right-table-data">Calculated at checkout</td>
                                </tr>
                                <tr className="estimated-total-display">
                                    <td>Estimated Total</td>
                                    <td className="right-table-data">${checkout.subtotalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        {differenceToDisplay(TOTAL_DIFFERENCE_UNTIL_FREE_SHIPPING)}
                        <div className="cart-redirect-btns">
                            <a className={`checkout ${PRODUCTS_IN_CART.length ? "" : "disabled"}`} href={checkout.webUrl}>
                                PROCEED TO CHECKOUT
                            </a>
                        </div>
                    </div>
                </footer>
            </section>
        </Layout>
    )
}

export default ShoppingCartPage