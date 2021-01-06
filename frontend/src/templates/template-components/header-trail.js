import React from 'react'
import "../../styles/product-template.css"


const HeaderTrail = ({data, pageContext, location}) => {
    const UrlLocationPathname = location.pathname
    const UrlLocationOrigin = location.origin
    const FirstPathName = UrlLocationPathname.split('/')[1]
    const SecondPathName = UrlLocationPathname.split('/')[2].replace(/-/g, " ")
    const SecondPathNameUrl = location.href





    return ( 
    <div className="headtrail-container">
        <a href={UrlLocationOrigin}><span>Home </span></a>
        <span>></span>
        <a><span>{FirstPathName}</span></a>
        <span>></span>
        <a href={SecondPathNameUrl}><span>{SecondPathName}</span></a>
    </div>
     );
}
 
export default HeaderTrail;