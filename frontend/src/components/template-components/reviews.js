/**
 * Email Capture Component with Klayvio Email Marketing Integration
 */
import React from "react"
import { Helmet } from "react-helmet"
import "../../styles/product-template.css"

const Reviews = ({ data, pageContext, location, ReviewDisable}) => {

  
  const ShopifyId = pageContext.node.shopifyId
  const DataId = Buffer.from(ShopifyId, 'base64').toString().split('/')[4]
  const DataTitle = pageContext.node.title
  const DataUrl = pageContext.node.onlineStoreUrl
  const DataImage = pageContext.node.images[0]


  return (
    <section className={ReviewDisable}>
      <Helmet>
        {/* <script type="text/javascript">{`(function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/aUpUeJHAkrqAgePPIRfUHhDJcbK9nhwSUGHVgrVq/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();`}</script> */}
        <script type="text/javascript" async="true" src="//staticw2.yotpo.com/aUpUeJHAkrqAgePPIRfUHhDJcbK9nhwSUGHVgrVq/widget.js" ></script>
      </Helmet>
      <div
        className="yotpo yotpo-main-widget"
        data-product-id={DataId}
        data-price="Product Price"
        data-currency="Price Currency"
        data-name={DataTitle}
        data-url={DataUrl}
        data-image-url={DataImage}
      ></div>
    </section>
  )
}

export default Reviews
