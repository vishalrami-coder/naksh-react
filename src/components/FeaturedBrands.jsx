import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/FeaturedBrands.css";
import { Button } from "./Button";
import SectionTitle from "./SectionTitle";
import { useNavigate } from "react-router-dom";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function FeaturedBrands({ brands, mainTitle, isHome, isInner, OnShowInquiry }) {
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

                                    >
                                        <div className="FeaturedBrandsImg" onClick={() =>
                                            navigate(`/products/${brand?.slug}`)
                                        }>
                                            <img
                                                src={brand?.image_url}
                                                alt={brand?.name}
                                            />
                                        </div>
                                        <div className="FeaturedBrandsContent">
                                            <h5 onClick={() =>
                                                navigate(`/products/${brand?.slug}`)
                                            }>{brand?.name}</h5>
                                            <div className="desc">
                                                <p dangerouslySetInnerHTML={{ __html: brand?.section_content }} />
                                            </div>

                                            <div className="produInqueryBtn">
                                                <Button className="readmore" onClick={() =>
                                                    navigate(`/products/${brand?.slug}`)
                                                }>
                                                    View More <FontAwesomeIcon icon={faArrowRightLong} />
                                                </Button>
                                                <Button className="readmore" onClick={OnShowInquiry}>
                                                    Get a Quote
                                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                                </Button>
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