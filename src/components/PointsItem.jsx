import React from "react";
import "../assets/css/PointsItem.css";
import { TbArrowBadgeRightFilled } from "react-icons/tb";


const PointsItem = ({ title, points = [], cleanHTML }) => {
    return (
        <div className="pointsItem">
            <h5>{title}</h5>
            <ul dangerouslySetInnerHTML={{
                __html: cleanHTML(points),
            }}
            />
        </div>
    );
};

export default PointsItem;