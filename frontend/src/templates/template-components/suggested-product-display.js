import React from 'react'
import "../../styles/product-template.css"

const SuggestedProductDisplay = ({MOST_POPULAR_DATA}) => {
    const SuggestionProducts = MOST_POPULAR_DATA.products.map( product => {
        const ProductTitle = product.title
        const ProductPrice = product.priceRange.minVariantPrice.amount
        const ProductImg = product.images[0].originalSrc
        const ProductUrl = product.onlineStoreUrl
        return(
           <a href={ProductUrl} className="suggest-holder">
                   <img className="suggestimage" src={ProductImg} />
                    <div>
                    <span className="suggesttitle">{ProductTitle}</span>  
                    <span className="suggestprice">${ProductPrice}</span>
                    </div> 
                
               </a>
            
            
        )
    } 
    ) 

    return ( 
        <div className="product-display-container">
        {SuggestionProducts}
        </div>
     );
}
 
export default SuggestedProductDisplay;