import React from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import Products from '../Products/Products';
import PRODUCTS from './PRODUCTS.json';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"
        element={
        <>
        <Layout>
      <Products
       data={PRODUCTS.products} 
       />
       </Layout>
      </>
        }
      />
        <Route path="/about"
        element={<div>About me</div>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
