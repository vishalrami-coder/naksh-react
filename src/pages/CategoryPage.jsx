import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesListing } from "../features/blog/blogSlice";
import BlogCard from "../components/BlogCard";
import Breadcrumb from "../components/breadcrumb";
import "../assets/css/blogPage.css";
import { ShimmerText } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import noDataFoundImg from '../assets/images/noDataFound.jpg'
import BlogBread from "../assets/images/breadcum/blogs.webp";

const CategoryPage = () => {

    const { slug } = useParams();
    const dispatch = useDispatch();

    const { categoryBlogs, loadingCategoryBlogs } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(fetchCategoriesListing(slug));
    }, [slug, dispatch]);


    return (
        <div className="blogPage">
            <Breadcrumb
                BreadcrumbTitle="Blogs"
                BreadcrumbActiveTitle="Blogs"
                backgroundImage={`url(${BlogBread})`}
            />

            <div className="blogListing CustomPeding">
                <div className="container">

                    {/* 🔥 Shimmer */}
                    {loadingCategoryBlogs && (
                        <div className="blogListingGrid">
                            {Array(6)
                                .fill("")
                                .map((_, index) => (
                                    <div className="blog-card" key={index}>
                                        <div className="blogImg" >
                                            <ShimmerText className="blogImgShimmer-box" line={1} />
                                        </div>

                                        <div className="blog-content">
                                            <ShimmerText className="blogDateShimmer-box" line={1} />
                                            <ShimmerText className="blogTitleShimmer-box" line={1} />
                                        </div>
                                    </div >

                                ))}
                        </div>
                    )}

                    {/* ✅ Actual Data */}
                    {!loadingCategoryBlogs && (
                        <div className="blogListingGrid">
                            {categoryBlogs?.data?.map((blog, index) => (
                                <BlogCard key={index} blog={blog} />
                            ))}
                        </div>
                    )}


                    {!loadingCategoryBlogs && categoryBlogs?.data?.length === 0 && (
                        <div className="NoDataFound">
                            <img src={noDataFoundImg} alt="" />

                            <h5>No Category Found — Please Try Another Category </h5>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default CategoryPage;