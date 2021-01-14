import React, { useContext, useEffect } from "react"
import StoreContext from "../../util/store"



const OrderHistory = ({ data }) => {
  console.log("order history data: ", data)
  const { customerAccessToken, setValue } = useContext(StoreContext)
  console.log('ctoken on orderhistory:', customerAccessToken)
  useEffect(() => {}, [data])
  try{
  return (
    <>
      <div>Order History</div>
      
    </>
  )
  }
  catch {
    return <div><span>No Orders History</span></div>
  }
}

export default OrderHistory
