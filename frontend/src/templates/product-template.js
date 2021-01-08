
import React, { useState, useContext } from "react"
import { Link, graphql } from "gatsby"


import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/product-template.css"
import safecheckoutlogo from "../../content/assets/safecheckoutlogo.png"
import HeaderTrail from "./template-components/header-trail"
import ImageDisplay from "./template-components/product-image-display"
import errorImg from "../../content/assets/errorImg.png"
import SuggestedProducts from "./template-components/suggested-products"

const ProductTemplate = ({ data, pageContext, location }) => {
  // const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = pageContext
  console.log(pageContext)
  let x = () => {
    try {
      return [
        pageContext.node.images[0].originalSrc,
        pageContext.node.images[0].altText,
      ]
    } catch {
      return [errorImg, "error image"]
    }
  }
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [mainImage, setMainImage] = useState(x()[0])
  const [mainImageAlt, setMainImageAlt] = useState(x()[1])
  const [selectedVariantId, setSelectedVariantId] = useState('')
  const [upsellShow, setupsellShow] = useState(false);
  const [bottomTabs, setbottomTabs] = useState('description');


  const { handle, title, description, descriptionHtml } = pageContext.node

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
    ) {
      return (
        "$" + priceFormat(pageContext.node.priceRange.minVariantPrice.amount)
      )
    } else {
      return (
        "From $",
        priceFormat(pageContext.node.priceRange.minVariantPrice.amount)
      )
    }
  }
  //product name
  const ProductName = pageContext.node.title
  const FirstWordProductName = ProductName.split(" ")[0]
  const RestOfProductName = ProductName.substr(ProductName.indexOf(" ") + 1)
  const ProductNameAdjust = () => {
    if (FirstWordProductName === "Kids" || FirstWordProductName === "Adult") {
      return (
        <div className="name-adjust-container">
          <span>{FirstWordProductName}</span>
          <div className="product-name name-adjust">{RestOfProductName}</div>
        </div>
      )
    } else {
      return <div className="product-name">{ProductName}</div>
    }
  }

  //product options

  let mainArray = []
  let dataSet = new Set()
  let colorSet = new Set()
  let tempHolder = []
  let start = true
  pageContext.node.variants.forEach(variant => {
    if (variant.availableForSale) {
      variant.selectedOptions.forEach(option => {
        if (option.name === "Color") {
          if (!colorSet.has(option.value)) {
            colorSet.add(option.value)
            if (!start) {
              let tmp = []
              tempHolder.forEach(val => {
                tmp.push(val)
              })
              let options = new Set()
              dataSet.forEach(value => {
                options.add(value)
              })
              tmp.push(options)
              mainArray.push(tmp)
              tempHolder = []
            } else {
              start = false
            }
            dataSet.clear()
            dataSet.add(option.value)
          }
        } else {
          dataSet.add(option.value)
        }
      })
      tempHolder.push(variant)
    }
  })
  let tSet = []
  tempHolder.forEach(val => {
    tSet.push(val)
  })
  let rSet = new Set()
  dataSet.forEach(value => {
    rSet.add(value)
  })
  tSet.push(rSet)
  mainArray.push(tSet)

  let generateVariantThumbs = variantData => {
    return variantData.map(data => {
      try {
        return (
          <button
            className="color-options"
            onClick={() => handleVariantSelection(data)}
          >
            <img
              src={data[0].image.originalSrc}
              className="variant-thumb-template"
              alt={data[0].image.altText}
            />
          </button>
        )
      } catch {
        return (
          <button
            className="variant-thumb"
            onClick={() => handleVariantSelection(data)}
          >
            <img src={errorImg} className="variant-thumb" alt="error image" />
          </button>
        )
      }
    })
  }
  let variantThumbs = generateVariantThumbs(mainArray)
  let handleVariantSelection = data => {
    // sets color value to state from what user selects
    setSelectedColor(data[0].selectedOptions[0].value)
    setSelectedVariantId(data[0].id.split("Shopify__ProductVariant__").join(""))
    try {
      setMainImage(data[0].image.originalSrc)
    } catch {
      setMainImage(errorImg)
    }
    try {
      setMainImageAlt(data[0].image.altText)
    } catch {
      setMainImageAlt("error image")
    }
  }

  const FirstOptionName = pageContext.node.options[0].name
  const SecondOptionName = pageContext.node.options[1].name
  const FirstOptionOptions = pageContext.node.variants
  const SecondOptionOptions = pageContext.node.options[1].values
  //size
  const generateOptOptions2 = SecondOptionOptions.map(sizeOption => {
    return <button className="size-options">{sizeOption}</button>
  })

  //quantity
  let handleAdd = () => {
    setQuantity(quantity + 1)
  }
  let handleSub = () => {
    if (quantity > 1) return setQuantity(quantity - 1)
  }
  //addtocart

  return (
    <Layout location={location}>
      {/* <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            /> */}
      <HeaderTrail data={data} pageContext={pageContext} location={location} />

      <div className="product-container-template">
        <ImageDisplay data={data} pageContext={pageContext} mainImage={mainImage} mainImageAlt={mainImageAlt}/>


        <div className="right-side-container">
          <div className="product-price">
            <FormattedPrice />
          </div>
          <ProductNameAdjust />

          <div>{SecondOptionName}</div>
          <div className="size-option-container">{generateOptOptions2}</div>
          <div>{FirstOptionName}</div>
          <div className="color-options-container">{variantThumbs}</div>

          <span>Quantity</span>
          <div className="quantity-addcart-container">
            <div className="quantityButtonTemplate">
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
            <button className="add-to-cart add-cart-template">
              Add to Cart
            </button>
          </div>

          <div className="safe-checkout-container">
            <img
              src={safecheckoutlogo}
              alt="Guaranteed Safe Checkout"
              className="safecheckoutlogo"
            />
          </div>
        </div>
      </div>


      <div className="mask-description">
        <div className="bottomtab-container">
          <ul>
              <li className="bottomtab-button active" onClick={() => setbottomTabs("description")}>
                                                    <Link className="">
                                                      <span className="">Description</span>
                                                    </Link>
                                                  </li>

                                                  <li className="bottomtab-button" onClick={() => setbottomTabs("shipping")}>
                                                    <Link className="">
                                                      <span className="">Shipping</span>
                                                    </Link>
                                                  </li>

                                                  <li className="bottomtab-button" onClick={() => setbottomTabs("sizing")}>
                                                    <Link className="">
                                                      <span className="">Sizing Info</span>
                                                    </Link>
                                                  </li>

                                                  <li className="bottomtab-button" onClick={() => setbottomTabs("review")}>
                                                    <Link className="">
                                                      <span className="">Review</span>
                                                    </Link>
                </li>
          </ul>
          <div className="lineline"></div>
                  
        </div>
        </div>

        <div className="bottomtab-content">
          {bottomTabs === "description" &&  
                  <section
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  itemProp="articleBody"
                />}
                {bottomTabs === "shipping" &&  
                <div>
                   <p>Most orders ship in 1-3 Business Days. We appreciate your business, and we fulfill and ship orders as quickly as we can. Please be patient and know that we strive to ship your order in a timely manner. Please feel free to contact us to check on your order. </p>
                  <p>CONTACT US:<br/>
                      For questions about an order, information about our privacy practices, or if you have a concern or complaint, please contact us by email at info@boomernaturals.com or by phone (702) 960-4843, or by mail at the following:<br/>
                      Boomer Naturals<br/>
                      8670 W Cheyenne Ave #120, Las Vegas, NV 89129, United States<br/>
                      (702) 960-4843
                  </p>
                </div>
                 }
                 {bottomTabs === "sizing" &&  
                  <section
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  itemProp="articleBody"
                />}
                {bottomTabs === "review" &&  
                  <section
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  itemProp="articleBody"
                />}
        </div>
          

                  
                  
  

      <SuggestedProducts data={data}/>
      


    </Layout>
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
