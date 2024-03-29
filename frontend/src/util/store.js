import React from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  storefrontAccessToken: `5060f93e1d5681a9d90371c49cf1a0db`,
  domain: `boomerfacemasks.myshopify.com`,
})



export const defaultStoreContext = {
  client,
  adding: true,
  isCartOpen: false,
  checkout: { lineItems: [] },
  loading: false,
  //products: [],
  //shop: {},
  //filteredType: "all",
  //filteredSort: "featured",
  sortedData: [],
  collectionData: [],
  customerAccessToken: null,
  customerAddress: {},
  customerInfo: {},
  updateCustomerAddress: () => {},
  updateCustomerInfo: () => {},
  addAddressToCheckout: () => {},
  setValue: () => {},
  setSortedValue: () => {},
  setCollectionValue: async () => {},
  buyNow: async () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  //addVariantToCartAndBuyNow: () => {},
  //removeLineItem: () => {},
  //updateLineItem: () => {},
}

const StoreContext = React.createContext(defaultStoreContext)
export default StoreContext
