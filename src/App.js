import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/navbar";
import {
    BrowserRouter as Router,
  } from 'react-router-dom';
import About from "./pages/about";
import Cart from "./pages/cart";
import BookMenu from "./pages/Books";

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/Books" element={<BookMenu />} />
                <Route path='/about' element={<About />} />
                <Route path="/cart"  element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;
