import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Breadcrumb from "../components/breadcrumb";
import ProductDetails from "../components/productDetails";
import ProductCard from "../components/productCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/CategoriesSlice";
import { useNavigate } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import ProductTabs from "../components/ProductTabs";
import { ShimmerText } from "react-shimmer-effects";
import BrandBread from "../assets/images/breadcum/product.webp";


const Categories = () => {
    // const { slug } = useParams();
    const { "*": fullPath } = useParams();
    const slugs = fullPath?.split("/") || [];
    const slug = slugs[slugs?.length - 1];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, loading, error } = useSelector((state) => state.categories);

    useEffect(() => {
        if (slug) {
            dispatch(fetchCategories(slug)); // 🔥 slug pass karo
        }
    }, [slug, dispatch]);

    const formatSlug = (slug) => {
        return slug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const parentImage = data?.parent?.images;
    const isImageEmpty = !parentImage || parentImage === "null";

    const tabsData = Object.keys(data?.parent?.products || {}).map((key) => ({
        title: key,
        products: data?.parent?.products[key],
    }));

    return (
        <>
            <Breadcrumb
                BreadcrumbTitle={data?.parent?.name}
                BreadcrumbActiveTitle={data?.parent?.name}
                backgroundImage={`url(${BrandBread})`}
            />

            <div className="innerPage">
                {loading ? (
                    <div className="productDetails CustomPeding borderBottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-5">
                                    <div className="aboutImg p-0">
                                        <ShimmerText className="aboutImgShimmer-box" line={1} />
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="col-sm-12 col-md-6 col-lg-7">
                                    <div className="aboutContent">
                                        <div className="secTitle">
                                            <ShimmerText className="spanShimmer-box" line={1} />
                                            <ShimmerText className="h2shimmer-box" line={1} />
                                        </div>
                                        <div className="desc">
                                            <ShimmerText line={3} gap={10} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                ) :
                    <ProductDetails
                        image={
                            isImageEmpty
                                ? data?.parent?.image_url
                                : parentImage
                        }
                        smallTitle={data?.parent?.section_title}
                        mainTitle={data?.parent?.section_subtitle}
                        productListing={!isImageEmpty}
                        ProductNullImg={isImageEmpty}
                        BrandDetails={false}
                        huceenImage={data}
                        description={
                            data?.parent?.section_content
                                ? [data?.parent?.section_content]
                                : []
                        }
                    />
                }

                <div className="productListing bgGrey CustomPeding">
                    <div className="container">
                        {loading ? (
                            <div className="productGrid">
                                {Array(4)
                                    .fill("")
                                    .map((_, index) => (
                                        <div className="productItem" key={index}>
                                            <div className="productImage p-0">
                                                <ShimmerText className="aboutImgShimmer-box" line={1} />
                                            </div>
                                            <div className="productContent">
                                                <ShimmerText className="aboutImgShimmer-box" line={1} />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ) : (data?.parent?.products?.length > 0 && data?.data?.length > 0) ? (
                            <>
                                <div className="productGrid">
                                    {data?.data?.map((item, index) => (
                                        <ProductCard
                                            key={index}
                                            image={item?.image_url}
                                            title={item?.section_title}
                                            brand={formatSlug(data?.parent?.name)}
                                            onClick={() => {
                                                navigate(`/productsdetails/${fullPath}/${item?.slug}`);
                                            }}
                                        />
                                    ))}
                                    {data?.parent?.products?.map((item, index) => (
                                        <ProductCard
                                            key={index}
                                            image={item?.main_image}
                                            title={item?.product_name}
                                            brand={formatSlug(data?.parent?.name)}
                                            onClick={() => {
                                                navigate(`/productsdetails/${fullPath}/${item?.slug}`);
                                            }}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : data?.parent?.products?.length > 0 ? (
                            <div className="productGrid">
                                {data?.parent?.products?.map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        image={item?.main_image}
                                        title={item?.product_name}
                                        brand={formatSlug(data?.parent?.name)}
                                        onClick={() => {
                                            navigate(`/productsdetails/${fullPath}/${item?.slug}`);
                                        }}
                                    />
                                ))}
                            </div>
                        ) : tabsData?.length > 0 ? (
                            <ProductTabs tabsData={tabsData} />
                        ) : (
                            <div className="productGrid">
                                {data?.data?.map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        image={item?.image_url}
                                        title={item?.name}
                                        brand={formatSlug(data?.parent?.name)}
                                        onClick={() => {
                                            navigate(`/products/${fullPath}/${item?.slug}`);
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>


                {data?.parent?.faq_items?.length > 0 &&
                    <FAQSection
                        smallTitle={data?.parent?.faq_section_title}
                        mainTitle={data?.parent?.faq_section_subtitle}
                        faqData={data?.parent?.faq_items}
                    />
                }

            </div >

        </>
    );
};

export default Categories;