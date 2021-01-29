import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

const NotFoundPage = (props) => {
  console.log("404 Props", props)
  let html =
    '<meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8">\n<h1>What is Boomer Botanics?</h1>\n<p>We are proud to launch our all-natural, doctor-formulated Boomer Botanics blend. Our powerful, proprietary formula is the first FDA-compliant alternative. This revolutionary breakthrough combines five natural and powerful ingredients that target the body’s endocannabinoid system (ECS) to ensure it is functioning at its prime. And a healthy, fully-supported ECS means a stronger immune system, better pain management, more restful sleep, less fatigue, and so much more!</p>\n<p>Discovered in the 1980s, the ECS is similar to the check engine light on your vehicle. When you are driving and something is not quite right, the car sends a signal to turn on this light so you can look under the hood and find the problem.</p>\n<p>Similarly, the ECS is working behind the scenes with a multitude of cannabinoids, receptors, and enzymes to bring balance to the body and keep all systems running smoothly. When pain, inflammation, or other factors threaten to disrupt the balance, the ECS sends a signal to the brain "a check engine light, if you will", to correct the problem. The body then goes to work to restore balance.</p>\n<p>But what happens when the body is deficient of the cannabinoids and enzymes needed to help this system function at its prime?</p>\n<p>Boomer Botanics features natural ingredients that work with the ECS, to enhance its productivity and functionality. And targets all of the known system receptors!</p>\n<meta charset="utf-8">\n<h2>All-Natural, Plant-Based Solution </h2>\n<p><span>Our Boomer Botanics formula works with the endocannabinoid system and may have a positive effect on many bodily functions, including:</span></p>\n<ul>\n<li><span>Immune system function</span></li>\n<li><span>Your sleep/wake cycles</span></li>\n<li><span>Emotional regulation</span></li>\n</ul>\n<p> </p>\n<p><span>Featuring a blend of powerhouse ingredients including rosemary extract, cacao extract, black pepper extract, and other natural herbs, Boomer Botanics:</span></p>\n<ul>\n<li><span>Support the immune system</span></li>\n<li><span>Reduce pain and inflammation</span></li>\n<li>Reduce stress</li>\n<li>Improves absentmindedness and helps prevent mild memory loss</li>\n<li>Alleviates mild mood swings</li>\n<li><span>Help support lung and respiratory function</span></li>\n<li><span>Reduce the appearance of blemishes</span></li>\n<li><span>Help maintain cholesterol levels already within the normal range</span></li>\n<li><span>Help maintain proper joint function</span></li>\n<li>Help maintain healthy blood sugar levels</li>\n<li><span>Aid in the overall process of aging</span></li>\n</ul>'

  /* 
  use shopify page handle value to generate slug 
  https://www.gatsbyjs.com/tutorial/part-seven
  */

  return (
    <div>
      <Header />
      <section className="error-404">
      <div id="content-wrapper-404">
      <div className="text-404">404</div>
			<h2 className="page-title-404">This page cannot be found.</h2>
			<a className="backhome404-btn" href="/" rel="home">Back to Home</a>
      </div>
    </section>
      <Footer />
    </div>
  )
}

export default NotFoundPage


