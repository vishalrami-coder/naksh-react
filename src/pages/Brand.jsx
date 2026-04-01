import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedBrands from "../components/FeaturedBrands";
import Breadcrumb from "../components/breadcrumb";
import { fetchBrands } from "../features/brand/brandSlice";
import { ShimmerText } from "react-shimmer-effects";
import BrandBread from "../assets/images/breadcum/product.webp";


const Brand = () => {
    const dispatch = useDispatch();

    const { data: products, loading, error } = useSelector(
        (state) => state.brand
    );

    useEffect(() => {
        if (!loading && products.length === 0) {
            dispatch(fetchBrands());
        }
    }, [dispatch, products.length, loading]);

    return (
        <>
            <Breadcrumb
                BreadcrumbTitle="Our Product"
                BreadcrumbActiveTitle="Our Product"
                backgroundImage={`url(${BrandBread})`}
            />

            {/* ✅ SHIMMER LOADING */}
            {loading && (
                <section className="FeaturedBrands bgGrey CustomPeding">
                    <div className="container">
                        <div className="secTitle">
                            <ShimmerText className="h2shimmer-box" line={1} />
                        </div>
                        <div className="FeaturedBrandsGrid">
                            {Array(6)
                                .fill("")
                                .map((_, index) => (
                                    <ShimmerText className="FeaturedBrandsShimmer-box" line={1} />
                                ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ❌ ERROR */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* ✅ ACTUAL DATA */}
            {!loading && !error && (
                <FeaturedBrands
                    mainTitle="Brands"
                    brands={products}
                />
            )}
        </>
    );
};

export default Brand;