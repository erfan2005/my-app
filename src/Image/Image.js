import React from "react";
import "./Image.css"

const Image = ({imgSrc,altText}) => {
    return(
<img src={imgSrc} alt={altText} className="product-image" />
);
};
        
export default Image