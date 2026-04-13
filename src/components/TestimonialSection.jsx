import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/TestimonialSection.css";

import AdaniWilmarLogo from "../assets/images/clients/adani-wilmar.webp";
import AmulLogo from "../assets/images/clients/amul.webp";
import CocaColaLogo from "../assets/images/clients/coca-cola.webp";
import Intaslogo from "../assets/images/clients/intas.webp";
import ltLogo from "../assets/images/clients/lt.webp";
import Ongclogo from "../assets/images/clients/ongc.webp";
import Zyduslogo from "../assets/images/clients/zydus.webp";
import Indianoillogo from "../assets/images/clients/indian-oil.webp";


// client Logo 
import ArtechFurnitureLogo from "../assets/images/testLogo/Artech_Furniture_Logo.png";
import ColourinnLogo from "../assets/images/testLogo/Colourinn.png";
import MaddyfryLogo from "../assets/images/testLogo/Maddyfry-Foods-Pvt-Ltd.svg";
import ReeflexLogo from "../assets/images/testLogo/Reeflex-Logo-2.png";
import NiralPatelLogo from "../assets/images/testLogo/NiralPatel.jpg";






function TestimonialSection() {
    const testimonials = [
        {
            logo: MaddyfryLogo,
            text: "Reliable source for Siemens HMI and servo drives. We’ve been sourcing from them for over a year. Zero issues so far!",
            name: "Mr. Niral Patel",
            company: "Maddyfry Foods Pvt Ltd",
            image: NiralPatelLogo,
        },
        {
            logo: ColourinnLogo,
            text: "Very professional and helpful team. They helped me select the right Siemens VFD for my application.",
            name: "Mr. Jay Patel",
            company: "Colourinn industries pvt. Ltd",
            initials: "JP",
        },
        {
            logo: ArtechFurnitureLogo,
            text: "Great experience with Naksh Technology. Excellent product and service. I give a five-star rating!",
            name: "Mr. Amit Gajera",
            company: "Artech Furniture Private Limited",
            initials: "AG",
        },
        {
            logo: ReeflexLogo,
            text: "Leading Siemens Automation Solutions provider and largest stockist of Siemens products in Gujarat region.",
            name: "Mr. Nearal Patel",
            company: "Reeflex Packaging Private Limited",
            initials: "NP",
        },
    ];

    return (
        <div className="clientSec CustomPeding">
            <div className="container">
                <div className="row">

                    {/* Left Side Logos */}
                    <div className="col-sm-12 col-md-6">
                        <div className="clientLogoWrapper">
                            {[
                                AdaniWilmarLogo,
                                AmulLogo,
                                CocaColaLogo,
                                Intaslogo,
                                ltLogo,
                                Ongclogo,
                                Zyduslogo,
                                Indianoillogo,
                            ].map((logo, i) => (
                                <div className="clientsItem" key={i}>
                                    <img
                                        src={logo}
                                        alt={logo}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Testimonials */}
                    <div className="col-sm-12 col-md-6">
                        <div className="TestimonialWrapper">
                            <Swiper
                                modules={[Navigation]}
                                navigation
                                loop={true}
                                speed={800} // smooth transition (default 300)
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
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
                                                        style={index === 0 ? { filter: "invert(1)" } : undefined}
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
            </div>
        </div>
    );
}

export default TestimonialSection;