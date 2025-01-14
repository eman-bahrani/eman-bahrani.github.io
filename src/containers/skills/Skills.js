import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio"; // Removed `illustration` since it's no longer needed
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import EmanExplaining from "../../assets/images/EmanExplaining.jpg";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {/* Fade effect for the image */}
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {/* Only show the EmanExplaining image */}
            <img src={EmanExplaining} alt="Eman Explaining"></img>
          </div>
        </Fade>

        {/* Fade effect for the text */}
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}