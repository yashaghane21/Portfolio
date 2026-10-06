import NextJS from "./icons/technical/NextJS.astro";
import NodeJS from "./icons/technical/NodeJS.astro";
import ExpressJS from "./icons/technical/ExpressJS.astro";
import MongoDB from "./icons/technical/MongoDB.astro";
import Redis from "./icons/technical/Redis.astro";
import Tailwind from "./icons/technical/Tailwind.astro";
import ReactJS from "./icons/technical/ReactJS.astro";
import Javascript from "./icons/technical/Javascript.astro";
import Java from "./icons/technical/Java.astro";
import Python from "./icons/technical/Python.astro";
import SQL from "./icons/technical/SQL.astro";
import Shell from "./icons/technical/Shell.astro";
import Git from "./icons/tools/Git.astro";
import Postman from "./icons/tools/Postman.astro";
import GitHubColor from "./icons/tools/GitHubColor.astro";

const PROFILE = {
  name: "Yash Aghane",
  role: "Software Engineer · Full-Stack & Backend Developer",
  location: "Mumbai, India",
  email: "yashaghane1141121@gmail.com",
  resume: "/Yash_Aghane_Resume.pdf",
  summary:
    "Software Engineer and Computer Science undergraduate with 1.5+ years of industry experience across three companies, building full-stack web and mobile applications, scalable REST APIs, and data pipelines. Experienced in GenAI systems with Retrieval-Augmented Generation (RAG), LLM APIs, and vector databases.",
};

const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/yashaghane21/",
  github: "https://github.com/yashaghane21",
  leetcode: "https://leetcode.com/u/yash1141121/",
};

const STATS = [
  { value: "1.5+", label: "Years of experience" },
  { value: "3", label: "Companies" },
  { value: "8.51", label: "B.E. CGPA" },
  { value: "#1", label: "Technathon 2024, 800+ teams" },
];

const NAVITEMS = [
  { title: "Experience", label: "experience", url: "/#experience" },
  { title: "Projects", label: "projects", url: "/#projects" },
  { title: "Skills", label: "skills", url: "/#skills" },
  { title: "Education", label: "education", url: "/#education" },
  { title: "About", label: "about-me", url: "/#about-me" },
];

