/**
 * Filter Component
 *
 *  Used whenever going to a collection, search results,
 *  or all product type of page
 */

import React, { useState } from "react"
import "../styles/filter.css"
import Product from "../components/product"
import Header from "../components/header"
import Footer from "../components/footer"
import Checkbox from "../components/checkbox"

const Filter = ({ location }) => {
  const [setModalShow] = useState("")
  const [ptActive, setPtActive] = useState()
  const [ctActive, setCtActive] = useState()
  const ITEMS_TO_SHOW = 100

  // NEEDS USEEFFECT To have props passed if coming from a collection or product type search to set the state
  // for filter options so that they are selected

  // NEEDS CLEAR RESULTS BUTTON

  // NEEDS Search Button to work on filter page
  let filterParams = new Set()

  const handleModalShow = e => {
    setModalShow(e)
  }
  let h = undefined
  // let a = undefined
  if(location.state){
    h = location.state.state.productsArray
    //a = location.state.state.allProducts
  }
  // Creates array of product components with length of ITEMS_TO_SHOW amount
  
  const productListItemsGenerate = (i) =>{if(i){
    return(i.slice(0, ITEMS_TO_SHOW).map(product => (
      <div key={product.shopifyId}>
        <Product productInfo={product} handleModalShow={handleModalShow} />
      </div>
    )))
  }
  }
  const PRODUCT_LIST_ITEMS = productListItemsGenerate(h)
    let handlePtToggle = (e) =>{
      if(ptActive === e.target.value){

        setPtActive(null)
      }else{
        setPtActive(e.target.value)
      }
    }
    let handleCtToggle = (e) =>{
      if(ctActive === e.target.value){

        setCtActive(null)
      }else{
        setCtActive(e.target.value)
      }
    }
    let handleCheck = (e, checked) => {
      
      if(checked){
        filterParams.add(e)
      }
      else if(filterParams.has(e)){
        filterParams.delete(e)
      }
      console.log(filterParams)
    }
   
  return (
    <div>
      <Header />
      <section className="filter-container">
        <div className="filter-sidebar">
          <div className="filter-product-type">
            <h4>Product Type</h4>
            <div className='list-item active'>
              <div>
                <span className={'fm'===ptActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="fm" onClick={handlePtToggle} className='filter-option'>Face Mask</button>
            </div>
            <div className='list-item active'>
              <div>
                <span className={'gt'===ptActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="gt" onClick={handlePtToggle} className='filter-option'>Gaiter</button>
            </div>
            <div className='list-item active'>
              <div>
                <span className={'ppe'===ptActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="ppe" onClick={handlePtToggle} className='filter-option'>PPE</button>
            </div>
            <div className='list-item active'>
              <div>
                <span className={'wl'===ptActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="wl" onClick={handlePtToggle} className='filter-option'>Wellness</button>
            </div>
            <div className='list-item active'>
              <div>
                <span className={'bo'===ptActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="bo" onClick={handlePtToggle} className='filter-option'>Botanics</button>
            </div>
          </div>
          <div className="filter-collection-type">
            <h4>Collection Type</h4>
            <div className='list-item active'>
              <div>
                <span className={'ap'===ctActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="ap" onClick={handleCtToggle} className='filter-option'>All Products</button>
            </div>
            <div className='list-item active'>
              <div>
                <span className={'na'===ctActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="na" onClick={handleCtToggle} className='filter-option'>New Arrivals</button>
            </div>
            <div className='list-item active'>
              <div>
                <span className={'mp'===ctActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="mp" onClick={handleCtToggle} className='filter-option'>Most Popular</button>
            </div>
            <div className='list-item active'>
              <div>
                <span className={'fs'===ctActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="fs" onClick={handleCtToggle} className='filter-option'>Flash Sale</button>
            </div>
            <div className='list-item active'>
              <div>
                <span className={'gi'===ctActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="gi" onClick={handleCtToggle} className='filter-option'>Gift Ideas</button>
            </div>
            <div className='list-item active'>
              <div>
                <span className={'b'===ctActive ? 'active' : 'nActive'}></span>
              </div>
              <button value="b" onClick={handleCtToggle} className='filter-option'>Bundles</button>
            </div>
          </div>
          <div className="filter-size">
            <h4>Size</h4>
            <span className="filter-option">Adult</span>
            <div className="check-option"><Checkbox value="sm" handleCheck={handleCheck} /><span className="filter-option">Small</span></div>
            <div className="check-option"><Checkbox value="md" handleCheck={handleCheck} /><span className="filter-option">Medium</span></div>
            <div className="check-option"><Checkbox value="lg" handleCheck={handleCheck} /><span className="filter-option">Large</span></div>
            <div className="check-option"><Checkbox value="xl" handleCheck={handleCheck} /><span className="filter-option">Extra Large</span></div>
            <span className="filter-option">Child</span>
            <div className="check-option"><Checkbox value="ts" handleCheck={handleCheck} /><span className="filter-option">Ages 2-7</span></div>
            <div className="check-option"><Checkbox value="et" handleCheck={handleCheck} /><span className="filter-option">Ages 8-12</span></div>
          </div>
          <div className="filter-color">
            <h4>Colors</h4>
            <span className="filter-option">Color Boxes</span>
          </div>
          <div className="filter-mask-type">
            <h4>Mask Type</h4>
            <div className="check-option"><Checkbox value="ad" handleCheck={handleCheck} /><span className="filter-option">Adjustable</span></div>
            <div className="check-option"><Checkbox value="na" handleCheck={handleCheck} /><span className="filter-option">Non-Adjustable</span></div>
          </div>
        </div>
        <div className="filter-results">{PRODUCT_LIST_ITEMS}</div>
      </section>
      <Footer />
    </div>
  )
}

Filter.defaultProps = {}

Filter.propTypes = {}

export default Filter
