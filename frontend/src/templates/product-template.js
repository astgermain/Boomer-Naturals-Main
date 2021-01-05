import React, {useState, useContext} from "react"
import { Link, graphql} from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/product-template.css"
import HeaderTrail from "./template-components/header-trail"
import ImageDisplay from "./template-components/product-image-display"

const ProductTemplate = ({ data, pageContext, location }) => {
  // const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = pageContext
  const [quantity, setQuantity] = useState(1)
  const { handle, title, description, descriptionHtml } = pageContext.node
  
  console.log(pageContext.node)

//price
  let priceFormat = price => {
    price *= 100
    price = price.toString()
    if (price.length < 3) {
      price = "0." + price
    } else {
      price =
        price.slice(0, price.length - 2) + "." + price.slice(price.length - 2)
    }
    return price
  }

  let FormattedPrice = () => {
    if (
      pageContext.node.priceRange.minVariantPrice.amount ===
      pageContext.node.priceRange.maxVariantPrice.amount
    ){
      return('$'+priceFormat(pageContext.node.priceRange.minVariantPrice.amount))
    }
      else{
        return('From $', priceFormat(pageContext.node.priceRange.minVariantPrice.amount))
      }
  }
  //product options
  const FirstOptionName = pageContext.node.options[0].name
  const SecondOptionName = pageContext.node.options[1].name
  const FirstOptionOptions = pageContext.node.options[0].values
  const SecondOptionOptions = pageContext.node.options[1].values


//quantity
let handleAdd = () => {
  setQuantity(quantity + 1)
}
let handleSub = () => {
  if (quantity > 1) return setQuantity(quantity - 1)
}
//addtocart

  return (
    <div>
      <Header />
      {/* <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            /> */}
      <HeaderTrail />

      <div className="product-container">
        <ImageDisplay data={data} />

        <div className="right-side-container">
        <div className='product-price'><FormattedPrice/></div>
        

        <div>{SecondOptionName}</div>
        <div>{SecondOptionOptions}</div>
        <div>{FirstOptionName}</div>
        <div>{FirstOptionOptions}</div>


        <span>Quantity</span>
        <div className="quantity-addcart-container">
          <div className="quantityButton">
              <div
                role="button"
                tabIndex={0}
                className="quantityButtonPartR"
                onClick={handleSub}
              >
                <span>-</span>
              </div>
              <span>{quantity}</span>
              <div
                role="button"
                tabIndex={0}
                className="quantityButtonPartL"
                onClick={handleAdd}
              >
                <span>+</span>
              </div>
            </div>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        
        </div>
      </div>

      <section
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        itemProp="articleBody"
      />

      <Footer />
    </div>
  )
}

export default ProductTemplate
//Yotpo reviews
// {
//   reviews: allYotpoProductReview {
//     nodes {
//       productIdentifier
//       score
//       sentiment
//       votesUp
//       votesDown
//       title
//       name
//       email
//       reviewerType
//       content
//     }
//   }

//   ratings: allYotpoProductBottomline {
//     nodes {
//       productIdentifier
//       totalReviews
//       score
//     }
//   }
// }
// export const pageQuery = graphql`
//   query PageBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     shopifyPage(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `
