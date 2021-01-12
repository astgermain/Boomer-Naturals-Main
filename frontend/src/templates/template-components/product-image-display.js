import React from 'react'
import "../../styles/product-template.css"


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