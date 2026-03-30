

import "../assets/css/FeaturedBrands.css";
import SectionTitle from "./SectionTitle";
import { useNavigate } from "react-router-dom";


function FeaturedBrands({ brands, mainTitle }) {
    const navigate = useNavigate();

    return (
        <section className="FeaturedBrands CustomPeding">
            <div className="container">
                <SectionTitle
                    mainTitle={mainTitle}
                />
                <div className="FeaturedBrandsGrid">
                    {Array.isArray(brands) &&
                        brands.map((brand, index) => (
                            <div className="FeaturedBrandsGridItem" key={index}
                                onClick={() =>
                                    navigate(`/products/${brand?.slug}`)
                                }
                            >
                                <img src={brand?.image_url} alt={brand?.name} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default FeaturedBrands;