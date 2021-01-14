import React, { useContext, useEffect } from "react"
import StoreContext from "../../util/store"



const OrderHistory = ({ data }) => {
  console.log("order history data: ", data)
  const { customerAccessToken, setValue } = useContext(StoreContext)
  console.log('ctoken on orderhistory:', customerAccessToken)
  useEffect(() => {}, [data])
  return (
    <>
      <div>Order History</div>
      
    </>
  )
}

export default OrderHistory
