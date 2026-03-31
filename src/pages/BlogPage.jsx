import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blog/blogSlice";
import BlogCard from "../components/BlogCard";
import Breadcrumb from "../components/breadcrumb";
import "../assets/css/blogPage.css";
import { ShimmerText } from "react-shimmer-effects";


const BlogPage = () => {
    const dispatch = useDispatch();
    const { blogs, loading } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    return (
        <div className="blogPage">
            <Breadcrumb
                BreadcrumbTitle="Blogs"
                BreadcrumbActiveTitle="Blogs"
            />

            <div className="blogListing CustomPeding">
                <div className="container">

                    {/* 🔥 Shimmer */}
                    {loading && (
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
                    {!loading && (
                        <div className="blogListingGrid">
                            {blogs?.data?.map((blog, index) => (
                                <BlogCard key={index} blog={blog} />
                            ))}
                        </div>
                    )}



                </div>
            </div>
        </div>
    );
};

export default BlogPage;