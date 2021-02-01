import React from 'react'
import { PRODUCT_TEMPLATE_CSS } from "../../util/imports"


const ImageDisplay = ({mainImage, mainImageAlt}) => {
    return ( 
        <div className="product-image-section">
            <img className="product-temp-image"
                src={mainImage}
                alt={mainImageAlt}
                
            />
        </div>
     );
}
 
export default ImageDisplay;