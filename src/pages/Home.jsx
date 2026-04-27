
import React, { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import Counter from "../components/Counter";
import FeaturedBrands from "../components/FeaturedBrands";
import HeroSlider from "../components/HeroSlider";
import IndustriesSection from "../components/IndustriesSection";
import TestimonialSection from "../components/TestimonialSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../features/brand/brandSlice";

import "../assets/css/home.css";
import { ShimmerText } from "react-shimmer-effects";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <HeroSlider />
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
          mainTitle="Featured Brands"
          brands={products}
        />
      )}
      <div className="HomeAboutUs">
        <AboutSection>
          <p>
            NAKSH TECHNOLOGY SOLUTIONS LLP, located in Ahmedabad, India, is a top supplier of Siemens automation products. We offer a wide range of solutions, including PLCs, AC Drives, Servo Systems, HMIs, SCADA systems, and IPCs. Our products boost efficiency and productivity while providing tailored solutions for maximum performance and reliability.
          </p>

          <div className="extraPoints">
            <ul>
              <li>
                <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /> Ventilation System Maintenance
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /> Indoor Air Quality Testing
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /> Cool Craft Custom Solutions
              </li>
            </ul>

            <div className="experience">
              <h3>Experience</h3>
              <h2>7+</h2>
            </div>

          </div>
          <Button className="readmore" onClick={() => {
            navigate('/about-us');
          }}>
            Read More <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" />
          </Button>
        </AboutSection>
      </div>
      <Counter />
      <IndustriesSection />
      <TestimonialSection />
    </>
  );
}

export default Home;