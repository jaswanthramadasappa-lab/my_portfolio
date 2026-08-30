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
  bio: "I am a B.Tech Computer Science Engineering student at Madanapalle Institute of Technology & Science (MITS), passionate about web development, problem solving, and building practical applications. I enjoy creating responsive and user-friendly web applications using modern frontend and backend technologies while continuously improving my Data Structures and Algorithms skills. I am also exploring Generative AI and AI-powered application development.",
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
  duration: "8 Weeks",
  dates: "19/05/2026 – 18/07/2026",
  technologies: ["Frontend Web Technologies", "Backend Web Technologies"],
  summary:
    "Completed an 8-week offline internship in Web Development. Demonstrated technical skills, a positive learning attitude, and consistent dedication toward assigned tasks and projects.",
  certificateTitle: "Internship Completion Certificate",
} as const

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
