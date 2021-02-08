import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import Product from "../components/product"
import "../styles/vegas-local.css"

const VegasLocal = () => {
    return ( 
        <div>
            <Header/>

            <div className="vegas-local-container">
            <section className="header"><picture><img src="//cdn.shopify.com/s/files/1/0269/0013/6054/files/BN-20-0817_Lander_-_LVL_Banner.jpg?v=13551539355774802818" alt="vegas local" itemprop="logo" /> </picture></section>
            </div>

            <div className="content grid-me">
            <div className="lady-img"><img src="//cdn.shopify.com/s/files/1/0269/0013/6054/files/BN_Mask_Model_-_Woman_508_x_647.jpg?v=21673579068459806" alt="vegas local" itemprop="logo" data-sizes="auto" /></div>
            <div className="top-text">
            <p>Boomer Naturals flagship retail<br /> store is now open in Las Vegas,<br /> conveniently located at:</p>
            <h2>8670 W Cheyenne Ave. #120<br /> (one block west of N Rampart Blvd.)</h2>
            <p>We are here and ready to help you<br /> keep your entire family safe and<br /> protected! We have Boomer<br /> Silver-Infused Reusable Covers for adults<br /> and children currently in-stock and<br /> available for same day pick-up at our<br /> retail store - or by convenient curbside<br /> pick-up - just call us at (702) 960-1321<br /> to place your order now.</p>
            </div>
            <div className="p-text">
            <p>Or if you prefer, we can ship directly to your home!</p>
            <p>Our soft, safe material is a 65% cotton/35% polyester blend that is designed to<br /> prevent droplets from spreading, with three different layers each infused with <br />silver fibers. Our Boomer Silver-Infused Reusable Face Covers confirm upgraded protection even after a 24-hour contact period.</p>
            </div>
            </div>

            <div className="bluetxt">
<h2>And for every order we receive, we donate one face cover to those in need.</h2>
</div>
<div className="bluevegas"><img src="//cdn.shopify.com/s/files/1/0269/0013/6054/files/LV_Skyline-01.png?v=17346179217336127341" alt="vegas local" itemprop="logo" data-sizes="auto" /></div>


            <Footer/>

        </div>
     );
}
 
export default VegasLocal;