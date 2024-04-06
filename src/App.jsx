import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Mainproducts from './components/Mainproducts'
import Productdetailedpage from './components/Productdetailedpage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Mainproducts} />
        <Route path="/products/:id" Component={Productdetailedpage} />
        {/* <Productdetailedpage/> */}
      </Routes>
      </BrowserRouter>

   </>
  )
}

export default App

// HOW TO CREATE A DETAILED PAGE DYNAMUC ROUTING

