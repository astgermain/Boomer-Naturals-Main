import React, { useEffect, useContext } from "react"
import StoreContext from "../../util/store"
import { ORDER_HISTORY_CSS } from "../../util/imports"

const OrderHistory = ({ data }) => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
  // Code Snippet taken from the post
  function getSafe(fn, defaultVal) {
    try {
      return fn()
    } catch (e) {
      return defaultVal
    }
  }
  // or add an optional default value
  let orders = getSafe(() => data.data.customer.orders.edges, undefined)
  let makeDate = (date) => {
    let d = date.getUTCDate()
    let m = date.getUTCMonth() + 1
    let y = date.getUTCFullYear()
    let s = `${m}/${d}/${y}`
    return s
  }
  useEffect(() => {}, [data])
  let renderVar =
    orders !== undefined ? (
      orders.map(order => {
        return (
            <tr key={`${order.node.orderNumber}`}>
              <th scope="row">{order.node.name}</th>
              <td>${order.node.totalPrice}</td>
              <td>{makeDate(new Date(order.node.processedAt))}</td>
              <td>{order.node.fulfillmentStatus}</td>
              <td>{order.node.shippingAddress.address1} {order.node.shippingAddress.address2}
              <br></br>
              {order.node.shippingAddress.city}, {order.node.shippingAddress.province} {order.node.shippingAddress.zip}</td>
            </tr>
          
        )
      })
    ) : (
      <>
        <span>There is No Order History</span>
      </>
    )

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Order Number</th>
          <th scope="col">Total Charge</th>
          <th scope="col">Placed On</th>
          <th scope="col">Status</th>
          <th scope="col">Shipped To</th>
        </tr>
      </thead>
      <tbody>{renderVar}</tbody>
    </table>
  )
}

export default OrderHistory
