import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
//Components
import Store from './components/Store';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';
//Context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';


function App() {


  return (
            <ProductsContextProvider>
              <CartContextProvider>
                <Navbar />
              <Routes>
                <Route path='/' element={<Store />} />
                <Route path='/products/:id' element={<Details />} />
                <Route path='/cart' element={<ShopCart />} />
                <Route path='/*' element={<Navigate to="/" />} />
              </Routes>
              </CartContextProvider>
            </ProductsContextProvider>        
  );
}

export default App;
