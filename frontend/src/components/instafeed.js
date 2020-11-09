import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Slider from "./slider"
import "../instafeed.css"
import bottomleftimg from "../../content/assets/instagramgreenmask.png"
import toprightimg from "../../content/assets/instagramkids.png"
import bottomrightimg from "../../content/assets/instagramman.png"



const Instafeed = ( ) => {
    

     let instaSlide1 = 
        <div className="review-text-box">
          <div className="quote-mark">
                <svg viewBox="0 0 200 50"  version="1.1">
                    <title>“</title>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Product-Page-Copy-7" transform="translate(-921.000000, -3755.000000)">
                            <rect id="Rectangle-Copy-46" fillOpacity="0.25" fill="#E0F1F6" x="0" y="3600" width="1920" height="812"></rect>
                            <g id="Group-3" opacity="0.55" transform="translate(865.000000, 3700.000000)" fill="#D7D8DE">
                                <circle id="Oval-Copy-21" opacity="0.596981957" cx="54.5" cy="54.5" r="3.5"></circle>
                                <circle id="Oval-Copy-26" opacity="0.596981957" cx="54.5" cy="71.5" r="3.5"></circle>
                                <circle id="Oval-Copy-22" opacity="0.596981957" cx="71.5" cy="54.5" r="3.5"></circle>
                                <circle id="Oval-Copy-27" opacity="0.596981957" cx="71.5" cy="71.5" r="3.5"></circle>
                            </g>
                            <rect id="Rectangle-Copy-21" fill="#00A0C5" x="901" y="3735" width="272" height="373"></rect>
                            <text id="“" font-family="LucidaGrande, Lucida Grande" font-size="96" font-weight="normal" line-spacing="60" letter-spacing="-1.5" fill="#FFFFFF">
                                <tspan x="916" y="3845">“</tspan>
                            </text>
                        </g>
                    </g>
                </svg>
          </div>
          <div className="review-text-container">
             <div className="review-text">Finally, I found a mask that is comfortable and doesn't fall off my face.</div>
             <div className="reviewer-name">Bobby</div> 
          </div>
          
        </div>


        let instaSlide2 = 
        <div className="review-text-box">
          <div className="quote-mark">
          <svg viewBox="0 0 200 50"  version="1.1">
                    <title>“</title>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Product-Page-Copy-7" transform="translate(-921.000000, -3755.000000)">
                            <rect id="Rectangle-Copy-46" fillOpacity="0.25" fill="#E0F1F6" x="0" y="3600" width="1920" height="812"></rect>
                            <g id="Group-3" opacity="0.55" transform="translate(865.000000, 3700.000000)" fill="#D7D8DE">
                                <circle id="Oval-Copy-21" opacity="0.596981957" cx="54.5" cy="54.5" r="3.5"></circle>
                                <circle id="Oval-Copy-26" opacity="0.596981957" cx="54.5" cy="71.5" r="3.5"></circle>
                                <circle id="Oval-Copy-22" opacity="0.596981957" cx="71.5" cy="54.5" r="3.5"></circle>
                                <circle id="Oval-Copy-27" opacity="0.596981957" cx="71.5" cy="71.5" r="3.5"></circle>
                            </g>
                            <rect id="Rectangle-Copy-21" fill="#00A0C5" x="901" y="3735" width="272" height="373"></rect>
                            <text id="“" font-family="LucidaGrande, Lucida Grande" font-size="96" font-weight="normal" line-spacing="60" letter-spacing="-1.5" fill="#FFFFFF">
                                <tspan x="916" y="3845">“</tspan>
                            </text>
                        </g>
                    </g>
                </svg>
          </div>
          <div className="review-text-container">
             <div className="review-text">Finally, I found a mask that is comfortable and doesn't fall off my face.</div>
             <div className="reviewer-name">Bobby</div> 
          </div>
        </div>


        let instaSlide3 = 
        <div className="review-text-box">
        <div className="quote-mark">
        <svg viewBox="0 0 200 50" version="1.1">
                    <title>“</title>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Product-Page-Copy-7" transform="translate(-921.000000, -3755.000000)">
                            <rect id="Rectangle-Copy-46" fillOpacity="0.25" fill="#E0F1F6" x="0" y="3600" width="1920" height="812"></rect>
                            <g id="Group-3" opacity="0.55" transform="translate(865.000000, 3700.000000)" fill="#D7D8DE">
                                <circle id="Oval-Copy-21" opacity="0.596981957" cx="54.5" cy="54.5" r="3.5"></circle>
                                <circle id="Oval-Copy-26" opacity="0.596981957" cx="54.5" cy="71.5" r="3.5"></circle>
                                <circle id="Oval-Copy-22" opacity="0.596981957" cx="71.5" cy="54.5" r="3.5"></circle>
                                <circle id="Oval-Copy-27" opacity="0.596981957" cx="71.5" cy="71.5" r="3.5"></circle>
                            </g>
                            <rect id="Rectangle-Copy-21" fill="#00A0C5" x="901" y="3735" width="272" height="373"></rect>
                            <text id="“" font-family="LucidaGrande, Lucida Grande" font-size="96" font-weight="normal" line-spacing="60" letter-spacing="-1.5" fill="#FFFFFF">
                                <tspan x="916" y="3845">“</tspan>
                            </text>
                        </g>
                    </g>
                </svg>
        </div>
        <div className="review-text-container">
             <div className="review-text">Finally, I found a mask that is comfortable and doesn't fall off my face.</div>
             <div className="reviewer-name">Bobby</div> 
          </div>
        </div>




    return(

    

          <div className="insta-container">
         
         {/* slider */}
        <div className="insta-slider">
        <div className="insta-sliding">
         <Slider  dotsVal={true} arrowsVal={false} slide1={instaSlide1} slide2={instaSlide2} slide3={instaSlide3}/>
         </div>
         </div>  
        
         
         {/* instagram images */}

         
         <div className="bottom-left-img">
         <Link to="/">
         <img src={bottomleftimg} alt="instagram-image" className="" />
         </Link>
         </div> 
        


        
         <div className="top-right-img">
          <Link to="/">  
             <img src={toprightimg}  alt="instagram-image" className="" />
          </Link>
         </div>
         

         
         <div className="bottom-right-img">
           <Link to="/"> 
             <img src={bottomrightimg} alt="instagram-image" className="" />
           </Link>
         </div>
         

         
    </div>  

    
    )
}




Instafeed.defaultProps = {
}

Instafeed.propTypes = {
}




export default Instafeed
