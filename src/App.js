import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import ProductsContextProvider from './context/ProductsContextProvider';
import Store from './components/Store';
import Details from './components/Details';


function App() {


  return (
            <ProductsContextProvider>
              <Routes>
                <Route path='/' element={<Store />} />
                <Route path='/products/:id' element={<Details />} />
                <Route path='/*' element={<Navigate to="/" />} />
              </Routes>
            </ProductsContextProvider>        
  );
}

export default App;
