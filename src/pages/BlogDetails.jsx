import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogDetails, fetchBlogsCategories } from "../features/blog/blogSlice";
import Breadcrumb from "../components/breadcrumb";
import "../assets/css/BlogDetails.css";
import { FaCaretRight } from "react-icons/fa6";
import { ShimmerText } from "react-shimmer-effects";


const BlogDetails = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { blogDetails, loading, blogsCategories } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(fetchBlogDetails(slug));
        dispatch(fetchBlogsCategories()); // ✅ ADD THIS
    }, [slug, dispatch]);

    return (
        <div className="blogDetails">
            <Breadcrumb
                BreadcrumbTitle="Blogs"
                BreadcrumbActiveTitle="Blogs"
            />

            {loading &&
                <div className="BlogDetailsWapper CustomPeding BlogDetailsLoaderWapper">
                    <div className="container">
                        <div className="BlogDetailsGrid">
                            <div className="BlogDetailsItem">
                                <div className="BlogDetailsImg">
                                    <ShimmerText className="BlogDetailsImgShimmer-box" line={1} />
                                </div>
                                <ShimmerText className="blogDetailsTitle blogDetailsTitleShimmer-box" line={1} />
                                <ShimmerText className="BlogDetailsContent BlogDetailsContentShimmer-box" line={5} gap={10} />
                            </div>
                            <div className="BlogDetailsCategoriesItem">
                                <ShimmerText className="BlogDetailsCategoriesTitleShimmer-box" line={1} gap={10} />
                                <div className="BlogDetailsCategoriesListing">
                                    <ul>
                                        {Array(6)
                                            .fill("")
                                            .map((_, index) => (
                                                <ShimmerText key={index} className="BlogDetailsContentShimmer-box" line={1} gap={10} />
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

            {!loading && blogDetails && (
                <>
                    <div className="BlogDetailsWapper CustomPeding">
                        <div className="container">
                            <div className="BlogDetailsGrid">
                                <div className="BlogDetailsItem">
                                    <div className="BlogDetailsImg">
                                        <img src={blogDetails?.data?.image} alt="" />
                                    </div>

                                    <h1 className="blogDetailsTitle">{blogDetails?.data?.page_title}</h1>
                                    <div className="BlogDetailsContent" dangerouslySetInnerHTML={{
                                        __html: blogDetails?.data?.page_description,
                                    }} />
                                </div>
                                <div className="BlogDetailsCategoriesItem">
                                    <h2>Categories</h2>
                                    <div className="BlogDetailsCategoriesListing">
                                        <ul>
                                            {blogsCategories?.data?.map((item, index) => (
                                                <li key={index} onClick={() => navigate(`/category/${item.category_slug}`)}>
                                                    <FaCaretRight />
                                                    {item?.category_name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }

        </div >
    );
};

export default BlogDetails;