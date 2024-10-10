import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import SellDeviceForm from './page/SellDeviceForm';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-device" element={<SellDeviceForm/>} />
    </Routes>
  );
}

export default App;
