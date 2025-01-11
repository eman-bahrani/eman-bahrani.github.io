import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogList.scss";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch your blog posts here.
    // This could be from an API, markdown files, or any other source.
    // For demonstration, we'll use static data.
    const fetchBlogs = async () => {
      const data = [
        {
          id: 1,
          title: "First Blog Post",
          summary: "This is a summary of the first blog post.",
          link: "/blogs/first-blog-post",
        },
        {
          id: 2,
          title: "Second Blog Post",
          summary: "This is a summary of the second blog post.",
          link: "/blogs/second-blog-post",
        },
        // Add more blog posts as needed
      ];
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <h2>{blog.title}</h2>
          <p>{blog.summary}</p>
          <Link to={blog.link}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;