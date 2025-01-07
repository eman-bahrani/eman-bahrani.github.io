/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Eman",
  title: "Welcome! I'm Eman",
  subTitle: emoji(
    "Connecting the dots between genomics and public health. Here's where data science meets disease prevention. Ready to make an impact? Let's chat!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/15_zuGa-lPBUDO5dWVathj8ZOqvsymaBl/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/eman-bahrani",
  linkedin: "http://linkedin.com/in/emanbahrani/",
  twitter: "https://x.com/emanbahrani",
  gmail: "eman.bahrani97@gmail.com",
  gitlab: "https://gitlab.com/saadpasta", 
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta", 
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA-DRIVEN PRECISION PUBLIC HEALTH SOLUTIONS",
  skills: [
    emoji(
      "🧬 Leveraging computational tools and genomics for disease prevention"
    ),
    emoji("📊 Translating complex health data into actionable insights"),
    emoji(
      "🌍 Developing evidence-based public health programs and policies"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "R",
    fontAwesomeClassname: "fab fa-r-project"
  },
  {
    skillName: "python", 
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "sql",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "powerbi",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  // Second row - Analysis tools/skills
  {
    skillName: "statistics",
    fontAwesomeClassname: "fas fa-chart-bar" 
  },
  {
    skillName: "genomics",
    fontAwesomeClassname: "fas fa-dna"
  },
  {
    skillName: "research",
    fontAwesomeClassname: "fas fa-search"
  }
],
display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Queen's University Belfast",
      logo: require("./assets/images/queensLogo.png"),
      subHeader: "Master of Science in Bioinformatics and Computational Genomics",
      duration: "September 2023 - December 2024",
      desc: "Graduated with distintion, elected Course Rep, and contributed to research in Dunne's Lab.",
      descBullets: [
        "Utilised R packages and various open source databases to analyse clinical and gene expression data.",
        "Conducted bioinformatics analysis as part of my master's thesis under the supervision of Dr Philip Dunne.",
        "Collaborated with the research group to gain new molecular insights into polyps for the prognosis of colorectal cancer through big data analytics techniques."
      ]

    },
    {
      schoolName: "Qatar University",
      logo: require("./assets/images/QULogo.png"),
      subHeader: "Bachelor of Science (Hons) in Public Health conc. Health Management",
      duration: "February 2016 - June 2019",
      desc: "Graduated with Honours (GPA 3.89) on the Vice President's List of High Achievers.",
      descBullets: ["Interned at the Cancer Screening Clinic at Leabaib PHCC.",
        "Volunteer Public Health Program Evaluator.",
        "Honours Student Advisor and Researcher"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & Bioinformatics",
      progressPercentage: "90%"
     },
     {
      Stack: "Statistical Analysis",
      progressPercentage: "88%"
     },
     {
      Stack: "Project Management",
      progressPercentage: "85%"
     },
     {
      Stack: "Strategic Planning",
      progressPercentage: "80%"
     },
     {
      Stack: "Public Speaking",
      progressPercentage: "75%"
     }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Public Health Professional",
      company: "Gulf CDC",
      companylogo: require("./assets/images/gulfcdcLogo.png"),
      date: "Oct 2024 – Present",
      descBullets: [
        "Leading NCD public health programs and policies across GCC member states",
        "Creating monitoring and evaluation frameworks with World Bank collaboration",
        "Managing Health Promotion PCN for data-driven public health initiatives"
      ]
    },
    {
      role: "Master's Student Researcher",
      company: "Dunne Lab, PGJCCR, QUB",
      companylogo: require("./assets/images/qubLogo.png"),
      date: "May 2024 – Sept 2024",
      descBullets: [
        "Utilized R packages for clinical and gene expression data analysis",
        "Conducted bioinformatics analysis for colorectal cancer research",
        "Collaborated with research group on big data analytics techniques"
      ]
    },
    {
      role: "Research Analyst",
      company: "Warsha Consultancy (with AUB)",
      companylogo: require("./assets/images/warshaLogo.png"),
      date: "Dec 2023 – Jul 2024",
      descBullets: [
        "Conducting data collection interviews with working women",
        "Contributing insights and expertise in project meetings and workshops"
      ]
    },
    {
      role: "International Programs Manager",
      company: "Shamsaha Women's Center",
      companylogo: require("./assets/images/shamsahaLogo.png"),
      date: "Aug 2022 - Sept 2023",
      descBullets: [
        "Led research projects and expanded program services across 6 countries",
        "Managed digitization of NACP women's crisis advocacy training",
        "Supervised team of 130+ volunteers and analyzed program impact"
      ]
    },
    {
      role: "Volunteers and Outreach Coordinator",
      company: "Shamsaha Women's Center",
      companylogo: require("./assets/images/shamsahaLogo.png"),
      date: "Nov 2020 - Aug 2022",
      descBullets: [
        "Managed team of 110 Crisis Advocates and quantified initiative impact",
        "Developed educational materials based on target audience analysis",
        "Designed and delivered workshops on gender equality and workplace safety"
      ]
    },
    {
      role: "Work Placement",
      company: "Ministry of Health, Bahrain",
      companylogo: require("./assets/images/mohLogo.png"),
      date: "Oct 2019 - Dec 2019",
      descBullets: [
        "Conducted biostatistics analysis for Infection Control Department",
        "Delivered health promotion workshops and evaluated project effectiveness",
        "Assessed 'Healthy Mall' and 'Healthy Cities' initiatives"
      ]
    }
  ]
 };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Featured Achievements And Certifications"),
  subtitle:
    "Selected certifications and awards. View my LinkedIn profile for a complete list.",

    achievementsCards: [
      {
        title: "Nova Talent Member",
        subtitle: "Selected to join the exclusive network of top 3% global talent driving innovation and leadership in their fields, March 2024",
        image: require("./assets/images/novaLogo.png"),
        imageAlt: "Nova Logo",
      },
      {
        title: "QUB's Vice Chancellor's International Attainment Scholarship",
        subtitle: "Awarded prestigious scholarship for postgraduate studies based on academic excellence in 2023",
        image: require("./assets/images/qubLogo.png"),
        imageAlt: "QUB Logo",
        // footerLink removed as not needed
      },
      {
        title: "Bioinformatics for Biologists",
        subtitle: "Advanced training in analyzing genomics datasets from Wellcome Connecting Science, July 2024",
        image: require("./assets/images/wellcomeLogo.png"),
        imageAlt: "Wellcome Logo",
      },
      {
        title: "Predictive Modelling Training",
        subtitle: "Specialized training in healthcare data modeling and analysis from Gulf CDC, Nov 2024",
        image: require("./assets/images/gulfcdcLogo.png"),
        imageAlt: "Gulf CDC Logo",
      },
      // {
      //   title: "McKinsey Forward Program",
      //   subtitle: "Completed comprehensive business and leadership development program, Dec 2021",
      //   image: require("./assets/images/mcKinseyLogo.png"),
      //   imageAlt: "McKinsey Logo",
      // },
      {
        title: "Global Shapers Community Leadership",
        subtitle: "Appointed Impact Officer of Manama Hub (2021) and Health & Aid Committee Leader (2022-2023)",
        image: require("./assets/images/MHLogo.png"),
        imageAlt: "WEF Logo",
      },
      {
        title: "Women's Digital Festival Moderator",
        subtitle: "Led panel discussion on 'Building Resilient Healthcare Systems in a Changing World' at womenpower-summit.com, 2020",
        image: require("./assets/images/wdfLogo.png"),
        imageAlt: "WDF Logo",
      },
    ],
    display: true
   };
   


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in touch!"),
  subtitle:
    "Feel Free to Reach Out for Projects or Just a Friendly Hello",
  // number: "+92-0000000000",
  // email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "EmanAlBahrani", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
