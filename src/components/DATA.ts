import NextJS from "./icons/technical/NextJS.astro";
import NodeJS from "./icons/technical/NodeJS.astro";
import ExpressJS from "./icons/technical/ExpressJS.astro";
import Typescript from "./icons/technical/Typescript.astro";
import MongoDB from "./icons/technical/MongoDB.astro";
import Redis from "./icons/technical/Redis.astro";
import Solidity from "./icons/technical/Solidity.astro";
import Devops from "./icons/technical/Devops.astro";
import Blockchain from "./icons/technical/Blockchain.astro";
import Solana from "./icons/technical/Solana.astro";
import Kubernetes from "./icons/technical/Kubernetes.astro";
import AstroIcon from "./icons/technical/AstroIcon.astro";
import Tailwind from "./icons/technical/Tailwind.astro";
import ReactJS from "./icons/technical/ReactJS.astro";
import Firebase from "./icons/technical/Firebase.astro";
import Bootstrap from "./icons/technical/Bootstrap.astro";
import Sass from "./icons/technical/Sass.astro";
import Javascript from "./icons/technical/Javascript.astro";
import Java from "./icons/technical/Java.astro";
import Python from "./icons/technical/Python.astro";
import OCI from "./icons/technical/OCI.astro";
import Oracle from "./icons/technical/Oracle.astro";
import Shell from "./icons/technical/Shell.astro";
import SQL from "./icons/technical/SQL.astro";
import CPP from "./icons/technical/CPP.astro";
import WebRTC from "./icons/technical/WebRTC.astro";
import Git from "./icons/tools/Git.astro";
import Postman from "./icons/tools/Postman.astro";
import Docker from "./icons/tools/Docker.astro";
import GitHubColor from "./icons/tools/GitHubColor.astro";
import GitLab from "./icons/tools/GitLab.astro";
import Vercel from "./icons/tools/Vercel.astro";
import VSCode from "./icons/tools/VSCode.astro";
import MacOS from "./icons/tools/macOS.astro";
import Rollup from "./icons/tools/Rollup.astro";

