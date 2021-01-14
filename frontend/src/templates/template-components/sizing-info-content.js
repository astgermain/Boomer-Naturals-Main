import React from "react"
import "../../styles/product-template.css"

const SizingContent = ({ ProductSizes, pageContext }) => {
  const productType = pageContext.node.productType
  //add product to switch statement
  const SwitchingSizingInfo = () => {
    switch (productType) {
//Apparel
      case "Face Cover":
        return (
          <div>
            <table>
            <tbody>
              <tr>
                <th>Sizes</th>
                <th>W</th>
                <th>H</th>
              </tr>
            </tbody>
            </table>
          <div className="sizing-image-container">
            <div className="sizes-w-h-flex">
              <ul>
                {ProductSizes.Mask.Sizes.map(e => {
                  return <li key={e}>{e}</li>
                })}
              </ul>
              <ul>
                {ProductSizes.Mask.W.map(e => {
                  return <li key={e}>{e}</li>
                })}
              </ul>
              <ul>
                {ProductSizes.Mask.H.map(e => {
                  return <li key={e}>{e}</li>
                })}
              </ul>
            </div>

            <div className="image-text-grid measure-text">
              <img
                src={ProductSizes.Mask.Image}
                alt={ProductSizes.Mask.ImageText}
              />
              <span>{ProductSizes.Mask.Name} are measured</span>
              <span className="light-blue">
                {ProductSizes.Mask.Wmeasured}
              </span>
              <span className="dark-blue">{ProductSizes.Mask.Hmeasured}</span>
            </div>
          </div>
          </div>
        )
      case "Neck Gaiter":
        return (
          <div>
            <table>
            <tbody>
              <tr>
                <th>Sizes</th>
                <th>W</th>
                <th>H</th>
              </tr>
            </tbody>
            </table>
            <div className="sizing-image-container">
              <div className="sizes-w-h-flex">
                <ul>
                  {ProductSizes.Gaiter.Sizes.map(e => {
                    return <li key={e}>{e}</li>
                  })}
                </ul>
                <ul>
                  {ProductSizes.Gaiter.W.map(e => {
                    return <li key={e}>{e}</li>
                  })}
                </ul>
                <ul>
                  {ProductSizes.Gaiter.H.map(e => {
                    return <li key={e}>{e}</li>
                  })}
                </ul>
              </div>

              <div className="image-text-grid measure-text">
                <img
                  src={ProductSizes.Gaiter.Image}
                  alt={ProductSizes.Gaiter.ImageText}
                />
                <span>{ProductSizes.Gaiter.Name} are measured</span>
                <span className="light-blue">
                  {ProductSizes.Gaiter.Wmeasured}
                </span>
                <span className="dark-blue">
                  {ProductSizes.Gaiter.Hmeasured}
                </span>
              </div>
            </div>
          </div>
        )
      case "Shield Cover":
        return (
          <div>
            <table>
            <tbody>
              <tr>
                <th>Sizes</th>
                <th>W</th>
                <th>H</th>
              </tr>
            </tbody>
            </table>
          <div className="sizing-image-container">
            <div className="sizes-w-h-flex">
              <ul>
                {ProductSizes.Shield.Sizes.map(e => {
                  return <li key={e}>{e}</li>
                })}
              </ul>
              <ul>
                {ProductSizes.Shield.W.map(e => {
                  return <li key={e}>{e}</li>
                })}
              </ul>
              <ul>
                {ProductSizes.Shield.H.map(e => {
                  return <li key={e}>{e}</li>
                })}
              </ul>
            </div>

            <div className="image-text-grid measure-text">
              <img
                src={ProductSizes.Shield.Image}
                alt={ProductSizes.Shield.ImageText}
              />
              <span>{ProductSizes.Shield.Name} are measured</span>
              <span className="light-blue">
                {ProductSizes.Shield.Wmeasured}
              </span>
              <span className="dark-blue">{ProductSizes.Shield.Hmeasured}</span>
            </div>
          </div>
          </div>
        )
      case "Socks":
        return <div>sock size </div>
//Beauty
      case "Boom Boom Libido Supplement":
        return (
          <div>
            <span>Sizes</span>
          <div className="sizing-image-container">
            <div className="sizes-w-h-flex">
              <ul>
                {ProductSizes.BoomBoom.Sizes.map(e => {
                  return <li key={e}>{e}</li>
                })}
              </ul>
            </div>
          </div>
          </div>
        )
        case "Boom Lashes":
          return (
            <div>
              <span>Sizes</span>
            <div className="sizing-image-container">
              <div className="sizes-w-h-flex">
                <ul>
                  {ProductSizes.BoomLashes.Sizes.map(e => {
                    return <li key={e}>{e}</li>
                  })}
                </ul>
              </div>
            </div>
            </div>
          )
          case "Beauty Creams":
            return (
              <div>
                <span>Sizes</span>
              <div className="sizing-image-container">
                <div className="sizes-w-h-flex">
                  <ul>
                    {ProductSizes.BeautyCreams.Sizes.map(e => {
                      return <li key={e}>{e}</li>
                    })}
                  </ul>
                </div>
              </div>
              </div>
            )
            case "Beauty Facial Mask":
              return (
                <div>
                  <span>Sizes</span>
                <div className="sizing-image-container">
                  <div className="sizes-w-h-flex">
                    <ul>
                      {ProductSizes.BeautyFacialMask.Sizes.map(e => {
                        return <li key={e}>{e}</li>
                      })}
                    </ul>
                  </div>
                </div>
                </div>
              )
              case "Beauty Eye Mask":
                return (
                  <div>
                    <span>Sizes</span>
                  <div className="sizing-image-container">
                    <div className="sizes-w-h-flex">
                      <ul>
                        {ProductSizes.BeautyEyeMask.Sizes.map(e => {
                          return <li key={e}>{e}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                  </div>
                )
                case "Beauty Facial Pads":
                  return (
                    <div>
                      <span>Sizes</span>
                    <div className="sizing-image-container">
                      <div className="sizes-w-h-flex">
                        <ul>
                          {ProductSizes.BeautyFacialPads.Sizes.map(e => {
                            return <li key={e}>{e}</li>
                          })}
                        </ul>
                      </div>
                    </div>
                    </div>
                  )
                case "Beauty Cleanser":
                  return (
                    <div>
                      <span>Sizes</span>
                    <div className="sizing-image-container">
                      <div className="sizes-w-h-flex">
                        <ul>
                          {ProductSizes.BeautyCleanser.Sizes.map(e => {
                            return <li key={e}>{e}</li>
                          })}
                        </ul>
                      </div>
                    </div>
                    </div>
                  )
                  case "Sunscreen":
                    return (
                      <div>
                        <span>Sizes</span>
                      <div className="sizing-image-container">
                        <div className="sizes-w-h-flex">
                          <ul>
                            {ProductSizes.SunScreen.Sizes.map(e => {
                              return <li key={e}>{e}</li>
                            })}
                          </ul>
                        </div>
                      </div>
                      </div>
                    )
                    case "Lip Balm":
                      return (
                        <div>
                          <span>Sizes</span>
                        <div className="sizing-image-container">
                          <div className="sizes-w-h-flex">
                            <ul>
                              {ProductSizes.LipBalm.Sizes.map(e => {
                                return <li key={e}>{e}</li>
                              })}
                            </ul>
                          </div>
                        </div>
                        </div>
                      )
                      case "Boomer Botanics":
                        return (
                          <div>
                            <span>Sizes</span>
                          <div className="sizing-image-container">
                            <div className="sizes-w-h-flex">
                              <ul>
                                {ProductSizes.BoomerBotanics.Sizes.map(e => {
                                  return <li key={e}>{e}</li>
                                })}
                              </ul>
                            </div>
                          </div>
                          </div>
                        )
                        case "Boomer Botanics Gummies":
                          return (
                            <div>
                              <span>Sizes</span>
                            <div className="sizing-image-container">
                              <div className="sizes-w-h-flex">
                                <ul>
                                  {ProductSizes.BoomerBotanicsGummies.Sizes.map(e => {
                                    return <li key={e}>{e}</li>
                                  })}
                                </ul>
                              </div>
                            </div>
                            </div>
                          )
//Food
      case "Socks":
        return <div>sock size </div>
//Home
      case "Pillow":
        return <div>Pillow size</div>
      case "Sheets":
        return <div>Sheet size</div>
//PPE
      case "Hand Sanitizer":
        return(
          <div>
            <table>
            <tbody>
              <tr>
                <th>Sizes</th>
              </tr>
            </tbody>
            </table>
          <div className="sizing-image-container">
            <div className="sizes-w-h-flex">
              <ul>
                {ProductSizes.HandSanitizer.Sizes.map(e => {
                  return <li key={e}>{e}</li>
                })}
              </ul>
            </div>
          </div>
          </div>
        )
      default:
        return <div>No Sizing Available</div>
    }
  }

  return (
    <div className="sizecontainer">
      <SwitchingSizingInfo />
    </div>
  )
}

export default SizingContent
