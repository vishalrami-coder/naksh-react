import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import DOMPurify from "dompurify";
import nakshplaceholder from "../assets/images/nakshplaceholder_new.jpg";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { StickyButtons } from "./StickyButtons";
import ContactUs from "../pages/ContactUs";


const ProductDetails = ({ image, smallTitle, mainTitle, description, short_description, productListing, BrandDetails, ProductNullImg, productSlugs, huceenImage, OnShowInquiry }) => {
    const [showInquiry, setShowInquiry] = useState(false);

    // console.log(huceenImage, 'image==>');

    const cleanHTML = (html) => {
        if (!html) return "";

        // Step 1: sanitize
        const clean = DOMPurify.sanitize(html, {
            FORBID_ATTR: ["style", "class"],
        });

        // Step 2: remove unnecessary spans
        const parser = new DOMParser();
        const doc = parser.parseFromString(clean, "text/html");

        // unwrap span inside td/th
        doc.querySelectorAll("td span, td p, th span").forEach((span) => {
            const parent = span.parentNode;

            // move text up and remove span
            parent.replaceChild(document.createTextNode(span.textContent), span);
        });

        return doc.body.innerHTML;
    };
    return (



        <div className="productDetails CustomPeding borderBottom">
            <div className="container">
                <div className="row">
                    {/* Left Image */}
                    <div className="col-sm-12 col-md-6 col-lg-5">
                        {productListing &&
                            <div className="aboutImg">
                                {Array.isArray(image) && image.length > 1 ? (
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                                        loop={true}
                                        className="systemOverviewSwiper"
                                    >
                                        {image.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <img src={item} alt={`slide-${index}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                ) : image?.length === 1 ? (
                                    <img src={image[0]} alt="single" />

                                ) : (
                                    <img src={huceenImage?.parent?.image_url} alt="singleImg" />
                                )}
                            </div>
                        }

                        {ProductNullImg &&
                            <div className="aboutImg">
                                <img src={image} alt="single" />
                            </div>
                        }

                        {BrandDetails &&
                            <div className="aboutImg ">
                                {huceenImage?.main_image &&
                                    Array.isArray(huceenImage?.product_images) &&
                                    huceenImage.product_images.length > 0 ? (
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                                        loop
                                        className="systemOverviewSwiper"
                                    >
                                        {/* Main Image */}
                                        <SwiperSlide>
                                            <img
                                                src={huceenImage.main_image}
                                                alt="Main Product"
                                            />
                                        </SwiperSlide>

                                        {/* Product Images */}
                                        {huceenImage.product_images
                                            .filter((item) => item?.image_path)
                                            .map((item, index) => (
                                                <SwiperSlide key={item.id || index}>
                                                    <img
                                                        src={item.image_path}
                                                        alt={`slide-${index + 1}`}
                                                    />
                                                </SwiperSlide>
                                            ))}
                                    </Swiper>
                                ) : (
                                    <img
                                        src={huceenImage?.main_image || image}
                                        alt="Naksh Technology Solutions LLP Img"
                                    />
                                )}
                            </div>
                        }

                    </div>

                    {/* Right Content */}
                    <div className="col-sm-12 col-md-6 col-lg-7">
                        <div className="aboutContent">
                            <SectionTitle
                                smallTitle={smallTitle}
                                mainTitle={mainTitle}
                                className="mb-0"
                            />
                            {(productSlugs == "huceen" || productSlugs == "bosch-rexroth") ?
                                <div className="desc huceenDetails">
                                    {short_description && (
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: cleanHTML(short_description),
                                            }}
                                        />
                                    )}
                                </div>
                                :
                                <div className="desc">
                                    {short_description && (
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: cleanHTML(short_description),
                                            }}
                                        />
                                    )}
                                    {description && (
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: cleanHTML(description),
                                            }}
                                        />
                                    )}
                                </div>
                            }

                            <div className="produInqueryBtn">
                                <Button className="readmore" onClick={OnShowInquiry}>
                                    Get a Quote
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <StickyButtons
                show={showInquiry}
                setShow={setShowInquiry}
            />
        </div >
    );
};

export default ProductDetails;