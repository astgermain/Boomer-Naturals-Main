import React from 'react'

const SizingInfo = ({pageContext}) => {

    const productType = pageContext.node.productType
    console.log("HERE!", productType)

    const SwitchingSizingInfo = () =>{
        switch (productType) {
            case 'Face Cover':
                return(
                    <div>Face Cover size</div>
                )
            case 'Neck Gaiter':
                return(
                    <div>Neck Gaiter size</div>
                )
                default:
                    return (
                      <div>No Sizing Available</div>
                    )
        }
    }




    //mask sizes
    
    //gaiter sizes

    //

    return ( 
        <SwitchingSizingInfo/>
     );
}
 
export default SizingInfo;