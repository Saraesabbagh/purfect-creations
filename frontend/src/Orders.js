import React, {useEffect, useState} from "react";
import "./Orders.css";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [ordersInProgress, setOrdersInProgress] = useState([])
  const str = 'In_progress';
  let  inProgressCount = 0;
  let ordersThisMonthCount = 12;
  let revenue = 0;
  

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
  console.log(orders);

  //  const contains = orders.some(record => {
  //   if (str.includes(record)){
  //     in_progress.push(record);
  //   } return null
  //  });

   

  //  if(orders.findIndex(order => order.fields.order_status == "in_progress") == -1){
  //   console.log(false);
  //  } else {
  //   inProgressArr.push();
  //   console.log(true);
  //  }

orders.forEach(order => {
  if (order.fields.order_status == "in_progress") {
    inProgressCount += 1;
  }
});

console.log(inProgressCount);

// orders.forEach((order) => {
//   if (order.fields.order_placed.inlcudes("10")) {
//     ordersThisMonthCount += 1;
//   }
// });
 
console.log(ordersThisMonthCount);

orders.forEach(order => {
  revenue += order.fields.price;
})
console.log(revenue.toFixed(2));

return (
  <div>
    <div className="topDashboard">
      <h1>😽Purrfect Creations Dashboard😽</h1>
      <div className="topStats">
        <span className="top-spans">Total Orders: {orders.length}</span>
        <span className="top-spans">
          Total Orders this month: {ordersThisMonthCount}
        </span>
        <span className="top-spans">Total in progress: {inProgressCount}</span>
        <span className="top-spans">Revenue: £ {revenue.toFixed(2)} </span>
      </div>
    </div>
    <div className="bottom-dashboard">
      <h3> list of the most recent orders: </h3>
      <div className="recent-orders">
        {orders.length > 0 ? (
          orders.map((record) => (
            <div className="each-order">
              <span>Order id: {record.fields.order_id}  </span>
              <p>Customer Email : {record.fields.email}</p>

              <p>Product name: {record.fields.product_name}</p>
            </div>
          ))
        ) : (
          <p>Fetching Data...</p>
        )}
      </div>
    </div>
  </div>
);
 
}

