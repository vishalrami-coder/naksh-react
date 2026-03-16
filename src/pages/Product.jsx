import React from "react";
import FeaturedBrands from "../components/FeaturedBrands";
import Breadcrumb from "../components/breadcrumb";
import siemens from "../assets/images/brands/siemens.webp";
import huceen from "../assets/images/brands/huceen.webp";
import schneider from "../assets/images/brands/schneider-electric.webp";
import pepperl from "../assets/images/brands/pepperl-fuchs.webp";
const Products = () => {
    const brands = [
        { img: siemens, name: "Siemens" },
        { img: huceen, name: "Huceen" },
        { img: schneider, name: "Schneider Electric" },
        { img: pepperl, name: "Pepperl Fuchs" }
    ];

    return (
        <>
            <Breadcrumb
                BreadcrumbTitle="Our Product"
                BreadcrumbActiveTitle="Our Product"
            />

            <FeaturedBrands     mainTitle={""} brands={brands} />
        </>
    );
};

export default Products;