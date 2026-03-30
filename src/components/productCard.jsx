import React from "react";
import "../assets/css/productCard.css";

const ProductCard = ({ link, image, title, brand, onClick }) => {
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