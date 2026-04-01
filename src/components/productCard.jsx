import React from "react";
import "../assets/css/productCard.css";
import nakshplaceholder from "../assets/images/nakshplaceholder_new.jpg";

const ProductCard = ({ link, image, title, brand, onClick }) => {
console.log(image, 'image==>');

    return (
        <div className="productItem" onClick={onClick}>
            <div className="productImage">
                <img src={image} alt={title} loading="lazy" />
                <div className="spanTag">
                    <p>{brand}</p>
                </div>
            </div>
            <div className="productContent">
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default ProductCard;