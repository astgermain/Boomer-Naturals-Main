import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import vietnamheader from "../../content/assets/vietnamheader.jpg"
import vietnamheadermobile from "../../content/assets/vietnamheadermobile.jpg"
import vietnammap from "../../content/assets/vietnammap.png"
import vietnamman from "../../content/assets/vietnamman.jpg"
import vietnammen from "../../content/assets/vietnammen.jpg"
import vietnamgraph from "../../content/assets/vietnamgraph.png"
import "../styles/vietnam.css"

const Vietnam = () => {
    


    return ( 
        <section>
        <Header/>
            {/* banners */}
          <div className="v-main-banner">
              <img className='vietnam-banner v-banner' src={vietnamheader} alt="Boomer Naturals brings better face covers to market"/>
              <img className='vietnam-mobile-banner v-banner' style={{display: "none"}} src={vietnamheadermobile} alt="Boomer Naturals brings better face covers to market"/>                                                                                                                         
              <a><button className="v-shopnow-btn v-absolute">Shop Now</button></a>
          </div> 

          {/* content */}

                <div className="v-marginme">
                    <div className="v-flex-me v-grid-me-top v-desktoptop-text">
                        <h4 className="firsth4">Boomer Naturals is<br/> Proud to Partner with<br/> South Vietnamese<br/> Manufacturer of<br/> Premium Silver-Infused<br/> Reusable Face Covers</h4>
                        <p>In early April, as concern grew about<br/> the pending COVID-19 pandemic,<br/> Boomer Naturals secured a<br/> relationship with a trusted South<br/> Vietnamese manufacturer of premium,<br/> Silver-Infused Face Covers.<br/> Because we acted quickly, we were<br/> able to secure large quantities of<br/> reusable 30-Day Face Covers to offer<br/> our customers and launch a donation<br/> program to give Face Covers to many<br/> nonprofits and charities in need.</p>
                    </div>

                    <div className="v-mobiletop-text" style={{display:"none"}}>
                    <h4 className="v-mobiletop-heading">Boomer Naturals is<br/> Proud to Partner with<br/> South Vietnamese<br/> Manufacturer of<br/> Premium Silver-Infused<br/> Reusable Face Covers</h4>
                    <p className="v-mobiletop-p">In early April, as concern grew about<br/> the pending COVID-19 pandemic,<br/> Boomer Naturals secured a<br/> relationship with a trusted South<br/> Vietnamese manufacturer of premium,<br/> Silver-Infused Face Covers.<br/> Because we acted quickly, we were<br/> able to secure large quantities of<br/> reusable 30-Day Face Covers to offer<br/> our customers and launch a donation<br/> program to give Face Covers to many<br/> nonprofits and charities in need.</p>
                    </div>
                

            {/* topic buttons */}

                    <h4 className="v-text-center">Select a Topic:</h4>

                <div className="v-flex-me v-grid-me">
                <div>
                    <a href="#why-face-masks-from-vietnam"><button className="v-topic-btn">Why Face Covers from Vietnam?</button></a>
                </div>
                <div>
                    <a href="#why-few-cases"><button className="v-topic-btn">Why has Vietnam Had<br/> So Few Cases?</button></a>
                </div>

                <div>
                    <a href="#no-filter-needed"><button className="v-topic-btn">No Filter Needed</button></a>
                </div>
                <div>
                    <a href="#science-behind"><button className="v-topic-btn">The Science Behind the Covers -<br/> What is Silver-Infused?</button></a> 
                </div>
                </div>
                <div className="v-grid-me-single">
                    <a href="#more-protection"><button className="v-topic-btn" style={{padding:"20px!important"}}>Boomer Naturals' Silver-Infused<br/> Reusable Face Covers Offer More<br/> Protection</button></a>
                </div>
      
            {/* why vietnam face cover section island */}
            <a id="why-face-masks-from-vietnam">
                 <div style={{margintop:"70px"}}></div>
            </a>

            <div>
            <div className="v-island-margin">
		        <img className="v-island" src={vietnammap} alt="Vietnam Map"/>
            </div>
            
            <h3 className="v-island-heading">Why Face Covers<br/> from Vietnam?</h3>
               <p className="v-island-desktop">While the pandemic surged in other countries,<br/> Vietnam took immediate measures to limit, prevent,<br/> and control the spread of the virus. Crediting the<br/> population’s willingness to swiftly commit to<br/> necessary health precautions - including the use<br/> of PPE such as protective face covers - Vietnam<br/> has avoided the soaring numbers of positive<br/> cases - and deaths - that have devastated<br/> other countries around the world.</p>
               <p className="v-island-mobile" style={{display:"none"}}>While the pandemic surged in other countries, Vietnam took immediate measures to limit, prevent, and control the spread of the virus. Crediting the population’s willingness to swiftly commit to necessary health precautions - including the use of PPE such as protective face covers - Vietnam has avoided the soaring numbers of positive cases - and deaths - that have devastated other countries around the world.</p>
               <p className="v-island-p">With a population of 97 million, and<br/> fewer than 500 total cases of<br/> COVID-19, Vietnam is clearly doing<br/> something right.</p>

            </div>

            {/* why few cases section */}
                <a id="why-few-cases">
                <div style={{margintop:"50px"}}></div>
                </a>	
                <h3 className="v-text-center" style={{paddingtop:"5%"}}>Why Has Vietnam<br/> Had So Few Cases?</h3>
                <div style={{textalign:"center", display:"flex", justifyContent:"center"}}>	
                <img className="v-yellowman-img" src={vietnamman} alt="Vietnam man sitting by the water"/>
                    <ul className="v-yellowman">
                        <li className="v-li-size">Face Cover compliance and social distancing accepted by the public</li>
                        <li className="v-li-size">Silver-Infused technology in face covers offer superior protection</li>
                        <li className="v-li-size">A well-developed health system with a targeted, aggressive approach to testing</li>
                        <li className="v-li-size">Meticulous content tracing and public willingness to quarantine</li>
                    </ul>
                </div>

            {/* video section */}

                <a id="science-behind">
                <div style={{margintop:"60px"}}></div>
                </a>
            <h3 className="v-text-center">The Science Behind the Covers-<br/> What Is Silver-Infused?</h3>
            <div className="v-center-me">
                <p className="v-videop-desktop">Another contributing factor may be that Vietnam has perfected<br/> Silver-Infused Technology, white uses specially-charged fibers that<br/> hold properties and are engineered to block the<br/> spread of small particles.</p>
                <p className="v-videop-mobile" style={{display: "none"}}>Another contributing factor may be that Vietnam has perfected Silver-Infused Technology, white uses specially-charged fibers that hold  properties and are engineered to block the spread of small particles.</p>
            </div>

                <div className="v-flex-me v-video-mobile" style={{gap:"30px"}}>
                    <iframe className="vietnam-video" width="300" height="280" src="https://www.youtube.com/embed/7Y6ti2GZBQs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="v-desktop-p">The Silver-Infused fibers in our<br/> 30-Day Face Covers are<br/> engineered to help fight<br/> bacteria and provide better,<br/> more effective protection<br/> than regular cloth covers.<br/> Silver particles have a<br/> relatively large surface area,<br/> which increases their contact<br/> with bacteria or fungi - and<br/> therefore increases their<br/> antibacterial effect.</p>
                    <p className="v-mobile-p" style={{display:"none"}}>The Silver-Infused fibers in our 30-Day Face Covers are engineered to help fight bacteria and provide better, more effective protection regular cloth covers. Silver particles have a relatively large surface area, which increases their contact with bacteria or fungi - and therefore increases their antibacterial effect.</p>
                </div>
                <div className="v-center-me" style={{margintop:"20px"}}>
                    <p className="v-videop-last-desktop">Silvered medical textiles used in hospital settings have<br/> also shown promise in reducing bacterial transmission and<br/> contamination.
                    </p>
                    <p className="v-videop-last-mobile" style={{display:"none"}}>Silvered medical textiles used in hospital settings have also shown promise in reducing bacterial transmission and contamination.
                    </p>
                </div>

            {/* Men Walking Section */}
            <a id="no-filter-needed">
            <div style={{margintop:"70px"}}></div>
            </a>    
            <div className="v-flex-me v-walkingmen-container">

                        <img className="v-walkingmen-img" src={vietnammen} alt="Men walking together holding baskets of nano silver"/>


                    <div className="v-text-box" style={{margintop:"30px"}}>
                        <h3 style={{textalign:"left"}}>No Filter Needed</h3>
                        <p>The silver fibers are<br/> constantly at work killing bacteria<br/> and remain useful for up to 30<br/> washings. The material “provides a<br/> built-in filter,” according to Dr. Mary<br/> Clifton, an internal medicine doctor<br/> based in New York City. Dr. Clifton<br/> emphasized the added value of<br/> silver technology and how<br/> silver-infused face covers<br/> may be the most effective way to<br/> help protect the whole family. And<br/> because Boomer’s 30-Day Face<br/> Covers are reusable and washable,<br/> they are not only eco-friendly - but<br/> they are a more economical way to<br/> stay protected.</p>
                    </div>
                </div>



            {/* Graph Section */}
            <a id="more-protection">
            <div style={{margintop:"60px"}}></div>
            </a>    
            <h3 className="v-text-center">Boomer Naturals’ Silver-Infused Reusable<br/> Face Covers Offer More Protection</h3>

                <div className="v-circle-container">
                <div className="v-circle">
                    <img className="v-circle-img" src={vietnamgraph} alt="Pie Graph showing 65% cotton and 35% polyester"/>
                </div>
                
                <div>
                <p className="v-circlep-desktop" style={{paddingtop:"15px"}}>Our face covers are comfortable enough for<br/> all-day wear, and our premium<br/> 65% cotton/35% polyester blend with<br/> Silver is highly effective at<br/> preventing droplets from<br/> spreading. With three different<br/> layers, including an inner<br/> hydrophilic layer, a middle<br/> filtering layer, and an outer<br/> hydrophobic layer, our<br/> Silver-infused Face Covers<br/> offer exceptional protection! </p>
                <p className="v-circlep-mobile" style={{paddingtop:"15px", display:"none"}}>Our face covers are comfortable enough for all-day wear, and our premium 65% cotton/35% polyester blend with Silver is highly effective at preventing droplets from spreading. With three different layers, including an inner hydrophilic layer, a middle filtering layer, and an outer hydrophobic layer, our Silver-infused Face Covers offer exceptional protection! </p>
                </div> 
                
                <div style={{paddingtop:"15px"}}>
                            <p className="v-blueline-text">Now available with sewn-in nose<br/> pieces and adjustable ear loops for<br/> added comfort, our face covers with<br/>silver technology are your smart<br/> choice to stay protected.</p>	
                </div>
                
                    
                </div>

    
        </div>
          {/* bottom shop now */}
          <div className="container-btn-shop-now">
                <a><button className="v-shopnow-btn">Shop Now</button></a>
          </div>

            

          <Footer/>  
          </section>
     );
}
 
export default Vietnam;