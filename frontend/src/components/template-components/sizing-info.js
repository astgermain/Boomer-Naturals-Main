import React from "react"
import facecoverimage from '../../../content/assets/facecoverimage.png'
import gaiterimage from '../../../content/assets/gaiterimage.png'
import SizingContent from "./sizing-info-content"
import { PRODUCT_TEMPLATE_CSS } from "../../util/imports"



const SizingInfo = ({ pageContext, SizingDisable }) => {
//add product data, sizes, images, etc to ProductSizes
//after add product to switch statement in sizing-info-content
  const ProductSizes = {
    Mask:{
            Name:"Face Covers",
            Sizes:["Ages 2-7", "Ages 8-12", "Small", "Medium", "Large", "L/XL", "XL" ],
            W: ["8.3\"", "9.2\"","9.5\"", "10.0\"", "10.3\"", "10.3\"", "10.6\""],
            H: ["4.5\"", "5\"","5.3\"", "5.8\"", "6.3\"", "6.5\"", "6.8\""],
            Wmeasured: "left to right (w)",
            Hmeasured: "top to bottom (h)",
            Image: facecoverimage
    },
    Gaiter:{
            Name:"Gaiters",
            Sizes:["Ages 2-7", "Ages 8-12", "S/M","L/XL" ],
            W: ["7\"", "8\"", "9\"", "10.2\""],
            H: ["10.5\"", "11.5\"", "14\"", "15\""],
            Wmeasured: "left to right (w)",
            Hmeasured: "top to bottom (h)",
            Image: gaiterimage
},  Shield:{
            Name:"Shield Covers",
            Sizes:["Ages 2-7", "Ages 8-12", "Small", "Medium", "Large", "L/XL", "XL" ],
            W: ["8.3\"", "9.2\"","9.5\"", "10.0\"", "10.3\"", "10.3\"", "10.6\""],
            H: ["4.5\"", "5\"","5.3\"", "5.8\"", "6.3\"", "6.5\"", "6.8\""],
            Wmeasured: "left to right (w)",
            Hmeasured: "top to bottom (h)",
            Image: facecoverimage
},  FaceCoverSpray:{
            Sizes:["5ml", "8ml"]
},  EarSavers:{
            Sizes:["1 ct", "5 ct", "10 ct"],
            W: ["5.7\""],
            H: ["3/4\""],
},  HandSanitizer:{
            Sizes:["2oz", "4oz", "10oz"],
},  BoomBoom:{
            Sizes:["1 ct", "10 ct"],
},  BoomLashes:{
            Sizes:["0.5oz"],
},  BeautyCreams:{
            Sizes:["30mL"],
},  BeautyCleanser:{
            Sizes:["8oz"],
},  BeautyFacialPads:{
            Sizes:["60 ct pads"],
},  BeautyFacialMask:{
            Sizes:["1 Mask"],
},  BeautyEyeMask:{
            Sizes:["30 ct"],
},  SunScreen:{
            Sizes:["2.4 oz", "1.4 oz"],
},  LipBalm:{
            Sizes:["50 mg"],
},  BoomerBotanicsImmune:{
            Sizes:["1 oz"],
},  BoomerBotanicsGummies:{
            Sizes:["5 ct"],
},  BoomerBotanicsRollOn:{
            Sizes:["1 oz", "3 oz"],
},  BoomerBotanicsBody:{
            Sizes:["4 oz"],
},  PPEGloves:{
            Sizes:["Regular/Large", "XL"],
},  SafetyGlasses:{
        Sizes:["14 x 5 x 11cm"],
},
}

  return (
   

    <div className={SizingDisable}>
        <SizingContent pageContext={pageContext} ProductSizes={ProductSizes}/>
    </div>
  )
}

export default SizingInfo
