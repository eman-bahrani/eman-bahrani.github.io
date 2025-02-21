import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import { StyleProvider } from "../../contexts/StyleContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import blogPosts from "../BlogPosts/blogs.json";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { linkName } = useParams();
  const [blog, setBlog] = useState(null);

  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    // Directly use the imported blogPosts
    const fetchBlog = () => {
      try {
        const data = blogPosts;
        console.log(data);

        // Find the blog post with the matching ID
        const foundBlog = data.find((blog) => blog.linkName === linkName);

        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          console.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlog();
  }, [linkName]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const processedContent = isDark 
  ? blog.content.replace(/<p(?!\s*class=)/g, '<p class="dark-mode"') 
  : blog.content;

  return (
    <div className={isDark ? "dark-mode" : ""}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <main className="blog-detail-container">
          <h1 className={isDark ? "dark-mode" : null} >{blog.title}</h1>
          {/* Since your content might contain HTML, use dangerouslySetInnerHTML */}
          <div dangerouslySetInnerHTML={{ __html: processedContent }}></div>
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default BlogDetail;