import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import ProductsContextProvider from './context/ProductsContextProvider';
import Store from './components/Store';
import Details from './components/Details';
import CartContextProvider from './context/CartContextProvider';


function App() {


  return (
            <ProductsContextProvider>
              <CartContextProvider>
              <Routes>
                <Route path='/' element={<Store />} />
                <Route path='/products/:id' element={<Details />} />
                <Route path='/*' element={<Navigate to="/" />} />
              </Routes>
              </CartContextProvider>
            </ProductsContextProvider>        
  );
}

export default App;
