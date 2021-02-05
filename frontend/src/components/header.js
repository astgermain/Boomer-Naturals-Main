/**
 * Header Component
 */

import React, { useState, useContext } from "react"
import StoreContext from "../util/store"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../../content/assets/bnlogoheader.png"
import Search from "./search"
import Hamburger from "./hamburger-menu/hamburger"

const Header = ({ title, data }) => {

  const [hamMenu, setHamMenu] = useState(false)
  const [clickSearch, setClickedSearch] = useState(false)
  const { toggleCart, checkout } = useContext(StoreContext)

  const logoAlt = title

  const ITEMS_IN_CART = checkout.lineItems.length

  const handleMenuClick = () => setHamMenu(!hamMenu)
  const handleSearchClick = () => setClickedSearch(!clickSearch)

  const handleShoppingCartClick = () => toggleCart()

  return (
    <header className="global-header">
      <section className="header-container">
        <div className="mobile-header-container">
          <div className="header-icons">
            {/* Search Icon SVG */}
            <Link to="/">
              <div
                role="button"
                tabIndex={0}
                onKeyDown={handleSearchClick}
                onClick={handleSearchClick}
                className="header-icon search-icon"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>icon</title>
                  <defs>
                    <rect
                      id="path-1"
                      x="0"
                      y="0"
                      width="1920"
                      height="141"
                    ></rect>
                    <filter
                      x="-0.1%"
                      y="-1.1%"
                      width="100.2%"
                      height="102.1%"
                      filterUnits="objectBoundingBox"
                      id="filter-2"
                    >
                      <feOffset
                        dx="0"
                        dy="0"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      ></feOffset>
                      <feGaussianBlur
                        stdDeviation="0.5"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      ></feGaussianBlur>
                      <feColorMatrix
                        values="0 0 0 0 0.149019608   0 0 0 0 0.160784314   0 0 0 0 0.243137255  0 0 0 0.5 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                      ></feColorMatrix>
                    </filter>
                  </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Product-Page-Copy-7"
                      transform="translate(-1394.000000, -61.000000)"
                    >
                      <g id="Rectangle">
                        <use
                          fill="black"
                          fillOpacity="1"
                          filter="url(#filter-2)"
                        ></use>
                        <use fill="#FFFFFF" fillRule="evenodd"></use>
                      </g>
                      <g
                        id="Group-23"
                        transform="translate(1394.000000, 60.000000)"
                        fill="#26293E"
                      >
                        <path
                          d="M8,1 C12.418278,1 16,4.581722 16,9 C16,10.8482015 15.3732643,12.550021 14.3207287,13.9045228 L19.7071068,19.2928932 L18.2928932,20.7071068 L12.9045228,15.3207287 C11.550021,16.3732643 9.84820151,17 8,17 C3.581722,17 -8.50874926e-13,13.418278 -8.50874926e-13,9 C-8.50874926e-13,4.581722 3.581722,1 8,1 Z M8,3 C4.6862915,3 2,5.6862915 2,9 C2,12.3137085 4.6862915,15 8,15 C11.3137085,15 14,12.3137085 14,9 C14,5.6862915 11.3137085,3 8,3 Z"
                          id="icon"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
            {/* End Search Icon SVG */}

            {/* Account Icon SVG */}
            <Link className="header-icon" to="/">
              <div className="header-icon-link account-icon">
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 22 22"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>icon</title>
                  <defs>
                    <rect
                      id="path-1"
                      x="0"
                      y="0"
                      width="1920"
                      height="141"
                    ></rect>
                    <filter
                      x="-0.1%"
                      y="-1.1%"
                      width="100.2%"
                      height="102.1%"
                      filterUnits="objectBoundingBox"
                      id="filter-2"
                    >
                      <feOffset
                        dx="0"
                        dy="0"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      ></feOffset>
                      <feGaussianBlur
                        stdDeviation="0.5"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      ></feGaussianBlur>
                      <feColorMatrix
                        values="0 0 0 0 0.149019608   0 0 0 0 0.160784314   0 0 0 0 0.243137255  0 0 0 0.5 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                      ></feColorMatrix>
                    </filter>
                  </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Product-Page-Copy-7"
                      transform="translate(-1487.000000, -60.000000)"
                    >
                      <g id="Rectangle">
                        <use
                          fill="black"
                          fillOpacity="1"
                          filter="url(#filter-2)"
                        ></use>
                        <use fill="#FFFFFF" fillRule="evenodd"></use>
                      </g>
                      <g
                        id="Group-23"
                        transform="translate(1394.000000, 60.000000)"
                        fill="#26293E"
                      >
                        <path
                          d="M104,0 C110.075132,0 115,4.92486775 115,11 C115,17.0751322 110.075132,22 104,22 C97.9248678,22 93,17.0751322 93,11 C93,4.92486775 97.9248678,0 104,0 Z M104,16 C100.430852,16 98.3282764,16.6872588 98.0353754,17.739557 C99.6239243,19.1464312 101.712281,20 104,20 C106.287719,20 108.376076,19.1464312 109.96397,17.7403948 C109.671724,16.6872588 107.569148,16 104,16 Z M104,2 C99.0294373,2 95,6.02943725 95,11 C95,12.9044252 95.5915087,14.6706961 96.6008274,16.1251142 C97.7265478,14.6379201 100.371011,14 104,14 C107.628989,14 110.273452,14.6379201 111.399116,16.1241447 C112.408491,14.6706961 113,12.9044252 113,11 C113,6.02943725 108.970563,2 104,2 Z M104,5 C106.414195,5 108,6.92157821 108,9.2 C108,12.479614 106.218086,14 104,14 C101.760864,14 100,12.4273743 100,9 C100,6.75575936 101.5791,5 104,5 Z M104,7 C102.733739,7 102,7.81582479 102,9 C102,11.2692568 102.818211,12 104,12 C105.177706,12 106,11.2983927 106,9.2 C106,7.95041736 105.215657,7 104,7 Z"
                          id="icon"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
            {/* End Account Icon SVG */}

            <Link className="header-logo-bn" to="/">
              <img src={logo} alt={logoAlt} className="header-logo" />
            </Link>

            {/* Shopping Icon SVG */}
            <Link className="shopping-icon" to="/">
              <div
                role="button"
                onClick={handleShoppingCartClick}
                onKeyDown={handleShoppingCartClick}
                tabIndex={0}
                className="header-icon">
                <svg
                  width="21px"
                  height="20px"
                  viewBox="0 0 21 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>icon</title>
                  <defs>
                    <rect
                      id="path-1"
                      x="0"
                      y="0"
                      width="1920"
                      height="141"
                    ></rect>
                    <filter
                      x="-0.1%"
                      y="-1.1%"
                      width="100.2%"
                      height="102.1%"
                      filterUnits="objectBoundingBox"
                      id="filter-2"
                    >
                      <feOffset
                        dx="0"
                        dy="0"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      ></feOffset>
                      <feGaussianBlur
                        stdDeviation="0.5"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      ></feGaussianBlur>
                      <feColorMatrix
                        values="0 0 0 0 0.149019608   0 0 0 0 0.160784314   0 0 0 0 0.243137255  0 0 0 0.5 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                      ></feColorMatrix>
                    </filter>
                  </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Product-Page-Copy-7"
                      transform="translate(-1440.000000, -61.000000)"
                    >
                      <g id="Rectangle">
                        <use
                          fill="black"
                          fillOpacity="1"
                          filter="url(#filter-2)"
                        ></use>
                        <use fill="#FFFFFF" fillRule="evenodd"></use>
                      </g>
                      <g
                        id="Group-23"
                        transform="translate(1394.000000, 60.000000)"
                        fill="#26293E"
                      >
                        <path
                          d="M46.3177095,1 C47.5592614,1 48.4561436,1.22422057 49.0248163,1.79289322 C49.3598659,2.12794284 49.6544489,2.56893407 49.8774658,3.06047595 C50.040153,3.02226023 50.2113563,3.00215745 50.3889566,3.0025413 L64.3584154,4.00035979 C65.6101302,4.02246314 66.8347657,5.06045128 66.2302188,6.4090559 C66.1124987,6.67166232 65.5809203,7.74107307 64.7356887,9.42380176 C64.3906049,10.1107569 64.0364843,10.8139176 63.6823719,11.5158735 C63.481721,11.9135242 63.481721,11.9135242 63.3400718,12.1940179 C63.2752361,12.3223602 63.2499633,12.3723877 63.2347347,12.4025252 C62.9473552,13.1416265 62.3403838,13.7125666 61.5821659,13.9531632 L61.4345641,14 L51.3557095,14 L51.3414014,13.9992614 L49.367264,13.9987714 C48.7990202,14.0269651 48.3446746,14.4813107 48.3177095,15 L48.315915,15.9401179 C48.350246,16.5123999 48.8077178,16.9693908 49.3177095,17 L49.4884152,17 C49.9002516,15.8348076 51.0114907,15 52.3177095,15 C53.6239283,15 54.7351674,15.8348076 55.1470038,17 L57.4884152,17 C57.9002516,15.8348076 59.0114907,15 60.3177095,15 C61.9745638,15 63.3177095,16.3431458 63.3177095,18 C63.3177095,19.6568542 61.9745638,21 60.3177095,21 C59.0114907,21 57.9002516,20.1651924 57.4884152,19 L55.1470038,19 C54.7351674,20.1651924 53.6239283,21 52.3177095,21 C51.0110177,21 49.8994469,20.1645877 49.4879681,18.9987341 L49.2609485,18.9983878 C47.6804629,18.908533 46.4145307,17.6439315 46.3177095,16 L46.3189381,14.9504455 C46.3979071,13.3588245 47.6680652,12.0855742 49.3076295,12.0005078 L48.32776,5.14142136 L48.3177095,5 C48.3177095,4.35306206 47.9885731,3.58507719 47.6106027,3.20710678 C47.5126087,3.10911276 47.0761577,3 46.3177095,3 L46.3177095,1 Z M60.3177095,17 C59.7654248,17 59.3177095,17.4477153 59.3177095,18 C59.3177095,18.5522847 59.7654248,19 60.3177095,19 C60.8699943,19 61.3177095,18.5522847 61.3177095,18 C61.3177095,17.4477153 60.8699943,17 60.3177095,17 Z M52.3177095,17 C51.7654248,17 51.3177095,17.4477153 51.3177095,18 C51.3177095,18.5522847 51.7654248,19 52.3177095,19 C52.8699943,19 53.3177095,18.5522847 53.3177095,18 C53.3177095,17.4477153 52.8699943,17 52.3177095,17 Z M50.327967,5.00073455 L51.3078634,11.8600168 C51.3174404,11.9277585 51.366371,11.9821505 51.430581,12 L61.0871376,12 C61.2205372,11.9273528 61.3242557,11.8077563 61.3764839,11.6622214 L61.4252669,11.548839 C61.4353455,11.5289026 61.4411046,11.5175104 61.4527454,11.4944722 L61.5155133,11.3702291 C61.5267149,11.3480556 61.5397035,11.3223447 61.5548568,11.2923487 C61.696309,11.0122452 61.696309,11.0122452 61.8967183,10.6150733 C62.2503593,9.91405165 62.6039921,9.21185958 62.9339939,8.55492931 L62.9484803,8.52609021 C63.5265907,7.37515943 63.9681669,6.49032194 64.211084,5.9949252 L50.327967,5.00073455 Z"
                          id="icon"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
            {/* End Shopping Icon SVG */}
            <button className="header-menu-button" onClick={handleMenuClick}>
              <div className="g-menu-btn">
                <div className="dots-wrap">
                  <div className="dot-row _1">
                    <div className="dot _1">
                      <span></span>
                    </div>
                    <div className="dot _2">
                      <span></span>
                    </div>
                    <div className="dot _3">
                      <span></span>
                    </div>
                  </div>
                  <div className="dot-row _2">
                    <div className="dot _1">
                      <span></span>
                    </div>
                    <div className="dot _2">
                      <span></span>
                    </div>
                    <div className="dot _3">
                      <span></span>
                    </div>
                  </div>
                  <div className="dot-row _3">
                    <div className="dot _1">
                      <span></span>
                    </div>
                    <div className="dot _2">
                      <span></span>
                    </div>
                    <div className="dot _3">
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="menu-loading">
                  <svg className="circular" viewBox="25 25 50 50">
                    <circle
                      className="path"
                      cx="50"
                      cy="50"
                      r="24"
                      data-svg-origin="26 26"
                    ></circle>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="header-left">
          <Link to="/">
            <img src={logo} alt={logoAlt} className="header-logo" />
          </Link>
        </div>
        <div className="header-right">
          <div className="header-links">
            <Link to="/" className="header-link">
              Home
            </Link>
            <Link to="/collections" className="header-link">
              Shop
            </Link>
            <Link to="/cvs-locations" className="header-link">
              Location
            </Link>
            <Link to="/contact-us" className="header-link">
              Contact
            </Link>
            <Link to="/" className="header-link">
              <span className="secondary-link">Sale</span>
            </Link>
          </div>
          <div className="header-icons">
            {/* Search Icon SVG */}
            <div
              role="button"
              tabIndex={0}
              onKeyDown={handleShoppingCartClick}
              onClick={handleSearchClick}
              className="header-icon"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>icon</title>
                <defs>
                  <rect
                    id="path-1"
                    x="0"
                    y="0"
                    width="1920"
                    height="141"
                  ></rect>
                  <filter
                    x="-0.1%"
                    y="-1.1%"
                    width="100.2%"
                    height="102.1%"
                    filterUnits="objectBoundingBox"
                    id="filter-2"
                  >
                    <feOffset
                      dx="0"
                      dy="0"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    ></feOffset>
                    <feGaussianBlur
                      stdDeviation="0.5"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    ></feGaussianBlur>
                    <feColorMatrix
                      values="0 0 0 0 0.149019608   0 0 0 0 0.160784314   0 0 0 0 0.243137255  0 0 0 0.5 0"
                      type="matrix"
                      in="shadowBlurOuter1"
                    ></feColorMatrix>
                  </filter>
                </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Product-Page-Copy-7"
                    transform="translate(-1394.000000, -61.000000)"
                  >
                    <g id="Rectangle">
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-2)"
                      ></use>
                      <use fill="#FFFFFF" fillRule="evenodd"></use>
                    </g>
                    <g
                      id="Group-23"
                      transform="translate(1394.000000, 60.000000)"
                      fill="#26293E"
                    >
                      <path
                        d="M8,1 C12.418278,1 16,4.581722 16,9 C16,10.8482015 15.3732643,12.550021 14.3207287,13.9045228 L19.7071068,19.2928932 L18.2928932,20.7071068 L12.9045228,15.3207287 C11.550021,16.3732643 9.84820151,17 8,17 C3.581722,17 -8.50874926e-13,13.418278 -8.50874926e-13,9 C-8.50874926e-13,4.581722 3.581722,1 8,1 Z M8,3 C4.6862915,3 2,5.6862915 2,9 C2,12.3137085 4.6862915,15 8,15 C11.3137085,15 14,12.3137085 14,9 C14,5.6862915 11.3137085,3 8,3 Z"
                        id="icon"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            {/* End Search Icon SVG */}

            {/* Shopping Icon SVG */}
            <div
              role="button"
              onKeyDown={handleShoppingCartClick}
              tabIndex={0}
              onClick={handleShoppingCartClick}
              className="header-icon cart">
              <svg
                width="21px"
                height="20px"
                viewBox="0 0 21 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>icon</title>
                <defs>
                  <rect
                    id="path-1"
                    x="0"
                    y="0"
                    width="1920"
                    height="141"
                  ></rect>
                  <filter
                    x="-0.1%"
                    y="-1.1%"
                    width="100.2%"
                    height="102.1%"
                    filterUnits="objectBoundingBox"
                    id="filter-2"
                  >
                    <feOffset
                      dx="0"
                      dy="0"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    ></feOffset>
                    <feGaussianBlur
                      stdDeviation="0.5"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    ></feGaussianBlur>
                    <feColorMatrix
                      values="0 0 0 0 0.149019608   0 0 0 0 0.160784314   0 0 0 0 0.243137255  0 0 0 0.5 0"
                      type="matrix"
                      in="shadowBlurOuter1"
                    ></feColorMatrix>
                  </filter>
                </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Product-Page-Copy-7"
                    transform="translate(-1440.000000, -61.000000)"
                  >
                    <g id="Rectangle">
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-2)"
                      ></use>
                      <use fill="#FFFFFF" fillRule="evenodd"></use>
                    </g>
                    <g
                      id="Group-23"
                      transform="translate(1394.000000, 60.000000)"
                      fill="#26293E"
                    >
                      <path
                        d="M46.3177095,1 C47.5592614,1 48.4561436,1.22422057 49.0248163,1.79289322 C49.3598659,2.12794284 49.6544489,2.56893407 49.8774658,3.06047595 C50.040153,3.02226023 50.2113563,3.00215745 50.3889566,3.0025413 L64.3584154,4.00035979 C65.6101302,4.02246314 66.8347657,5.06045128 66.2302188,6.4090559 C66.1124987,6.67166232 65.5809203,7.74107307 64.7356887,9.42380176 C64.3906049,10.1107569 64.0364843,10.8139176 63.6823719,11.5158735 C63.481721,11.9135242 63.481721,11.9135242 63.3400718,12.1940179 C63.2752361,12.3223602 63.2499633,12.3723877 63.2347347,12.4025252 C62.9473552,13.1416265 62.3403838,13.7125666 61.5821659,13.9531632 L61.4345641,14 L51.3557095,14 L51.3414014,13.9992614 L49.367264,13.9987714 C48.7990202,14.0269651 48.3446746,14.4813107 48.3177095,15 L48.315915,15.9401179 C48.350246,16.5123999 48.8077178,16.9693908 49.3177095,17 L49.4884152,17 C49.9002516,15.8348076 51.0114907,15 52.3177095,15 C53.6239283,15 54.7351674,15.8348076 55.1470038,17 L57.4884152,17 C57.9002516,15.8348076 59.0114907,15 60.3177095,15 C61.9745638,15 63.3177095,16.3431458 63.3177095,18 C63.3177095,19.6568542 61.9745638,21 60.3177095,21 C59.0114907,21 57.9002516,20.1651924 57.4884152,19 L55.1470038,19 C54.7351674,20.1651924 53.6239283,21 52.3177095,21 C51.0110177,21 49.8994469,20.1645877 49.4879681,18.9987341 L49.2609485,18.9983878 C47.6804629,18.908533 46.4145307,17.6439315 46.3177095,16 L46.3189381,14.9504455 C46.3979071,13.3588245 47.6680652,12.0855742 49.3076295,12.0005078 L48.32776,5.14142136 L48.3177095,5 C48.3177095,4.35306206 47.9885731,3.58507719 47.6106027,3.20710678 C47.5126087,3.10911276 47.0761577,3 46.3177095,3 L46.3177095,1 Z M60.3177095,17 C59.7654248,17 59.3177095,17.4477153 59.3177095,18 C59.3177095,18.5522847 59.7654248,19 60.3177095,19 C60.8699943,19 61.3177095,18.5522847 61.3177095,18 C61.3177095,17.4477153 60.8699943,17 60.3177095,17 Z M52.3177095,17 C51.7654248,17 51.3177095,17.4477153 51.3177095,18 C51.3177095,18.5522847 51.7654248,19 52.3177095,19 C52.8699943,19 53.3177095,18.5522847 53.3177095,18 C53.3177095,17.4477153 52.8699943,17 52.3177095,17 Z M50.327967,5.00073455 L51.3078634,11.8600168 C51.3174404,11.9277585 51.366371,11.9821505 51.430581,12 L61.0871376,12 C61.2205372,11.9273528 61.3242557,11.8077563 61.3764839,11.6622214 L61.4252669,11.548839 C61.4353455,11.5289026 61.4411046,11.5175104 61.4527454,11.4944722 L61.5155133,11.3702291 C61.5267149,11.3480556 61.5397035,11.3223447 61.5548568,11.2923487 C61.696309,11.0122452 61.696309,11.0122452 61.8967183,10.6150733 C62.2503593,9.91405165 62.6039921,9.21185958 62.9339939,8.55492931 L62.9484803,8.52609021 C63.5265907,7.37515943 63.9681669,6.49032194 64.211084,5.9949252 L50.327967,5.00073455 Z"
                        id="icon"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <div className={`${!ITEMS_IN_CART && 'no-display'} qty-bubble`}>{ITEMS_IN_CART}</div>
            </div>
            {/* End Shopping Icon SVG */}

            {/* Account Icon SVG */}
            <Link to="/profile" className="header-icon">
              <div className="header-icon-link">
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 22 22"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>icon</title>
                  <defs>
                    <rect
                      id="path-1"
                      x="0"
                      y="0"
                      width="1920"
                      height="141"
                    ></rect>
                    <filter
                      x="-0.1%"
                      y="-1.1%"
                      width="100.2%"
                      height="102.1%"
                      filterUnits="objectBoundingBox"
                      id="filter-2"
                    >
                      <feOffset
                        dx="0"
                        dy="0"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      ></feOffset>
                      <feGaussianBlur
                        stdDeviation="0.5"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      ></feGaussianBlur>
                      <feColorMatrix
                        values="0 0 0 0 0.149019608   0 0 0 0 0.160784314   0 0 0 0 0.243137255  0 0 0 0.5 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                      ></feColorMatrix>
                    </filter>
                  </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Product-Page-Copy-7"
                      transform="translate(-1487.000000, -60.000000)"
                    >
                      <g id="Rectangle">
                        <use
                          fill="black"
                          fillOpacity="1"
                          filter="url(#filter-2)"
                        ></use>
                        <use fill="#FFFFFF" fillRule="evenodd"></use>
                      </g>
                      <g
                        id="Group-23"
                        transform="translate(1394.000000, 60.000000)"
                        fill="#26293E"
                      >
                        <path
                          d="M104,0 C110.075132,0 115,4.92486775 115,11 C115,17.0751322 110.075132,22 104,22 C97.9248678,22 93,17.0751322 93,11 C93,4.92486775 97.9248678,0 104,0 Z M104,16 C100.430852,16 98.3282764,16.6872588 98.0353754,17.739557 C99.6239243,19.1464312 101.712281,20 104,20 C106.287719,20 108.376076,19.1464312 109.96397,17.7403948 C109.671724,16.6872588 107.569148,16 104,16 Z M104,2 C99.0294373,2 95,6.02943725 95,11 C95,12.9044252 95.5915087,14.6706961 96.6008274,16.1251142 C97.7265478,14.6379201 100.371011,14 104,14 C107.628989,14 110.273452,14.6379201 111.399116,16.1241447 C112.408491,14.6706961 113,12.9044252 113,11 C113,6.02943725 108.970563,2 104,2 Z M104,5 C106.414195,5 108,6.92157821 108,9.2 C108,12.479614 106.218086,14 104,14 C101.760864,14 100,12.4273743 100,9 C100,6.75575936 101.5791,5 104,5 Z M104,7 C102.733739,7 102,7.81582479 102,9 C102,11.2692568 102.818211,12 104,12 C105.177706,12 106,11.2983927 106,9.2 C106,7.95041736 105.215657,7 104,7 Z"
                          id="icon"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
            {/* End Account Icon SVG */}
          </div>
          <button className="header-menu-button" onClick={handleMenuClick}>
            <div className="g-menu-btn">
              <div className="dots-wrap">
                <div className="dot-row _1">
                  <div className="dot _1">
                    <span></span>
                  </div>
                  <div className="dot _2">
                    <span></span>
                  </div>
                  <div className="dot _3">
                    <span></span>
                  </div>
                </div>
                <div className="dot-row _2">
                  <div className="dot _1">
                    <span></span>
                  </div>
                  <div className="dot _2">
                    <span></span>
                  </div>
                  <div className="dot _3">
                    <span></span>
                  </div>
                </div>
                <div className="dot-row _3">
                  <div className="dot _1">
                    <span></span>
                  </div>
                  <div className="dot _2">
                    <span></span>
                  </div>
                  <div className="dot _3">
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="menu-loading">
                <svg className="circular" viewBox="25 25 50 50">
                  <circle
                    className="path"
                    cx="50"
                    cy="50"
                    r="24"
                    data-svg-origin="26 26"
                  ></circle>
                </svg>
              </div>
            </div>
          </button>
        </div>
        {hamMenu === true && <Hamburger close={handleMenuClick} />}
      </section>
      {clickSearch && <Search closeSearch={handleSearchClick} data={data} />}
    </header>
  )
}

Header.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: `Boomer Naturals`,
}

Header.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Header
