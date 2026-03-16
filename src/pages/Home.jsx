
import "../assets/css/home.css";
import AboutSection from "../components/AboutSection";
import Counter from "../components/Counter";
import FeaturedBrands from "../components/FeaturedBrands";
import HeroSlider from "../components/HeroSlider";
import IndustriesSection from "../components/IndustriesSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button";

import siemens from "../assets/images/brands/siemens.webp";
import huceen from "../assets/images/brands/huceen.webp";
import schneider from "../assets/images/brands/schneider-electric.webp";
import pepperl from "../assets/images/brands/pepperl-fuchs.webp";
// Images Import

function Home() {

  const brands = [
    { img: siemens, name: "Siemens" },
    { img: huceen, name: "Huceen" },
    { img: schneider, name: "Schneider Electric" },
    { img: pepperl, name: "Pepperl Fuchs" }
  ];

  return (
    <>
      <HeroSlider />
      <FeaturedBrands mainTitle={"Featured Brands"} brands={brands} />
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
            <h2>25+</h2>
          </div>

        </div>
        <Button className="readmore">
          Read More <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" />
        </Button>
      </AboutSection>
      <Counter />
      <IndustriesSection />
    </>
  );
}

export default Home;