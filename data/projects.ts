export type Project = {
  slug: string
  title: string
  category: string
  description: string
  longDescription?: string
  technologies: string[]
  features: string[]
  github: string | null
  demo: string | null
  image: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "nxt-trendz",
    title: "Nxt Trendz",
    category: "E-commerce Web Application",
    description:
      "A responsive e-commerce web application inspired by major online shopping platforms.",
    longDescription:
      "Built a responsive e-commerce web application inspired by major online shopping platforms, featuring secure authentication, dynamic product data rendering through REST APIs, and a complete shopping cart experience.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "REST APIs"],
    features: [
      "Secure authentication",
      "Product listing",
      "Search and filtering",
      "Protected routes",
      "Dynamic data rendering via REST APIs",
      "Shopping cart functionality",
      "Responsive user interface",
    ],
    github: "https://github.com/jaswanthramadasappa-lab/nxttrendzapp",
    demo: null,
    image: "/projects/nxt-trendz.png",
    featured: true,
  },
  {
    slug: "nxt-watch",
    title: "Nxt Watch",
    category: "Video Streaming Web Application",
    description:
      "A YouTube-inspired video streaming platform with dynamic content and personalized user features.",
    longDescription:
      "Developed a YouTube-inspired video streaming web application with dynamic content, JWT-based authentication, and personalized user features such as saved videos and theme switching.",
    technologies: ["React.js", "JavaScript", "REST APIs", "JWT"],
    features: [
      "Trending and gaming video sections",
      "Search-based video results",
      "Dynamic routing",
      "JWT-based authentication",
      "Protected routes",
      "Saved videos",
      "Dark / light theme",
      "Responsive design",
    ],
    github: "https://github.com/jaswanthramadasappa-lab/Nxtwatch",
    demo: null,
    image: "/projects/nxt-watch.png",
    featured: true,
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    category: "AI / Automation Platform",
    description:
      "An AI-focused automation project demonstrating intelligent task automation and agent-based workflows.",
    longDescription:
      "An AI-focused automation project designed to demonstrate intelligent task automation and agent-based workflows, exploring how generative AI can drive practical, autonomous processes.",
    technologies: ["Generative AI", "Frontend", "Backend"],
    features: [
      "Agent-based workflow automation",
      "Intelligent task automation",
      "Generative AI exploration",
    ],
    github: "https://github.com/jaswanthramadasappa-lab/AgenticAI",
    demo: null,
    image: "/projects/agentic-ai.png",
    featured: true,
  },
  {
    slug: "jobby",
    title: "Jobby App",
    category: "Job Search / Application Platform",
    description:
      "A job-focused web application for browsing and interacting with job listings.",
    technologies: ["React.js", "JavaScript", "REST APIs"],
    features: [
      "Browse job listings",
      "Interactive job details",
      "REST API integration",
    ],
    github: "https://github.com/jaswanthramadasappa-lab/jobby",
    demo: null,
    image: "/projects/jobby.png",
    featured: false,
  },
  {
    slug: "match-game",
    title: "Match Game",
    category: "Web Game",
    description:
      "An interactive browser-based matching game designed to test memory and improve engagement.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Memory-based matching gameplay",
      "Interactive browser experience",
      "Engaging user interface",
    ],
    github: "https://github.com/jaswanthramadasappa-lab/MatchGame",
    demo: null,
    image: "/projects/match-game.png",
    featured: false,
  },
  {
    slug: "wikipedia-search",
    title: "Wikipedia Search",
    category: "Search Web Application",
    description:
      "A responsive app that fetches and displays Wikipedia search results dynamically via the Wikipedia REST API.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    features: [
      "Real-time search functionality",
      "Asynchronous API calls",
      "Dynamic result rendering",
      "Clean responsive UI",
      "Efficient data handling",
    ],
    github: null,
    demo: null,
    image: "/projects/wiki-search.png",
    featured: false,
  },
]
