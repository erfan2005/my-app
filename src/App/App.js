// import '../App/App.css';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PRODUCTS from './PRODUCTS.json';

function App() {
const productArray = PRODUCTS.products;

  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <h1 className="shop-title">Shop</h1>
    
        <ul className="products-grid">
          {productArray.map((item) => (
            <li key={item.id} className="product-card">
              <img src={item.thumbnail} alt={item.title} className="product-image" />
              
              <div className="product-details">
                <h3>{item.title}</h3>
                <p className="product-description">{item.description}</p>
                <span className="product-price">Price: ${item.price}</span>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export default App;
