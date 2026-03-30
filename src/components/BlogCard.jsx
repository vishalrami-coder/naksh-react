import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/BlogCard.css'
import DOMPurify from "dompurify";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div
      className="blog-card"
      onClick={() => navigate(`/blogs/${blog?.slug}`)}
    >
      <div className="blogImg" >
        <img src={blog?.image} alt={blog?.title} />
      </div>

      <div className="blog-content">
        <span>{formatDate(blog?.created_at)}</span>
        <h3>{blog?.page_title}</h3>
        {/* <p dangerouslySetInnerHTML={{
          __html: cleanHTML(blog?.page_description),
        }} /> */}
      </div>
    </div >
  );
};

export default BlogCard;