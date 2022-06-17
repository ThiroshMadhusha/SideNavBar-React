import React from "react";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard.jsx'
import About from "./pages/About.jsx";
import Inventory from "./pages/Inventory.jsx";
import Supplier from "./pages/Supplier.jsx";
import Transport from "./pages/Transport.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" elements={<Dashboard />} />
          <Route path="/dashboard" elements={<Dashboard />} />
          <Route path="/about" elements={<About />} />
          <Route path="/inventory" elements={<Inventory />} />
          <Route path="/supplier" elements={<Supplier />} />
          <Route path="/transport" elements={<Transport />} />
          <Route path="/contact" elements={<Contact />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};

export default App;
