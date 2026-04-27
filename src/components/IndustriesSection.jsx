import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import pharma from "../assets/images/industries/pharma-industry.webp";
import pharmaBig from "../assets/images/industries/pharma-industry-big.webp";

import textile from "../assets/images/industries/textile-packaging.webp";
import textileBig from "../assets/images/industries/textile-packaging-industries.webp";

import automotive from "../assets/images/industries/automotive.webp";
import automotiveBig from "../assets/images/industries/automotive-manufacturing.webp";

import plastic from "../assets/images/industries/paper-plastic.webp";
import plasticBig from "../assets/images/industries/plastic-paper-industries.webp";

import plant from "../assets/images/industries/plant-engineering.webp";
import plantBig from "../assets/images/industries/machine-plant-engineering.webp";

import serviceBg from "../assets/images/service_bg_2.svg";
import service1Bg from "../assets/images/service_shape_1.svg";

import '../assets/css/IndustriesSection.css'
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

function IndustriesServices() {

    const [mainSwiper, setMainSwiper] = useState(null);
    const [thumbSwiper, setThumbSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const industries = [
        {
            icon: pharma,
            title: "Pharma Industry",
            bigImg: pharmaBig,
            heading: "Reliable Automation for Pharmaceutical Manufacturing",
            desc: "Pharmaceutical manufacturing demands precise control and strict compliance.",
            points: [
                "PLC-Based Process Control Systems",
                "SCADA Monitoring & Data Logging",
                "Cleanroom Environment Automation",
                "Batch Processing & Recipe Control",
                "Energy & Utility Monitoring",
                "Preventive Maintenance & Integration"
            ]
        },
        {
            icon: textile,
            title: "Textile & Packaging Industries",
            bigImg: textileBig,
            heading: "Smart Automation for Textile & Packaging Manufacturing",
            desc: "Textile industries require synchronized machine control and high-speed processing.",
            points: [
                "PLC-Based Machine Control",
                "SCADA Monitoring",
                "Drive & Motion Control Integration",
                "Energy Monitoring",
                "Process Synchronization",
                "System Integration"
            ]
        },
        {
            icon: automotive,
            title: "Automotive Manufacturing",
            bigImg: automotiveBig,
            heading: "Advanced Automation for Automotive Production",
            desc: "Automotive manufacturing demands high-speed precision.",
            points: [
                "Assembly Line Control",
                "SCADA Production Tracking",
                "Servo Motion Integration",
                "Quality Inspection Automation",
                "Energy Monitoring",
                "Preventive Maintenance"
            ]
        },
        {
            icon: plastic,
            title: "Plastic & Paper Industries",
            bigImg: plasticBig,
            heading: "Efficient Automation for Plastic & Paper Manufacturing",
            desc: "Plastic and paper manufacturing requires precise process control.",
            points: [
                "Machine Control Systems",
                "SCADA Monitoring",
                "Temperature Control",
                "Drive Integration",
                "Energy Monitoring",
                "Maintenance Solutions"
            ]
        },
        {
            icon: plant,
            title: "Machine & Plant Engineering",
            bigImg: plantBig,
            heading: "Advanced Automation for Machine & Plant Engineering",
            desc: "Plant engineering requires scalable automation architecture.",
            points: [
                "Machine Control Systems",
                "Motion Control",
                "Servo Integration",
                "Energy Monitoring",
                "System Integration"
            ]
        }
    ];


    const handleThumbClick = (index) => {
        setActiveIndex(index);

        if (mainSwiper) mainSwiper.slideTo(index);
        if (thumbSwiper) thumbSwiper.slideTo(index);
    };

    return (
        <section
            className="ourServices CustomPeding"
            style={{ backgroundImage: `url(${serviceBg})` }}
        >

            <div className="container">
                <SectionTitle
                    smallTitle="Our Services"
                    mainTitle="Serving Key Industries"
                />
                <div className="gallery">

                    {/* THUMB SLIDER */}

                    <Swiper
                        modules={[Controller]}
                        onSwiper={setThumbSwiper}
                        controller={{ control: mainSwiper }}
                        slidesPerView={5}
                        spaceBetween={15}
                        className="gallery-thumbs"
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            480: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >

                        {industries.map((item, index) => (
                            <SwiperSlide key={index}>

                                <div
                                    className={`serviceCard ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => handleThumbClick(index)}
                                >
                                    <div className="serviceCardWrapper">
                                        <div className="serviceCardImg">
                                            <img src={item.icon} alt={item.title} width="60" />
                                        </div>

                                        <h3 className="service_cardT">{item.title}</h3>

                                    </div>
                                    <div className="serviceCardBgImg">
                                        <img alt="img" width="71" height="69" className="serviceCardBgImg1" src={service1Bg} />
                                        <img alt="img" width="71" height="69" className="serviceCardBgImg2" src={service1Bg} />
                                        <svg width="282" height="229" viewBox="0 0 282 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 9C0 6.23858 2.23858 4 5 4H277C279.761 4 282 6.23858 282 9V189.6C282 196.796 276.889 202.979 269.821 204.332L163.569 224.678C148.658 227.534 133.342 227.534 118.431 224.678L12.1789 204.332C5.11085 202.979 0 196.796 0 189.6V9Z" fill="white"></path>
                                            <path d="M0 5C0 2.23857 2.23858 0 5 0H277C279.761 0 282 2.23858 282 5V187.426C282 194.7 276.781 200.925 269.619 202.195L161.95 221.285C148.091 223.743 133.909 223.743 120.05 221.285L12.3813 202.195C5.21895 200.925 0 194.7 0 187.426V5Z" fill="#FF5500"></path>
                                        </svg>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>


                    {/* MAIN SLIDER */}

                    <Swiper
                        // modules={[Navigation]}
                        // navigation
                        slidesPerView={1}
                        onSwiper={setMainSwiper}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.activeIndex);
                            thumbSwiper?.slideTo(swiper.activeIndex);
                        }}
                        className="gallery-slider"
                    >

                        {industries.map((item, index) => (
                            <SwiperSlide key={index}>

                                <div className="serviceDetailsCard">

                                    <div className="serviceDetails">

                                        <h2>{item.heading}</h2>

                                        <p>{item.desc}</p>

                                        <ul>
                                            {item.points.map((point, i) => (
                                                <li key={i}>
                                                    <FontAwesomeIcon icon={faCircleCheck} /> {point}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/industries" className="readmore">
                                              Explore Solutions   <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" />
                                        </Link>
                                    </div>
                                    <div className="serviceDetailsThumb">
                                        <img src={item.bigImg} alt="" />
                                    </div>

                                </div>


                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </div>
        </section >
    );
}

export default IndustriesServices;