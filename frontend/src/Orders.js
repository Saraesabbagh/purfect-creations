import React, {useEffect, useState} from "react";

export const Orders = () => {
  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/app8wLQrrIMrnn673/orders?api_key=keyC4C28eqXe5e596"
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

return (
  <div>
    <p>Total Orders: {orders.length}</p>
    <p> Total Orders this month: ?</p>
    <p> Total Order in progress: </p>
    {/* <p> Revenue:{orders.price.reduce()} </p> */}
    <p> list of the most recent orders: </p>
    {orders.length > 0 ? (
      orders.map((record) => (
        <div>
          <p>Product id: {record.fields.order_id}</p>
          <p>Product name: {record.fields.product_name}</p>
        </div>
      ))
    ) : (
      <p>Fetching Data...</p>
    )}
  </div>
);
 
}

