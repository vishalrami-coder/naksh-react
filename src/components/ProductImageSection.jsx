import React from "react";
import "../assets/css/ProductImageSection.css";
import SectionTitle from "./SectionTitle";


const ProductImageSection = ({ smallTitle, mainTitle, images = [] }) => {

    return (
        <div className="ProductDetailsImageWrapper CustomPeding">
            <div className="container">

                {/* Header */}
                <div className="row">
                    <SectionTitle
                        smallTitle={smallTitle}
                        mainTitle={mainTitle}
                    />
                </div>

                {/* Product Grid */}
                <div className="productGrid">
                    {images.map((img, index) => (
                        <div className="productItem">
                            <div className="productImage">
                                <img src={img?.remote_url} alt="product" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProductImageSection;