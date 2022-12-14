import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navber from "./Navber";
import HomeRoute from "./Routes/Home";
import AllBiodataRoute from "./Routes/AllBiodata";
import AdminRoute from "./Routes/Admin";
import ContactRoute from "./Routes/Contact";
//
//
function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Navber />
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/allBiodata" element={<AllBiodataRoute />} />
            <Route path="/contact" element={<ContactRoute />} />
            <Route path="/admin" element={<AdminRoute />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
