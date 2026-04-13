import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";



import '../assets/css/TestimonialSection.css'
import SectionTitle from "./SectionTitle";
function TestimonialSection() {
const testimonials = [
    {
        logo: "/assets/images/Maddyfry-Foods-Pvt-Ltd.svg",
        text: "Reliable source for Siemens HMI and servo drives. We’ve been sourcing from them for over a year. Zero issues so far!",
        name: "Mr. Niral Patel",
        company: "Maddyfry Foods Pvt Ltd",
        image: "/assets/images/NiralPatel.jpg",
    },
    {
        logo: "/assets/images/Colourinn.png",
        text: "Very professional and helpful team. They helped me select the right Siemens VFD for my application.",
        name: "Mr. Jay Patel",
        company: "Colourinn industries pvt. Ltd",
        initials: "JP",
    },
    {
        logo: "/assets/images/Artech_Furniture_Logo.png",
        text: "Great experience with Naksh Technology. Excellent product and service. I give a five-star rating!",
        name: "Mr. Amit Gajera",
        company: "Artech Furniture Private Limited",
        initials: "AG",
    },
    {
        logo: "/assets/images/Reeflex-Logo-2.png",
        text: "Leading Siemens Automation Solutions provider and largest stockist of Siemens products in Gujarat region.",
        name: "Mr. Nearal Patel",
        company: "Reeflex Packaging Private Limited",
        initials: "NP",
    },
];


const handleThumbClick = (index) => {
    setActiveIndex(index);

    if (mainSwiper) mainSwiper.slideTo(index);
    if (thumbSwiper) thumbSwiper.slideTo(index);
};

return (
    <div class="clientSec Custompending">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="clientLogoWrapper">
                        <div class="clientsItem">
                            <img src="https://nakshtechnology.in/assets/images/newLogo/adani-wilmar.webp" alt="" />
                        </div>
                        <div class="clientsItem">
                            <img src="https://nakshtechnology.in/assets/images/newLogo/amul.webp" alt="" />
                        </div>
                        <div class="clientsItem">
                            <img src="https://nakshtechnology.in/assets/images/newLogo/coca-cola.webp" alt="" />
                        </div>
                        <div class="clientsItem">
                            <img src="https://nakshtechnology.in/assets/images/newLogo/intas.webp" alt="" />
                        </div>
                        <div class="clientsItem">
                            <img src="https://nakshtechnology.in/assets/images/newLogo/lt.webp" alt="" />
                        </div>
                        <div class="clientsItem">
                            <img src="https://nakshtechnology.in/assets/images/newLogo/ongc.webp" alt="" />
                        </div>
                        <div class="clientsItem">
                            <img src="https://nakshtechnology.in/assets/images/newLogo/zydus.webp" alt="" />
                        </div>
                        <div class="clientsItem">
                            <img src="https://nakshtechnology.in/assets/images/newLogo/indian-oil.webp" alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="TestimonialWrapper">
                        <div class="swiper TestimonialSlider">
                            <Swiper
                                modules={[Navigation]}
                                navigation
                                loop={true}
                                className="TestimonialSlider"
                            >
                                {testimonials.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="TestimonialsItem">

                                            <div className="contentWrapper">
                                                <div className="logo">
                                                    <img
                                                        src={item.logo}
                                                        alt=""
                                                        style={{ mixBlendMode: "difference" }}
                                                    />
                                                </div>

                                                <div className="content">
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>

                                            <div className="profileWrapper">
                                                <div className="profileImg">
                                                    {item.image ? (
                                                        <img src={item.image} alt={item.name} />
                                                    ) : (
                                                        <span>{item.initials}</span>
                                                    )}
                                                </div>

                                                <div className="profileContent">
                                                    <h5>{item.name}</h5>
                                                    <h6>{item.company}</h6>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    </div >
);
}

export default TestimonialSection;