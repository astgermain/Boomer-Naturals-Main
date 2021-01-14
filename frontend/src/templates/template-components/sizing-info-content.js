import React from "react"
import "../../styles/product-template.css"

const SizingContent = ({ ProductSizes, pageContext }) => {
  const productType = pageContext.node.productType

  const SwitchingSizingInfo = () => {
    switch (productType) {
      case "Face Cover":
        return (
          <div className="sizing-image-container">
            <div className="sizes-w-h-flex">
            <ul >
            {ProductSizes.Mask.Sizes.map((e) => {return <li key={e}>{e}</li>})}
            </ul>
            <ul >
            {ProductSizes.Mask.W.map((e) => {return <li key={e}>{e}</li>})}
            </ul>
            <ul >
            {ProductSizes.Mask.H.map((e) => {return <li key={e}>{e}</li>})}
            </ul>
            </div>

            <div className="image-text-grid">
              <img
                src={ProductSizes.Mask.Image}
                alt={ProductSizes.Mask.ImageText}
              />
              <span>{ProductSizes.Mask.ImageText}</span>
            </div>
          </div>
        )
      case "Neck Gaiter":
        return (
          <div className="sizing-image-container">
            <div className="sizes-w-h-flex">
            <ul >
            {ProductSizes.Gaiter.Sizes.map((e) => {return <li key={e}>{e}</li>})}
            </ul>
            <ul >
            {ProductSizes.Gaiter.W.map((e) => {return <li key={e}>{e}</li>})}
            </ul>
            <ul >
            {ProductSizes.Gaiter.H.map((e) => {return <li key={e}>{e}</li>})}
            </ul>
            </div>

            <div className="image-text-grid">
              <img
                src={ProductSizes.Mask.Image}
                alt={ProductSizes.Gaiter.ImageText}
              />
              <span>{ProductSizes.Gaiter.ImageText}</span>
            </div>
          </div>
        )
      case "Shield Cover":
        return <div className="sizing-image-container"></div>
      case "Pillow":
        return <div>Pillow size</div>
      case "Sheets":
        return <div>Sheet size</div>
      case "Socks":
        return <div>sock size </div>
      default:
        return <div>No Sizing Available</div>
    }
  }

  return (
    <div className="sizecontainer">
      <table>
  <tr>
    <th>Sizes</th>
    <th>W</th>
    <th>H</th>
  </tr>
  </table>
      <SwitchingSizingInfo />


    </div>
  )
}

export default SizingContent
