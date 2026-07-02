import React from "react";
import "../assets/css/productCard.css";
import nakshplaceholder from "../assets/images/nakshplaceholder_new.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

const ProductCard = ({ link, image, title, brand, onClick, OnShowInquiry }) => {
    // console.log(image, 'image==> sfgsfg');

    return (
        <div className="productItem" >
            <div className="productImage" onClick={onClick}>
                <img src={image} alt={title} loading="lazy" />
                <div className="spanTag">
                    <p>{brand}</p>
                </div>
            </div>
            <div className="productContent">
                <h4>{title}</h4>

                <div className="produInqueryBtn">
                    <Button className="readmore" onClick={onClick}>
                        View More <FontAwesomeIcon icon={faArrowRightLong} />
                    </Button>
                    <Button className="readmore" onClick={OnShowInquiry}>
                        Get a Quote
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;