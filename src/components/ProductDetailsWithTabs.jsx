import React, { useState } from "react";
import TabContent from "./TabContent";
import "../assets/css/ProductDetailsWithTabs.css";
import SectionTitle from "./SectionTitle";


const ProductDetailsWithTabs = ({ productSpecifications = [], smallTitle, mainTitle }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="ProductDetailsSpecificationsSec CustomPeding">
      <div className="container">

        <SectionTitle
          smallTitle={smallTitle}
          mainTitle={mainTitle}
        />

        {/* Tabs */}
        <div className="TechnicalDetailsTabingWrapper">
          <ul className="nav nav-pills MainPageTab">
            {productSpecifications.map((tab, index) => (
              <li className="nav-item" key={index}>
                <button
                  className={`nav-link ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab?.listing_title}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {productSpecifications.map((tab, index) => (
              <div
                key={index}
                className={`tab-pane fade ${activeTab === index ? "show active" : ""
                  }`}
              >
                <TabContent tab={tab} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsWithTabs;