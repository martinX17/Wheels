import React from "react"
import { Routes, Route } from "react-router-dom";
import Home  from "./pages/Home";
import About from './pages/About'
import Contact from './pages/Contact'
import Services from "./pages/Services";
import Bikes from './pages/Bikes'
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop.jsx/ScrollToTop";

function App() {

  return (
  <div className="relative">
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/services" element={<Services />} />
        <Route path="/bikes" element={<Bikes />} />
      </Routes>
  </div>
)
}

export default App
