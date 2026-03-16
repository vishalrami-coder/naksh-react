import Breadcrumb from "../components/breadcrumb";
import app1 from "../assets/images/app/textile-packing-industry.webp";
import app2 from "../assets/images/app/automotive-industry.webp";
import app3 from "../assets/images/app/food-beverage-water-treatment-industry.webp";
import app4 from "../assets/images/app/machine-plant-engineering.webp";
import app5 from "../assets/images/app/pharma-industry.webp";
import app6 from "../assets/images/app/plastic-paper-industry.webp";

import "../assets/css/Industries.css";



function Industries() {

    const IndustriesData = [
        {
            IndustriesName: "Textile & Packaging Industries",
            IndustriesImage: app1,
        },
        {
            IndustriesName: "Automotive Industry",
            IndustriesImage: app2,
        },
        {
            IndustriesName: "Food Beverages & Water Treatment",
            IndustriesImage: app3,
        },
        {
            IndustriesName: "Machine & Plant Engineering",
            IndustriesImage: app4,
        },
        {
            IndustriesName: "Pharma Industry",
            IndustriesImage: app5,
        },
        {
            IndustriesName: "Textile & Packaging Industry",
            IndustriesImage: app6,
        },
    ];

    return (
        <>
            <Breadcrumb
                BreadcrumbTitle="Industries"
                BreadcrumbActiveTitle="Industries"
            />

            <div className="industriesSec CustomPeding">

                <div className="container">
                    <div className="industriesGrid">
                        {IndustriesData.map((item, index) => (
                            <div className="industryCard" key={index}>

                                <div className="industryImg">
                                    <img src={item.IndustriesImage} alt={item.IndustriesName} />
                                </div>

                                <div className="industryContent">
                                    <h4 className="industryTitle">
                                        {item.IndustriesName}
                                    </h4>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Industries;