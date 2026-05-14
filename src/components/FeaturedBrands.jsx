import "../assets/css/FeaturedBrands.css";
import SectionTitle from "./SectionTitle";
import { useNavigate } from "react-router-dom";

function FeaturedBrands({ brands, mainTitle, isHome, isInner }) {
    const navigate = useNavigate();

    return (
        <>
            {isHome && (
                <section className="FeaturedBrands CustomPeding">
                    <div className="container">
                        <SectionTitle mainTitle={mainTitle} />

                        <div className="FeaturedBrandsGrid">
                            {Array.isArray(brands) &&
                                brands.map((brand, index) => (
                                    <div
                                        className="FeaturedBrandsGridItem"
                                        key={index}
                                        onClick={() =>
                                            navigate(`/products/${brand?.slug}`)
                                        }
                                    >
                                        <img
                                            src={brand?.image_url}
                                            alt={brand?.name}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            )}

            {isInner && (
                <section className="FeaturedBrands CustomPeding InnerFeaturedBrands">
                    <div className="container">
                        {/* <SectionTitle mainTitle={mainTitle} /> */}

                        <div className="FeaturedBrandsGrid">
                            {Array.isArray(brands) &&
                                brands.map((brand, index) => (
                                    <div
                                        className="FeaturedBrandsGridItem"
                                        key={index}
                                        onClick={() =>
                                            navigate(`/products/${brand?.slug}`)
                                        }
                                    >
                                        <div className="FeaturedBrandsImg">
                                            <img
                                                src={brand?.image_url}
                                                alt={brand?.name}
                                            />
                                        </div>
                                        <div className="FeaturedBrandsContent">
                                            <h5>{brand?.name}</h5>
                                            <div className="desc">
                                                <p dangerouslySetInnerHTML={{ __html: brand?.section_content }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default FeaturedBrands;