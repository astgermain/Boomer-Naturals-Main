import React from 'react'

const SizingInfo = ({pageContext}) => {

    const productType = pageContext.node.productType

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