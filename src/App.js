// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";         // Import Home
import Factories from "./Components/Factories";
import FactoryPage from "./Components/FactoryPage";  // Dynamic factory page

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/factory/:id" element={<FactoryPage />} />
          <Route path="/factories" element={<Factories />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;