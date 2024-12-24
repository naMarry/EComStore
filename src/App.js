import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import { ProductProvider } from './context/ProductContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Error from './pages/Error';

export default function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} /> 
          <Route path='/error' element={<Error/>} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  )
}
