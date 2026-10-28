import React from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";

const ProductItem = ({data}) => (
<li key={data.id} className="product-card">
    <Image imgSrc={data.thumbnail} altText={data.title} />
    <div className="product-details">
      <h3>{data.title}</h3>
      <p className="product-description">{data.description}</p>
      <span className="product-price">Price: ${data.price}</span>
      <Button>
          Add to Cart
      </Button>
    </div>
  </li>
);

export default ProductItem