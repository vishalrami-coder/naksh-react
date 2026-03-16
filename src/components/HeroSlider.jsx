import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative, Parallax } from "swiper/modules";
import { useRef } from "react";

import "../assets/css/HeroSlider.css";

import banner1 from "../assets/images/banner/naksh-b1.webp";
import banner2 from "../assets/images/banner/naksh-b2.webp";
import banner3 from "../assets/images/banner/naksh-b3.webp";
import banner4 from "../assets/images/banner/naksh-b4.webp";
import banner5 from "../assets/images/banner/naksh-b5.webp";
import banner6 from "../assets/images/banner/naksh-b6.webp";

const slides = [
    {
        img: banner1,
        title: "WELCOME",
        subtitle: "TO NAKSH TECHNOLOGY",
        desc: (
            <>
                Delivering reliable automation systems and world-class <br />
                industrial products for businesses across India.
            </>
        ),
        btn: "Read More",
    },
    {
        img: banner2,
        title: "QUICK",
        subtitle: "SUPPORT",
        desc: (
            <>
                Talk directly with our automation experts for product selection, <br /> technical guidance, or urgent requirements.
            </>
        ),
        btn: "+91 70415 10802",
        link: "tel:+917041510802",
    },
    {
        img: banner3,
        title: "SIEMENS",
        subtitle: "AUTOMATION SOLUTIONS",

        desc: (
            <>
                We deliver reliable Siemens PLCs, Drives, HMI, SCADA and <br />
                Servo systems-engineered and supported by our expert <br />
                automation team for real industrial performance.
            </>
        ),
        // desc: "Reliable Siemens PLCs, Drives, HMI, SCADA and Servo systems supported by our expert automation team.",
        btn: "Explore Siemens",
    },
    {
        img: banner4,
        title: "HUCEEN AUTOMATION",
        subtitle: "SOLUTIONS - (UP TO 40% OFF)",
        desc: (
            <>
                As a prioritized HUCEEN partner, we offer advanced motion control, <br />
                servo systems, and automation solutions-trusted by us for <br />
                performance, precision, and long-term reliability.
            </>
        ),
        btn: "EXPLORE HUCEEN SOLUTIONS",
    },
    {
        img: banner5,
        title: "SCHNEIDER ELECTRIC",
        subtitle: "INDUSTRIAL SOLUTIONS",
        desc: (
            <>
                Smart power distribution, control, and automation solutions from <br />
                Schneider-implemented and optimized by Naksh Technology to <br />
                ensure efficiency, safety, and scalability.
            </>
        ),
        btn: "EXPLORE SCHNEIDER PRODUCTS",
    },
    {
        img: banner6,
        title: "PEPPERL + FUCHS",
        subtitle: "INDUSTRIAL SOLUTIONS",
        desc: (
            <>
                Delivering innovative sensor technology and intrinsic safety solutions <br />
                for reliable industrial automation.
            </>
        ),
        btn: "Explore Pepperl + Fuchs",
    },
];

function HeroSlider() {
    const counterRef = useRef(null);

    const updateCounter = (swiper) => {
        const current = swiper.realIndex + 1;
        const total = slides.length;

        if (counterRef.current) {
            counterRef.current.innerHTML =
                `<span class="current-slide">${current < 10 ? "0" + current : current}</span> / ${total < 10 ? "0" + total : total}`;
        }
    };

    const resetBulletAnimation = () => {
        const bullets = document.querySelectorAll(".swiper-pagination-bullet b");

        bullets.forEach((b) => {
            b.style.animation = "none";
            b.offsetHeight;
            b.style.animationName = "";
        });

        const active = document.querySelector(".swiper-pagination-bullet-active b");

        if (active) {
            active.style.animationName = "countingBar";
            active.style.animationDuration = "4s";
        }
    };

    return (
        <section className="hero-slider hero-style">

            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCreative, Parallax]}
                speed={1000}
                parallax={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                effect="creative"
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -100],
                        opacity: 0.9,
                        scale: 1.2,
                    },
                    next: {
                        translate: ["100%", 0, 0],
                        opacity: 0.9,
                        scale: 1.2,
                    },
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: (index, className) =>
                        `<span class="${className}"><i></i><b></b></span>`,
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                onSlideChange={(swiper) => {
                    updateCounter(swiper);
                    resetBulletAnimation();
                }}
                onInit={(swiper) => {
                    updateCounter(swiper);
                    setTimeout(resetBulletAnimation, 200);
                }}
                className="swiper-homebannerslider"
            >

                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-inner">

                            <img
                                src={slide.img}
                                className="img-fluid slide-bg-image"
                                alt=""
                            />

                            <div className="container">
                                <div className="container-in">

                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h1>
                                            <span>{slide.title}</span> {index !== 1 && <br />} {slide.subtitle}
                                        </h1>
                                    </div>

                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>{slide.desc}</p>
                                    </div>

                                    <div data-swiper-parallax="500" className="slide-btns">
                                        <a className="readmore" href={slide.link || "#!"}>
                                            {slide.btn}
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}

                {/* Controls */}
                <div className="swiper-pagination"></div>

                <div className="swiper-button-bottom">
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>

            </Swiper>

            {/* Counter */}
            <div className="custom-counter" ref={counterRef}></div>

        </section>
    );
}

export default HeroSlider;