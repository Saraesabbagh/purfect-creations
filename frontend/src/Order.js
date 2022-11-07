import React from 'react'

export const Order = ({ order }) => {
  return (
    <div>
      <p>Order id:{order.fields.order_id}</p>
      <p>Product :{order.fields.product_name}</p>
      <p>Status: {order.fields.order_status}</p>

    </div>
  )
}

export default Order;