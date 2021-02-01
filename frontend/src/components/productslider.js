import React, { useState, createContext } from "react"
import Slider from "./slider"
import Product from "./product"
import ProductModal from "./product-modal"
import "../styles/product.css"
import { Zoom } from "react-awesome-reveal"

export const ProductSliderContext = createContext(null)

const ProductSlider = ({ collection }) => {

  let slideData = []
  let slider = undefined
  let collectionSize = 0
  let prodData = []
  const [modalShow, setModalShow] = useState("")
  const [productShow, setProductShow] = useState(true);

  const handleModalShow = e => {
    setModalShow(e)
    setProductShow(false)
  }
  // Uses the product stack to generate product components
  let populateProductSliderData = products => {
    collectionSize = products.length
    let tempArr = []
    for (let i = 0; i < products.length; i++) {
      if (products[i].availableForSale) {
        let prod = (
          <Product
            key={i}
            productInfo={products[i]}
            handleModalShow={handleModalShow}
          />
        )
        if (products[i].variants.length > 1) {
          let prodVariantArr = products[i].variants.map(data => {
            return {
              "@type": "Product",
              image: `${data.image.originalSrc}`,
              /* TODO: Need URL For Variants */
              url: `${data.title}`,
              name: `${products[i].title} ${data.title}`,
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                price: `${data.priceV2.amount}`,
                priceCurrency: `${data.priceV2.currencyCode}`,
              },
              /* TODO: Products need reviews entered in structured data */
            }
          })
          prodData.push({
            "@type": "ProductGroup",
            image: `${products[i].images[0].originalSrc}`,
            /* This URL might be wrong */
            url: `${products[i].onlineStoreUrl}`,
            name: `${products[i].title}`,
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              price: `${products[i].title}`,
              priceCurrency: "USD",
            },
            hasVariant: prodVariantArr,
          })
        } else {
          prodData.push({
            "@type": "Product",
            image: `${products[i].images[0].originalSrc}`,
            url: `${products[i].onlineStoreUrl}`,
            name: `${products[i].title}`,
            offers: {
              "@type": "Offer",
              price: `${products[i].title}`,
            },
          })
        }
        tempArr.push(prod)
      }
      if (tempArr.length === 3) {
        slideData.push(tempArr)
        tempArr = []
      }
    }
    if (tempArr.length > 0) {
      slideData.push(tempArr)
    }
  }

  // Uses products components to populate Product Slider up to 3
  let populateSlides = slideData => {
    let tempSlideData = slideData
    slider = (
      <Slider
        dotsVal={true}
        speed={750}
        autoplay={false}
        arrowsVal={false}
        slide1={tempSlideData[0] && tempSlideData[0]}
        slide2={tempSlideData[1] && tempSlideData[1]}
        slide3={tempSlideData[2] && tempSlideData[2]}
      />
    )
  }
  populateProductSliderData(collection.slice(0, 9))
  populateSlides(slideData)
  let strucData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: `${collectionSize}`,
    itemListElement: { prodData },
  }
  let strucDataJson = JSON.stringify(strucData)
  return (
    <Zoom style={{ display: "flex" }} triggerOnce={true} fraction={.75}  className="product-slider">
      <div className="product-slider-inner">
        {modalShow.availableForSale && (
          <ProductModal type1="product-modal" type2="product-modal-inner" data={modalShow} setModalShow={setModalShow} setProductShow={setProductShow} />
        )}
        {/* Script is for structured data and SEO purposes            */}
        <script type="application/ld+json">{strucDataJson}</script>
        {collection.title}

        {slider}
      </div>
    </Zoom>
  )
}

ProductSlider.defaultProps = {}

ProductSlider.propTypes = {}

export default ProductSlider
