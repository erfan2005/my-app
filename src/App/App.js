import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import PRODUCTS from '../App/PRODUCTS.json';
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
      <Header />
      <Products
       data={PRODUCTS.products} 
       />
      <Footer />
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
