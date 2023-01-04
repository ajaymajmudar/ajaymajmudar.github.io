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
  username: "Ajay Majmudar",
  title: "Hi, I'm Ajay",
  subTitle: emoji(
    "I am a M.S. Analytics student at Georgia Tech 🐝 and an aspiring Data Scientist! \nScroll to find out more about my work!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/10Z2_7AYFktDQA2Xvilr4lKAvLcSbM-_g/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ajaymajmudar",
  linkedin: "https://www.linkedin.com/in/ajaymajmudar/",
  gmail: "ajaymajmudar@gatech.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};


// Skills Section

// Skills Section

const skillsSection = {
  title: "About Me",
  //subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "✅ I'm a Master's in Analytics student at Georgia Tech graduating in May 2023 🎓!"
    ),
    emoji("✅ I graduated from Georgia Tech with a B.S. in Industrial Engineering ⚙️ and have a passion for data science 📊."),
    emoji(
      "✅ Currently, looking to expand my data science skillset 🧰 and work on cool projects 👨‍💻."
    ),
    emoji(
      "✅ In my free time, I enjoy watching sports 🏀🏈⚾️⚽️ , cooking 🧑🏽‍🍳, and traveling ✈️."
    )
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "R",
    fontAwesomeClassname: "fab fa-r-project"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Tableau",
    fontAwesomeClassname: "fa fa-bar-chart"
  },
  {
    skillName: "Excel",
    fontAwesomeClassname: "fas fa-file-excel"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Simio",
    fontAwesomeClassname: "fas fa-desktop"
  },
  {
    skillName: "D3.js",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "HTML",
    fontAwesomeClassname: "fab fa-html5"
  },

  {
    skillName: "PySpark",
    fontAwesomeClassname: "fas fa-sparkles"
  },
  
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Markdown",
    fontAwesomeClassname: "fab fa-markdown"
  },
  {
    skillName: "macOS",
    fontAwesomeClassname: "fab fa-apple"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gt.jpeg"),
      subHeader: "Master of Science in Analytics",
      duration: "August 2022 - May 2023",
      desc: "Computational Data Analytics Track"
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gt.jpeg"),
      subHeader: "Bachelor of Science in Industrial Engineering",
      duration: "August 2018 - May 2022",
      desc: "Concentration: Data Science/Analytics"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  display: false,
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Teaching Assistant",
      company: "Georgia Tech College of Engineering",
      companylogo: require("./assets/images/gt-coe.png"),
      date: "August 2022 - Present",
      desc:
       "GTA for ISYE 6644 Simulation and Modeling for Engineers",
      descBullets: []
    },
    {
      role: "Group Analytics Intern",
      company: "Aflac",
      companylogo: require("./assets/images/aflac.jpg"),
      date: "June 2022 - August 2022",
      desc: "Executed a data science project forecasting future staffing levels for 5 different business units utilizing supervised machine learning models",
      descBullets: []
    },
    {
      role: "Undergraduate Teaching Assistant",
      company: "Georgia Tech College of Engineering",
      companylogo: require("./assets/images/gt-coe.png"),
      date: "June 2021 - May 2022",
      desc:
      "UTA for ISYE 3044 Simulation Analysis & ISYE 3103 Supply Chain Modeling",
      descBullets: []
    },
    {
      role: "Supply Chain Analytics Intern",
      company: "NCR Corporation",
      companylogo: require("./assets/images/ncr.png"),
      date: "May 2021 - August 2021",
      desc:
        "Implemented an analytics project to recreate a complex inventory input/output model using Tableau and SQL. Additionally, I oversaw planning aspects of 200 inventory parts through forecasting methods to increase fulfillment levels by 10%",
      descBullets: []
    },
    {
      role: "Hardware Operations Intern",
      company: "NCR Corporation",
      companylogo: require("./assets/images/ncr.png"),
      date: "June 2020 - August 2020",
      desc:
      "Overhauled team operations improving team efficiency by 7% through creation of an automated inventory tracking tool in Excel, conducted revenue analysis, and produced fulfillment visualizations in Tableau",
      descBullets: []
    },
    {
      role: "Customer Success Intern",
      company: "NCR Corporation",
      companylogo: require("./assets/images/ncr.png"),
      date: "May 2019 – August 2019",
      desc:
        "Integrated a standard operating procedure for team analysts and orchestrated data entry for 200 clients",
      descBullets: []
    },
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
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "",
  email_address: "ajaymajmudar@gatech.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
