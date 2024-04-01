import React from "react";
import {Landing, Dashboard, Error, Register, Login} from './pages'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<div>THis is login</div>} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/*"
          element={
            <div>
              Eroor page not found <a href="/">Home</a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
