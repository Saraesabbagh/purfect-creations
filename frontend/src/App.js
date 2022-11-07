import React, {useEffect, useState} from "react";
import Airtable from 'airtable';
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Order } from "./Order";
// import { Orders } from "./Orders"

const base = new Airtable({ apiKey: "keyC4C28eqXe5e596" }).base(
  "app8wLQrrIMrnn673"
);

function App() {
  const [orders, setOrders] = useState([]);
  const [ inprogress, setInProgress ] = useState([]);
  let records = [];

  useEffect(() => {
    base("Orders").select({ view: "Grid view" })
    .eachPage((records, fetchNextPage) => {
      console.log(orders)
      setOrders(records);
      fetchNextPage();
    })
  }, [])

  // const ProcessPage = (partialRecords, fetchNextPage) => {
  //   records = [...records, ...partialRecords]
  //   fetchNextPage()
  // }
  // useEffect(() => {
  //   for(let i=0; i<orders.length; i++){
  //     if({orders.record.fields.status} === "in_progress"){
  //       setInProgress([...inprogress, record)
  //       })
  //     }
  //   }
    


  return (
    <div className="App">
      <h1>Orders</h1>
      <h2>Total Orders= {orders.length}</h2>
      {orders.map(order =>(
        <Order
          key={order.id}
          order={order}
          product={order.product_name}
        />
      ))}
    </div>
  );
}

export default App;