const PROJECTTAGS = {
  NODE: {
    name: "Node.js",
    class: "bg-[#222222] text-white",
    icon: NodeJS,
  },
  EXPRESS: {
    name: "Express.js",
    class: "bg-[#323232] text-white",
    icon: ExpressJS,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#3178c661] text-white",
    icon: Typescript,
  },
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  REACT: {
    name: "React",
    class: "bg-[#23272f] text-white",
    icon: ReactJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-[#3f2c42] text-white",
    icon: Bootstrap,
  },
  SASS: {
    name: "SASS",
    class: "bg-[#6b717f] text-white",
    icon: Sass,
  },
  MONGODB: {
    name: "MongoDB",
    class: "bg-[#001e2b] text-white",
    icon: MongoDB,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#5e5e5e] text-white",
    icon: Firebase,
  },
  REDIS: {
    name: "Redis",
    class: "bg-[#636466] text-white",
    icon: Redis,
  },
  ROLLUP: {
    name: "Rollup",
    class: "bg-[#a6432c6e] text-white",
    icon: Rollup,
  },
};

const SKILLS = {
  JAVA: {
    name: "Java",
    icon: Java,
  },
  PYTHON: {
    name: "Python",
    icon: Python,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: Javascript,
  },
  CPP: {
    name: "C++",
    icon: CPP,
  },
  SQL: {
    name: "SQL",
    icon: SQL,
  },
  REACT: {
    name: "React",
    icon: ReactJS,
  },
  NEXT: {
    name: "Next.js",
    icon: NextJS,
  },

  NODE: {
    name: "Node.js",
    icon: NodeJS,
  },
  EXPRESS: {
    name: "Express.js",
    icon: ExpressJS,
  },
  SHELL: {
    name: "Shell",
    icon: Shell,
  },
  MONGODB: {
    name: "MongoDB",
    icon: MongoDB,
  },
  REDIS: {
    name: "Redis",
    icon: Redis,
  },
  FIREBASE: {
    name: "Firebase",
    icon: Firebase,
  },
  ASTRO: {
    name: "Astro",
    icon: AstroIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: Tailwind,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  SASS: {
    name: "SASS",
    icon: Sass,
  },

  GIT: {
    name: "Git",
    icon: Git,
  },
  POSTMAN: {
    name: "Postman",
    icon: Postman,
  },
  DOCKER: {
    name: "Docker",
    icon: Docker,
  },

  GITHUB: {
    name: "GitHub",
    icon: GitHubColor,
  },
  GITLAB: {
    name: "GitLab",
    icon: GitLab,
  },

  VERCEL: {
    name: "Vercel",
    icon: Vercel,
  },
  MACOS: {
    name: "macOS",
    icon: MacOS,
  },
  VSCODE: {
    name: "VSCode",
    icon: VSCode,
  },
  DEVOPS: {
    name: "DevOps",
    icon: Devops,
  },
  KUBERNETES: {
    name: "Kubernetes",
    icon: Kubernetes,
  },
  WEBRTC: {
    name: "WebRTC",
    icon: WebRTC,
  },
  REACTNATIVE: {
    name: "React Native",
    icon: ReactJS,
  },
};

const NAVITEMS = [
  {
    title: "Experience",
    label: "experience",
    url: "/#experience",
  },
  {
    title: "Projects",
    label: "projects",
    url: "/#projects",
  },
  {
    title: "Skills",
    label: "skills",
    url: "/#skills",
  },
  {
    title: "About Me",
    label: "about-me",
    url: "/#about-me",
  },
  // {
  //   title: "Contact",
  //   label: "contact",
  //   url: "mailto:patelyashodhar012@gmail.com",
  // },
];

const EXPERIENCE = [
  {
    date: "June 2025 - Present",
    title: " SDE",
    company: "Gigzi",
    type: "",
    description: [
      "Designed and developed a cross-platform artist booking platform with scalable architecture for multi-city deployment",
      "Implemented secure login, artist onboarding, booking workflows, and role-based admin panels with Secure payouts.",
      "Leading a 4-member team; managing Git workflows, API design, and agile delivery for scalable MVP release.",
      "Coordinating backend deployment on Vercel and application release on the Google Play Store.",
    ],
  },
  {
    date: "January 2024 - July 2025",
    title: "Software Developer Intern",
    company: "MediSage",
    type: "Internship",
    description: [
      "Reduced 60% of manual effort by implementing automation scripts for Database Entries.",
      "Developed and implemented an API for administration dashboards, streamlining backend processes and enhancing system efficiency",
      "Converted UI designs into functional React Js and Next.js code, resulting in responsive and high-performance user interfaces",
    ],
  },
];

const PROJECTS = [
  {
    title: "Inaya",
    subtitle: "Fashion Commerce Platform",
    description:
      "Developed a fully responsive e-commerce platform featuring user authentication, shopping cart, and real-time IP-based delivery charges.\n\n" +
      "Built an admin panel managing 15+ modules including shipping configurations, coupon systems, and user operations.\n\n" +
      "Implemented an analytics dashboard tracking 20+ key metrics, improving order processing efficiency by 40%.\n\n" +
      "Delivered the project as a freelancer, handling full-stack development and client communication independently.",
    detail: "",
    github: "",
    link: "https://inayapoeticthreads.com/",
    image: "/projects/inaya.png",
    tags: [
      PROJECTTAGS.REACT,
      PROJECTTAGS.NODE,
      PROJECTTAGS.MONGODB,
      PROJECTTAGS.EXPRESS,
      PROJECTTAGS.TAILWIND,
      // Since Inaya is fashion commerce, these blockchain tags might not fit unless the project uses them
      // Remove Solidity, Ethereum, MetaMask, Web3.js, Thirdweb if irrelevant
    ],
  },

  {
    title: "PolyConnectHub",
    subtitle: "Polytechnic Project Collaboration Platform",
    description:
      "Developed a Super Admin Portal to streamline management and coordination across multiple polytechnic colleges, enabling centralized control and oversight.\n\n" +
      "Implemented individual college accounts for Heads of Departments (HoDs) to showcase, manage, and update project information efficiently.\n\n" +
      "Built a responsive, user-friendly student interface to access a comprehensive repository of projects, fostering collaboration, innovation, and reducing redundancy.\n\n" +
      "Leveraged React and Tailwind CSS for seamless UI/UX, Node.js and Express for scalable backend APIs, and MongoDB for robust data storage.",
    detail: "",
    github: "https://github.com/yashaghane21/PolyConnectHub",
    link: "https://polyconnect-hub.netlify.app/",
    image: "/projects/ss.png",
    tags: [
      PROJECTTAGS.NODE,
      PROJECTTAGS.EXPRESS,
      PROJECTTAGS.REACT,
      PROJECTTAGS.TAILWIND,
      PROJECTTAGS.MONGODB,
    ],
  },  {
    title: "FeedBacker",
    subtitle: "Course Feedback System",
    description:
      "Developed a scalable feedback management system enabling students to securely submit course and experience feedback, ensuring data integrity and anonymity.\n\n" +
      "Engineered a dynamic analytics dashboard for Heads of Departments (HoDs) and Principal using React and MongoDB aggregation pipelines to provide real-time statistical insights and trend analysis.\n\n" +
      "Implemented role-based access control (RBAC) and optimized API endpoints with Express.js for efficient, secure data retrieval and administration.\n\n" +
      "Applied responsive UI design with Tailwind CSS to ensure seamless user experience across devices.",
    detail: "",
    github: "https://github.com/stars/yashaghane21/lists/feedbacker",
    link: "https://gpmfeedback.netlify.app/",
    image: "/projects/feedbacker.png",
    tags: [
      PROJECTTAGS.NODE,
      PROJECTTAGS.EXPRESS,
      PROJECTTAGS.REACT,
      PROJECTTAGS.TAILWIND,
      PROJECTTAGS.MONGODB,
    ],
  },
];

const SKILLSET = [
  {
    name: "Programming Languages",
    skills: [
      SKILLS.JAVA,
      SKILLS.PYTHON,
      SKILLS.JAVASCRIPT,
      SKILLS.CPP,
      SKILLS.SQL,
    ],
  },
  {
    name: "Technical",
    skills: [
      SKILLS.REACT,
      SKILLS.NEXT,
      SKILLS.NODE,
      SKILLS.EXPRESS,
      SKILLS.SHELL,
      SKILLS.MONGODB,
      SKILLS.REDIS,
      SKILLS.REACTNATIVE,
      SKILLS.FIREBASE,
      SKILLS.ASTRO,
      SKILLS.TAILWIND,
      SKILLS.SASS,
      // SKILLS.BOOTSTRAP
    ],
  },
  {
    name: "Tools",
    skills: [
      SKILLS.POSTMAN,
      SKILLS.DOCKER,
      SKILLS.GIT,
      SKILLS.GITHUB,
      SKILLS.GITLAB,
      SKILLS.VERCEL,
      SKILLS.MACOS,
      // SKILLS.VSCODE,
    ],
  },
  // {
  //   name: "Currently Learning",
  //   skills: [
  //     SKILLS.SOLIDITY,
  //     SKILLS.BLOCKCHAIN,
  //     SKILLS.SOLANA,
  //     SKILLS.DEVOPS,
  //     SKILLS.KUBERNETES,
  //     // SKILLS.WEBRTC,
  //   ],
  // },
];

export { NAVITEMS, EXPERIENCE, PROJECTS, SKILLSET };
