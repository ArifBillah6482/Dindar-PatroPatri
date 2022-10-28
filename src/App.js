import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navber from "./Navber";
import AboutRoute from "./Routes/About";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Navber />
          <Routes>
            <Route
              path="/"
              element={<p style={{ margin: "100px 0 0 50px" }}>Home Page</p>}
            />
            <Route path="/about" element={<AboutRoute />} />
            <Route path="/mywork" element={<>My Work Page</>} />
            <Route path="/gallery" element={<>Gallery Page</>} />
            <Route path="/contact" element={<>Contact Page</>} />
            <Route path="/help" element={<>Help Page</>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
