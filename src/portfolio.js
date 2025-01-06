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
  username: "Yuhan Pan",
  title: "👋 Hi there, I'm Yuhan",
  subTitle: [
    emoji("💻 4+ years of work experience as a DevOps Engineer"),
    emoji("💻 2+ years of work experience as a Full-Stack Software Developer"),
    emoji("💻 2+ years of work experience in team and project management"),
    emoji(
      "👀 I’m looking for job as a Full-stack Developer or DevOps Engineer."
    )
  ],
  resumeLink:
    "https://docs.google.com/document/d/1dHEOj-4GocPFqiXej0mltcRS2Pj11NN_NbCD5N9JkWY/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/maize1111",
  linkedin: "https://www.linkedin.com/in/yuhan-pan-62291b2b9/",
  gmail: " alessiopangamer@gmail.com",
  //  medium: "https://medium.com/@hannahsun.ca",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERIENCED DEVOPS DEVELOPER WHO ALSO HAS FULL-STACK EXPERIENCE",
  skills: [
    emoji("⚡ Proficient in DevOps."),
    emoji("⚡ Experienced in building and optimizing full-stack systems."),
    emoji(
      "⚡ Experienced in Data Center IT for financial and insurance sectors."
    ),
    emoji(
      "⚡ Adept at collaborating with cross-functional teams to deliver solutions that balance technical efficiency with business goals."
    ),
    emoji(
      "⚡ Skilled in ensuring system stability, performance tuning, and reducing development time through process improvements."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  // Both Font Awesome and custom image icons
  // iconUrls are from https://icons8.com/icons/

  softwareSkills: [
    {
      skillName: "Java",
      iconUrl:
        "https://img.icons8.com/?size=100&id=13679&format=png&color=000000"
    },
    {
      skillName: "python",
      iconUrl:
        "https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
    },
    {
      skillName: "cpp",
      iconUrl:
        "https://img.icons8.com/?size=100&id=tmthf8xybKpa&format=png&color=000000"
    },
    {
      skillName: "Git",
      iconUrl:
        "https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
    },
    {
      skillName: "Spring",
      iconUrl:
        "https://img.icons8.com/?size=100&id=90519&format=png&color=000000"
    },
    {
      skillName: "MySQL",
      iconUrl:
        "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
    },
    {
      skillName: "Redis",
      iconUrl:
        "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000"
    },
    {
      skillName: "NATS",
      iconUrl:
        "https://docs.nats.io/~gitbook/image?url=https%3A%2F%2F1487470910-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-LqMYcZML1bsXrN3Ezg0%252Favatar.png%3Fgeneration%3D1571848018902627%26alt%3Dmedia&width=32&dpr=1&quality=100&sign=b857e0c2&sv=2"
    },
    {
      skillName: "ElasticSearch",
      iconUrl:
        "https://img.icons8.com/?size=100&id=aGBLcugRkYpT&format=png&color=000000"
    },
    {
      skillName: "Kibana",
      iconUrl:
        "https://img.icons8.com/?size=100&id=viVPreeQBfSH&format=png&color=000000"
    },
    {
      skillName: "Docker",
      iconUrl:
        "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000"
    },
    {
      skillName: "Kubernetes",
      iconUrl:
        "https://img.icons8.com/?size=48&id=cvzmaEA4kC0o&format=png&color=000000"
    },
    {
      skillName: "Jenkins",
      iconUrl:
        "https://img.icons8.com/?size=100&id=41317&format=png&color=000000"
    },
    {
      skillName: "aws",
      iconUrl:
        "https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
    },
    {
      skillName: "Prometheus",
      iconUrl:
        "https://img.icons8.com/?size=100&id=Ei4ZhVQvIMHE&format=png&color=000000"
    },
    {
      skillName: "Grafana",
      iconUrl:
        "https://img.icons8.com/?size=100&id=bMkmDxPRZAld&format=png&color=000000"
    },
    {
      skillName: "Pinpoint",
      iconUrl: "https://avatars.githubusercontent.com/u/72777607?s=48&v=4"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "New York Institute of Technology - Vancouver",
      logo: require("./assets/images/nyitLogo.png"),
      subHeader: "Master of Science in Cybersecurity",
      duration: "September 2023 - December 2024",
      //      desc: "Ranked in the top 10% of my major. Participated in the research of Robotics and published 2 patterns. Participated in the RoboCup Soccer team(TJArk) and won the China Regional Championship, advancing to the quarterfinals in the World Cup.",
      desc: "GPA: 3.8/4.0",
      descBullets: [
        "Post-Graduate Teaching Assistant for two courses: Intrusion Detection and Advanced Network Security"
      ]
    },
    {
      schoolName: "Shanghai University",
      logo: require("./assets/images/shangdaLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2014 - July 2018"
      // desc: "TODO add some description",
      // descBullets: ["TODO add some awards and certificates"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full-Stack", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
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
      company: "New York Institute of Technology",
      companylogo: require("./assets/images/nyitLogo.png"),
      date: "May 2024 – December 2024",
      desc: "Assisted Professor Sara Khanchi in teaching two advanced cybersecurity courses: Intrusion Detection and Advanced Network Security.",
      descBullets: [
        "Facilitated lab demonstrations and guided students through hands-on exercises.",
        "Addressed students' technical and course-related questions during office hours.",
        "Graded exams and assignments, ensuring timely and constructive feedback."
      ]
    },
    {
      role: "DevOps Engineer & Project Manager",
      company: "China Life Insurance - Data Center",
      companylogo: require("./assets/images/china_life_insurance_co_ltd_logo.jpeg"),
      date: "June 2020 – August 2022",
      desc: "Managed 5 critical business systems, including the Company Collaboration Platform, Digital Seal System, Digital Signature System, Data Quality Management Platform, and Enterprise System Monitoring System, supporting a peak transaction volume of 350,000 daily.",
      descBullets: [
        "Responsible for DevOps operations, system administration, and project management.",
        "Executed deployments, system upgrades, and performance monitoring to ensure system and application availability.",
        "Enhanced system security, resolved incidents promptly, and provided customer IT support."
      ]
    },
    {
      role: "Full-stack Developer & DevOps Engineer",
      company: "China Life Insurance - Data Center",
      companylogo: require("./assets/images/china_life_insurance_co_ltd_logo.jpeg"),
      date: "July 2018 – June 2020",
      desc: "Focused on full-stack development and DevOps practices, supporting critical systems and delivering high-impact solutions for business needs.",
      descBullets: [
        "Designed and developed a batch job monitoring system with a Vue.js front-end and Spring MVC back-end architecture.",
        "Implemented feature enhancements and performance optimizations for the Data Quality Management Platform using Spring Boot.",
        "Ensured system reliability and stability as DevOps Engineer for the Insurance Underwriting Application."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
// TODO 在github上维护一两个自己的项目之后再放出来

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "School Projects",
  subtitle:
    "SOME PROJECTS AND COMPANIES THAT I WORKED WITH DURING MY STUDENT PERIOD",
  projects: [
    {
      image: require("./assets/images/archethought_logo.jpeg"),
      projectName: "A New Relation Service System Based on NATs and FastAPI",
      projectDesc:
        "[Sep 2024 - Dec 2024] This project involves building a new human relations service system using NATS and FastAPI, in collaboration with Archethought Inc. Associated with New York Institute of Technology - Vancouver",
      footerLink: [
        {
          name: "Project Certificate",
          url: "https://media.licdn.com/dms/image/v2/D4E2DAQEZcSxfchNzbw/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1733369630784?e=1736661600&v=beta&t=kAi3S5JHN-AdtxGSDi-VV5yyBPdNwN_3K_j2VMNvyIc"
        },
        {
          name: "Certificate from Archethought Inc.",
          url: "https://media.licdn.com/dms/image/v2/D4D2DAQGwR6P7YnKBJQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1733521264270?e=1736661600&v=beta&t=G-EyzgqXPUAm_ROctKvvElZyvsmxxb5fgdKiMtReepA"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/BaoSteel.png"),
      projectName: "Metal Surface Crack Detection Based on OpenCV and Qt",
      projectDesc:
        "[Jan 2018 - Jun 2018] This project involves building a new crack detection system for metal surfaces using computer vision (OpenCV), in collaboration with China Baowu Steel Group Corp., Ltd. Associated with Sahnghai University."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title:
        "System Integration Project Management Engineer Certificate - Intermediate Level",
      subtitle:
        "A nationally recognized certification issued by the Ministry of Industry and Information Technology (MIIT) of China, validating expertise in system integration technologies and project management.",
      image: require("./assets/images/logo_rk1.jpg"),
      imageAlt: "China Computer Qualification Certification Logo",
      footerLink: []
    },
    {
      title: "EXIN DevOps Foundation Certificate",
      subtitle:
        "Demonstrates knowledge of DevOps principles and practices, including their origins, benefits, and applications within organizations.",
      image: require("./assets/images/EXIN_Badge_Module_Foundation_DevOps-1024x1024.png"),
      imageAlt: "EXIN DevOps Foundation Certificate",
      footerLink: []
    }
    //    ,{
    //      title: "PWA Web App Developer",
    //      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //      image: require("./assets/images/pwaLogo.webp"),
    //      imageAlt: "PWA Logo",
    //      footerLink: [
    //        {
    //            name: "Certification",
    //            url: ""},
    //        {
    //          name: "Final Project",
    //          url: "https://pakistan-olx-1.firebaseapp.com/"
    //        }
    //      ]
    //    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@hannahsun.ca/deploying-blog-using-wordpress-on-aws-with-docker-9f0f0f163f92",
      title: "Deploying Blog Using WordPress on AWS with Docker",
      description:
        "Learn how to deploy a WordPress blog on AWS using Docker, combining cloud infrastructure with containerization for a scalable, efficient setup. This guide showcases my technical ability in cloud services and Docker orchestration."
    },
    {
      url: "https://medium.com/@hannahsun.ca/building-and-deploying-a-personal-portfolio-website-with-github-pages-1104715acc4a",
      title:
        "Building and Deploying a Personal Portfolio Website with GitHub Pages",
      description:
        "Learn how to build and deploy your own developer portfolio using React, GitHub Pages, and custom icons to showcase your skills in style."
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: " alessiopangamer@gmail.com"
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
  isHireable,
  resumeSection
};
