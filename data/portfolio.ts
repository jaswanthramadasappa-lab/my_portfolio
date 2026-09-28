export const personal = {
  fullName: "RAMADASAPPA GARI JASWANTH",
  shortName: "JASWANTH",
  title: "B.Tech CSE Student",
  tagline: ["Frontend Developer", "Problem Solver", "AI Enthusiast"],
  degree: "B.Tech — Computer Science Engineering (CSE)",
  college: "Madanapalle Institute of Technology & Science (MITS)",
  collegeShort: "MITS, Madanapalle",
  graduation: "2024–2028",
  location: "Ananthapur, India",
  email: "jaswanthramadasappa@gmail.com",
  phone: "+91 6303842582",
  photo:
    "https://res.cloudinary.com/dtz8xnkla/image/upload/v1754732125/my_photo_resume_hbdlgi.jpg",
  bio: "I am a B.Tech Computer Science Engineering student at Madanapalle Institute of Technology & Science (MITS), passionate about web development, algorithmic problem solving, and building practical software solutions. I specialize in developing responsive web applications using React, Node.js, and SQL, while advancing my Data Structures and Algorithms proficiency and exploring Generative AI automation.",
} as const

export const socials = {
  github: "https://github.com/jaswanthramadasappa-lab",
  linkedin: "https://www.linkedin.com/in/jaswanth-ramadasappagari/",
  leetcode: "https://leetcode.com/u/y428pyL8mA/",
} as const

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const

export const focusAreas = ["Web Development", "Problem Solving", "Generative AI"] as const

export const aboutCards = [
  { label: "Degree", value: "B.Tech CSE", sub: personal.graduation },
  { label: "Institute", value: "MITS", sub: "Madanapalle Institute of Technology & Science" },
  { label: "Location", value: "Ananthapur", sub: "Andhra Pradesh, India" },
] as const

export const experience = {
  company: "RD INFRO TECHNOLOGY",
  role: "Web Development Intern",
  type: "Offline Internship Program",
  duration: "8 Weeks",
  dates: "19/05/2026 – 18/07/2026",
  certificateId: "RDWD592DD",
  regNo: "TN-34-0050921",
  accreditations: ["AICTE Approved", "MSME Recognized", "Govt. of India Certified"],
  technologies: ["React.js", "Node.js", "JavaScript", "HTML5 & CSS3", "REST APIs", "Full Stack Development"],
  summary:
    "Completed an intensive 8-week offline internship in Web Development at RD INFRO TECHNOLOGY. Demonstrated strong technical skills, a positive learning attitude, and consistent dedication toward assigned tasks and projects, contributing to production-grade web solutions.",
  certificateTitle: "Internship Completion Certificate",
  certificateImage: "/certificates/rd-infro-internship.png",
} as const

export const achievements = [
  {
    title: "1st Prize – Department-Level Project Expo",
    category: "Innovation & Project Exhibition",
    description: "Awarded 1st place in the university department project expo for designing and demonstrating high-impact web and AI-driven solutions.",
    highlight: "1st Place 🥇",
    badgeColor: "amber",
  },
  {
    title: "2nd Prize – Coding Competition",
    category: "Algorithmic Problem Solving",
    description: "Secured 2nd prize in a competitive coding competition demonstrating fast, optimal algorithmic problem solving with Data Structures in Python & C++.",
    highlight: "2nd Place 🥈",
    badgeColor: "cyan",
  },
  {
    title: "Cleared Nxtmock AI Interview – NxtWave",
    category: "Technical Evaluation & Assessment",
    description: "Successfully cleared the comprehensive Nxtmock AI Technical Interview evaluating core competencies in full-stack web engineering, data structures, and system design.",
    highlight: "Verified Candidate 🎯",
    badgeColor: "emerald",
  },
] as const

export const education = [
  {
    school: "Madanapalle Institute of Technology & Science (MITS)",
    qualification: "B.Tech — Computer Science Engineering (CSE)",
    period: "2024–2028",
    result: null,
  },
  {
    school: "Narayana Junior College",
    qualification: "Intermediate / 12th",
    period: "2024",
    result: "96%",
  },
  {
    school: "ZP High School",
    qualification: "10th Grade / SSC",
    period: "2022",
    result: "89%",
  },
] as const

// Resume file. Place the actual resume PDF at public/resume.pdf to enable download.
export const resumeUrl = "/resume.pdf"

