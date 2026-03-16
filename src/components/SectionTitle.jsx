import React from "react";
import '../assets/css/sectionTitle.css'

const SectionTitle = ({ smallTitle, mainTitle, className, Desc }) => {
    return (
        <div className={`secTitle ${className}`}>
            <span>{smallTitle}</span>
            <h2>{mainTitle}</h2>
            <p>{Desc}</p>
        </div>
    );
};

export default SectionTitle;