/**
 * Email Capture Component with Klayvio Email Marketing Integration
 */
import React from "react"
import { Helmet } from "react-helmet"

const Reviews = () => {
  
  return (
    <section>
      <Helmet>
        <script type="text/javascript">{`(function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/aUpUeJHAkrqAgePPIRfUHhDJcbK9nhwSUGHVgrVq/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();`}</script>
      </Helmet>
      
      <div
        class="yotpo yotpo-main-widget"
        data-product-id="4574306435190"
        data-price="Product Price"
        data-currency="Price Currency"
        data-name="Product Title"
        data-url="/products/kids-reusable-one-piece-shield-mask?variant=32032997113974"
        data-image-url="The product image url"
      ></div>
    </section>
  )
}

export default Reviews
