

import "../assets/css/FeaturedBrands.css";
import SectionTitle from "./SectionTitle";

function FeaturedBrands({ brands, mainTitle }) {


    return (
        <section className="FeaturedBrands CustomPeding">
            <div className="container">
                <SectionTitle
                    mainTitle={mainTitle}
                />
                <div className="FeaturedBrandsGrid">
                    {brands.map((brand, index) => (
                        <div className="FeaturedBrandsGridItem" key={index}>
                            <img src={brand.img} alt={brand.name} />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default FeaturedBrands;