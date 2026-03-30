import React from "react";

const TabContent = ({ tab }) => {
  return (
    <div className="TechnicalDetailsContentWrapper">

      {/* Left */}
      <div className="TechnicalDetailsContent">
        <div className="aboutSmallTitle">
          <h2>{tab?.listing_sub_title}</h2>
          <p>{tab?.listing_content}</p>
        </div>

        <ul>
          {tab?.detail_listing?.map((item, index) => (
            <li key={index}>
              <h4>{item?.listing_title}</h4>
              <p>{item?.listing_detail}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image */}
      <div className="TechImg">
        <img src={tab?.listing_image?.image_url} alt="" />
      </div>

    </div>
  );
};

export default TabContent;