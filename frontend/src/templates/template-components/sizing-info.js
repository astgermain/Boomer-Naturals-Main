import React from 'react'
import "../../styles/product-template.css"

const SizingInfo = ({pageContext, SizingDisable}) => {

    const productType = pageContext.node.productType

    const SwitchingSizingInfo = () =>{
        switch (productType) {
            case 'Face Cover':
                return(
                    <div>Face Cover size</div>
                )
            case 'Neck Gaiter':
                return(
                    <div className={SizingDisable}>Neck Gaiter size</div>
                )
            case 'Shield Cover':
                    return(
                        <div>Shield Cover size</div>
                    )
            case 'Pillow':
                    return(
                        <div>Pillow size</div>
                    )
            case 'Sheets':
                    return(
                         <div>Sheet size</div>
                    )
            case 'Socks':
                    return(
                         <div>sock size </div>
                     )
                default:
                    return (
                      <div>No Sizing Available</div>
                    )
        }
    }




    return ( 
        <SwitchingSizingInfo/>
     );
}
 
export default SizingInfo;