import React, {useEffect, useState} from "react";
import axios from 'axios';

export const Orders = () => {
  const [orders, setOrders] = useState({});
  let resp = [];
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

  try {
     do{
        let params = {offset: " "};
        axios.get(
            "https://api.airtable.com/v0/app8wLQrrIMrnn673/orders?api_key=keyC4C28eqXe5e596",
            { params: params })
          .then((response) => {
            for (let item of response.data.records) resp.push(item);
            if (response.data.offset) params.offset = response.data.offset;
            else params.offset = "";
          });
    }while(params.offset !== "");
  } catch(error) {
        console.error(error)
  } 

  console.log(resp);

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

