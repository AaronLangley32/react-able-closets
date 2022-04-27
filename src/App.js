import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import LocationPage from './components/locationPage'
// import Footer from './components/footer'
import HomePage from './components/homePage'
import PhotoPage from './components/photoPage'
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="home" element={<HomePage />}/>
        <Route path="location" element={<LocationPage />}/>
        <Route path="photo" element={<PhotoPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
