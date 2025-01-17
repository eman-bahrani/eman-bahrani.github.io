import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";
import logo from "../../assets/images/emanLogoSquare.png"

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  // Define your blog items here. Ideally, this can be imported from a config or fetched dynamically.
  const blogItems = [
    {
      id: "genomes-to-communities",
      title: "From Genomes to Communities",
      link: "/blogs/genomes-to-communities"
    },
    {
      id: "ethical-challenges-pph",
      title: "Ethical Challenges in PPH",
      link: "/blogs/ethical-challenges-pph"
    }
    // Add more blog items as needed
  ];

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          {/* <span className="grey-color"> &lt;</span> */}
          {/* <span className="logo-name">{greeting.username}</span> */}
          {/* <span className="grey-color">/&gt;</span> */}
          {<img src={logo} alt="logo"></img>}
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {/* {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )} */}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li className="dropdown">
              {/* Hidden checkbox for mobile toggle */}
              <input
                type="checkbox"
                id="blog-dropdown"
                className="dropdown-checkbox"
              />
              {/* Label acting as toggle button */}
              <label htmlFor="blog-dropdown" className="dropdown-label">
                <a href="/blogs" id="blogs">
                  Blogs
                </a>
                <i className="arrow"></i>
              </label>
              {/* Dropdown Menu */}
              <ul className="dropdown-menu">
                {blogItems.map(blog => (
                  <li key={blog.id}>
                    <a href={blog.link}>{blog.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          )}
          {/* {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )} */}
          {/* {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )} */}
          <li>
            <a href="#contact">Get In Touch</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
