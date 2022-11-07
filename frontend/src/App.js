import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Orders } from "./Orders"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Orders/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
