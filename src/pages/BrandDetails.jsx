import { useParams } from "react-router-dom";
import { useEffect } from "react";
import DOMPurify from "dompurify";
import Breadcrumb from "../components/breadcrumb";
import ProductDetails from "../components/productDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandDetails } from "../features/brandDetails/brandDetailSlice";
import FAQSection from "../components/FAQSection";

import "../assets/css/BrandDetails.css";
import PointsItem from "../components/PointsItem";
import ProductImageSection from "../components/ProductImageSection";
import ProductDetailsWithTabs from "../components/ProductDetailsWithTabs";

const BrandDetails = () => {
    const { "*": fullPath } = useParams();

    const productSlugs = fullPath?.split("/") || [];
    const slug = productSlugs[productSlugs.length - 1];

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.brandDetails);

    useEffect(() => {
        if (slug) {
            dispatch(fetchBrandDetails(slug));
        }
    }, [slug, dispatch]);

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



    const productData = {
        code: "6ES7972-0AC80-0XA0",
        title: "Technical Clarification for RS 485-iS Coupler",
        description:
            "SIMATIC DP, distributed I/O Field device connection RS 485-IS coupler...",

        tabs: [
            {
                name: "Memory and Processing",
                description:
                    "While this coupler has no onboard CPU, it is optimized for protocol bridging tasks...",
                image:
                    "https://datalog.nakshtechnology.com/wp-content/uploads/2025/04/7015988-scaled.jpg",
                points: [
                    { title: "🔋 Max Current:", value: "150 mA" },
                    { title: "🔌 Power Loss:", value: "3 W (typical)" },
                    { title: "🔧 Efficient Design:", value: "Minimal power draw" },
                    { title: "📉 Voltage Range:", value: "20.4–28.8 V DC" },
                    { title: "💡 Energy Saving:", value: "Low thermal output" }
                ]
            },
            {
                name: "I/O and Interfaces",
                description:
                    "Designed with robust screw terminal blocks...",
                image:
                    "https://datalog.nakshtechnology.com/wp-content/uploads/2025/05/browser_1113940.png",
                points: [
                    { title: "🔩 Wiring Type:", value: "Screw terminal block" },
                    { title: "⚡ Power Input:", value: "DC voltage input" },
                    { title: "📏 Width:", value: "80 mm" },
                    { title: "📐 Height:", value: "125 mm" },
                    { title: "📘 Depth:", value: "67.5 / 130 mm" }
                ]
            }
        ]
    };

    return (
        <>
            <Breadcrumb
                BreadcrumbTitle={data?.parent?.section_title}
                BreadcrumbActiveTitle={data?.product_name}
                extraLevel={true}
                extraLevelActiveTitle={data?.parent?.name}
            />
            <div className="DetailsPage">
                <ProductDetails
                    image={data?.main_image}
                    smallTitle={data?.parent?.section_title}
                    mainTitle={data?.product_name}
                    description={data?.full_description}
                    short_description={data?.short_description}
                    BrandDetails={true}
                    productSlugs={productSlugs[0]}
                    huceenImage={data}
                />

                {data?.product_sections?.length > 0 &&
                    <div className="ProDeailsSec pointsSec CustomPeding" id="MainCotentSliderSection">
                        <div className="container">
                            <div className="pointsGrid" id="contentSliderSection">
                                {data?.product_sections.map((item, index) => (
                                    <PointsItem key={index} title={item?.section_title} points={item?.section_content} cleanHTML={cleanHTML} />
                                ))}
                            </div>
                        </div>
                    </div>
                }

                {productSlugs[0] == "huceen" && data?.full_description &&
                    <div className="newProDetailTableItemMain CustomPeding">
                        <div
                            className="container"
                            dangerouslySetInnerHTML={{
                                __html: cleanHTML(data?.full_description),
                            }}
                        />
                    </div>
                }

                {data?.product_images?.length > 0 && !productSlugs[0] == "huceen" &&
                    <ProductImageSection
                        smallTitle={''}
                        mainTitle={"Product Image"}
                        images={data?.product_images}
                    />
                }
                {data?.product_specifications?.length > 0 && !productSlugs[0] == "huceen" &&
                    <ProductDetailsWithTabs
                        smallTitle={''}
                        mainTitle={'Technical Clarification'}
                        productSpecifications={data?.product_specifications} />
                }

                {data?.product_faqs?.length > 0 && !productSlugs[0] == "huceen" &&
                    <FAQSection
                        smallTitle={""}
                        mainTitle={"FAQS"}
                        faqData={data?.product_faqs}
                    />
                }
            </div>
        </>
    );
};

export default BrandDetails;