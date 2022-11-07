import React, {useEffect, useState} from "react";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  // const [inProgress, setInprogress] = useState([])

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

  // const totalinProgress = () =>{
  //   for(let i=0; i< orders.length; i++){
  //     if(orders[i].fields.order_status === "in_progress"){
  //         inProgress.push(orders)
  //       }
  //   }
  //   return inProgress.length;
  // }
  // console.log(inProgress);
  // console.log(totalinProgress);

  console.log(orders[2].fields.order_status);
  console.log(orders);

return (
  <div>
    <p>Total Orders: {orders.length}</p>
    <p> Total Orders this month: ?</p>
    <p> Total Order in progress: </p>
    {/* <p> Revenue:{orders.price.reduce()} </p> */}
    <p>  list of the most recent orders: </p>
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

