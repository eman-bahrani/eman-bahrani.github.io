import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import { StyleProvider } from "../../contexts/StyleContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    // Fetch the blog post based on the ID
    const fetchBlog = async () => {
      // Replace with your data fetching logic
      const data = {
        id: 1,
        title: "First Blog Post",
        content: "This is the detailed content of the first blog post.",
      };

      if (id === "first-blog-post") {
        setBlog(data);
      }
      // Add more conditions or fetch from an API
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <main className="blog-detail-container">
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default BlogDetail;