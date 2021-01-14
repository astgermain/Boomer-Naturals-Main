import React from "react"
import "../../styles/product-template.css"
import facecoverimage from '../../../content/assets/facecoverimage.png'
import gaiterimage from '../../../content/assets/gaiterimage.png'
import SizingContent from "./sizing-info-content"



const SizingInfo = ({ pageContext, SizingDisable }) => {

  const ProductSizes = {
    Mask:{
            Sizes:["Small", "Medium", "Large", "L/XL", "XL" ],
            W: ["9.5\"", "10.0\"", "10.3\"", "10.3\"", "10.6\""],
            H: ["5.3\"", "5.8\"", "6.3\"", "6.5\"", "6.8\""],
            Image: facecoverimage,
            ImageText:"Face Cover is measured left to right (w), top to bottom (h)"
    },
    Gaiter:{
            Sizes:["Small","Large", "XL" ],
            W: ["9.5\"", "10.3\"", "10.6\""],
            H: ["5.3\"", "6.5\"", "6.8\""],
            Image: gaiterimage,
            ImageText:"Gaiter is measured left to right (w), top to bottom (h)"
}
}

  return (
   

    <div className={SizingDisable}>
        <SizingContent pageContext={pageContext} ProductSizes={ProductSizes}/>
    </div>
  )
}

export default SizingInfo
