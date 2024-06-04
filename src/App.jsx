import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from "./pages/Home";
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from "./Components/Navbar/Navbar";

function App() {

  return (
  <div className="relative">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
    </Router>
  </div>
)
}

export default App
