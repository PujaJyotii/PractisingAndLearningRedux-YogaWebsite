import React from "react";
import Header from "./UI/Header";
import Data from "./DataInput/Data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Information from "./DataInput/Information";
import Bookings from "./DataInput/Bookings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Information />} />
          <Route path="/data" element={<Data />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
