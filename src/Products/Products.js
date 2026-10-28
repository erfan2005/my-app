import React from "react";
import ProductItem from "../ProductItem/ProductItem";


const Products = ({data}) => {
    return (
             <main className="main-content">
        <h1 className="shop-title">Shop</h1>
        <ul className="products-grid">
          {data.map((item) => (
           <ProductItem key={item.id} data={item} />
          ))}
        </ul>
      </main>

        );

};

export default Products