const EXPERIENCE = [
  {
    date: "Aug 2026 – Present",
    title: "Software Developer Intern",
    company: "Infinite Analytics",
    location: "Mumbai",
    type: "Internship",
    stack: ["Python", "FastAPI", "PySpark", "React.js", "Jenkins", "Git"],
    links: [],
    description: [
      "Automated manual data ingestion for audience reports into an end-to-end <strong>data pipeline</strong> powering a monitoring dashboard, eliminating <strong>4–5 hours</strong> of manual effort per reporting cycle.",
      "Shipped features and resolved production bugs in the <strong>Customer Data Platform (CDP)</strong> pipeline using PySpark and Python, improving reliability of large-scale data processing jobs.",
      "Developed React.js dashboards on FastAPI REST services, with <strong>Jenkins CI/CD</strong> pipelines for automated deployment.",
    ],
  },
  {
    date: "Aug 2025 – Jun 2026",
    title: "Software Developer",
    company: "Gigzi",
    location: "Mumbai",
    type: "Part-time",
    stack: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Pinecone",
      "RAG",
    ],
    links: [
      { label: "gigzi.in", url: "https://www.gigzi.in" },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.yash2121.gigzi&hl=en_IN",
      },
    ],
    description: [
      "Launched a cross-platform artist booking app (<strong>live on Google Play</strong>) using React Native, Node.js, Express.js, and MongoDB, covering artist discovery, search, authentication, and booking.",
      "Engineered a <strong>GenAI artist discovery assistant</strong> using RAG with Gemini API, Pinecone vector search, and Redis caching.",
      "Created reusable frontend components and contributed to REST API design, code reviews, and Git workflows.",
    ],
  },
  {
    date: "Jan 2024 – Jul 2024",
    title: "Software Developer Intern",
    company: "Medisage",
    location: "Mumbai",
    type: "Internship",
    stack: ["React.js", "Next.js", "Node.js", "Laravel", "Tailwind CSS", "SQL", "MongoDB"],
    links: [],
    description: [
      "Built responsive web features and reusable UI components in React.js, Next.js, and Tailwind CSS.",
      "Automated Excel-to-SQL data ingestion, cutting manual data entry by <strong>60%</strong> and saving <strong>5+ hours weekly</strong>.",
      "Designed REST APIs that improved cross-module data sync by <strong>30%</strong> and reduced API latency from <strong>1.2s to 400ms</strong>.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Knowly AI",
    subtitle: "Multi-Tenant RAG Knowledge Platform",
    description: [
      "Architected a <strong>multi-tenant</strong> platform with JWT authentication, user-level data isolation, and RAG-based querying.",
      "Built a document-processing pipeline with overlap-based chunking and <strong>384-dimensional</strong> Sentence Transformer embeddings, indexed in MongoDB Atlas Vector Search.",
      "Generates grounded Gemini LLM responses with <strong>source citations</strong> on a repository-service architecture.",
    ],
    github: "https://github.com/yashaghane21/Knowly_AI-Backend",
    link: "",
    image: "",
    tags: ["Python", "FastAPI", "MongoDB", "Gemini API", "RAG"],
  },
  {
    title: "Nucleus",
    subtitle: "Project Management System",
    description: [
      "Plane.so-inspired platform with a hierarchical <strong>Workspaces → Projects → Tasks</strong> structure, task assignment, status tracking, and role-based access control.",
      "Spring Boot REST APIs on <strong>PostgreSQL (AWS RDS)</strong> with <strong>AWS S3</strong> for profile media, DTO-based API design, and centralized exception handling.",
    ],
    github: "https://github.com/yashaghane21/Nucleus",
    link: "",
    image: "",
    tags: ["Java", "Spring Boot", "PostgreSQL", "AWS RDS", "AWS S3"],
  },
  {
    title: "Inaya",
    subtitle: "Fashion E-Commerce Platform",
    description: [
      "Streamlined e-commerce workflows (authentication, cart, IP-based delivery logic) for <strong>20% faster</strong> order processing.",
      "Delivered an admin UI with <strong>15+ modules</strong> and a dashboard tracking <strong>20+ metrics</strong>, raising efficiency by 40%.",
    ],
    github: "",
    link: "https://inayapoeticthreads.com/",
    image: "/projects/inaya.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];

const OTHER_PROJECTS = [
  {
    title: "PolyConnectHub",
    subtitle: "Project collaboration platform for polytechnic colleges",
    github: "https://github.com/yashaghane21/PolyConnectHub",
    link: "https://polyconnect-hub.netlify.app/",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "FeedBacker",
    subtitle: "Course feedback system with analytics dashboards",
    github: "https://github.com/yashaghane21/Feedbacker_Frontend",
    link: "https://gpmfeedback.netlify.app/",
    tags: ["React", "Express.js", "MongoDB"],
  },
];

// `icon` is optional — skills without a bundled icon render as text pills.
type Skill = { name: string; icon?: any };

const SKILLSET: { name: string; skills: Skill[] }[] = [
  {
    name: "Languages & Frontend",
    skills: [
      { name: "Java", icon: Java },
      { name: "Python", icon: Python },
      { name: "JavaScript", icon: Javascript },
      { name: "SQL", icon: SQL },
      { name: "C" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "React.js", icon: ReactJS },
      { name: "React Native", icon: ReactJS },
      { name: "Next.js", icon: NextJS },
      { name: "Tailwind CSS", icon: Tailwind },
    ],
  },
  {
    name: "Backend & Cloud",
    skills: [
      { name: "Node.js", icon: NodeJS },
      { name: "Express.js", icon: ExpressJS },
      { name: "Spring Boot" },
      { name: "FastAPI" },
      { name: "Laravel" },
      { name: "REST APIs" },
      { name: "JWT" },
      { name: "AWS (RDS, S3)" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: MongoDB },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis", icon: Redis },
      { name: "Pinecone" },
      { name: "Atlas Vector Search" },
    ],
  },
  {
    name: "Data & GenAI",
    skills: [
      { name: "Apache Spark (PySpark)" },
      { name: "Data Pipelines" },
      { name: "RAG" },
      { name: "LLM APIs (Gemini)" },
      { name: "Vector Embeddings" },
      { name: "AI Agents" },
    ],
  },
  {
    name: "Tools & Fundamentals",
    skills: [
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHubColor },
      { name: "Jenkins" },
      { name: "CI/CD" },
      { name: "Postman", icon: Postman },
      { name: "Linux", icon: Shell },
      { name: "DSA" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "OS" },
      { name: "Networks" },
    ],
  },
];

const EDUCATION = [
  {
    school: "Thakur College of Engineering and Technology",
    location: "Mumbai",
    degree: "B.E. in Computer Science and Engineering",
    date: "Sep 2024 – Jul 2027",
    score: "CGPA 8.51 / 10",
  },
  {
    school: "Government Polytechnic Mumbai",
    location: "Mumbai",
    degree: "Diploma in Information Technology",
    date: "Sep 2021 – Jul 2024",
    score: "91.33%",
  },
];

const ACHIEVEMENTS = [
  {
    title: "Winner, Technathon 2024",
    detail: "1st place out of 800+ teams in a 24-hour hackathon.",
    date: "Feb 2024",
  },
  {
    title: "Extra Mile Award, Medisage",
    detail: "Recognized for ownership of additional project goals.",
    date: "Jun 2024",
  },
];

export {
  PROFILE,
  SOCIALS,
  STATS,
  NAVITEMS,
  EXPERIENCE,
  PROJECTS,
  OTHER_PROJECTS,
  SKILLSET,
  EDUCATION,
  ACHIEVEMENTS,
};
