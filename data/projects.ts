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
    slug: "voice2action-ai",
    title: "Voice2action Ai – Voice Notes To Action Items",
    category: "AI Productivity Application",
    description:
      "An AI-powered voice productivity application that converts recorded/uploaded audio into text and transforms transcripts into summaries, key points, decisions, and prioritized action items.",
    longDescription:
      "Developed an AI-powered voice productivity application that converts recorded/uploaded audio into text and transforms transcripts into summaries, key points, decisions, and prioritized action items. Implemented REST APIs using Node.js and Express.js, integrated OpenAI for speech-to-text and AI analysis, and stored user notes in MongoDB for persistent access.",
    technologies: [
      "Generative AI",
      "OpenAI Whisper & GPT",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "REST APIs",
    ],
    features: [
      "Audio recording & upload to text conversion",
      "Automated transcript summaries & key takeaways",
      "Intelligent decision & prioritized action item extraction",
      "REST APIs implemented with Node.js & Express.js",
      "Persistent user notes stored in MongoDB",
      "Responsive user interface with instant analysis",
    ],
    github: "https://github.com/jaswanthramadasappa-lab/AgenticAI",
    demo: null,
    image: "/projects/agentic-ai.png",
    featured: true,
  },
  {
    slug: "nxt-trendz",
    title: "Nxt Trendz (E-commerce Clone – Amazon, Flipkart)",
    category: "E-commerce Web Application",
    description:
      "A responsive e-commerce web application with secure authentication, product listing, search, filtering, and full cart functionality.",
    longDescription:
      "Built a responsive e-commerce web app with secure authentication, product listing, search, and filtering features. Implemented protected routes and dynamic data rendering using REST APIs. Designed a clean UI with shopping cart functionality to enhance user experience.",
    technologies: ["React.js", "JavaScript (ES6+)", "REST APIs", "HTML5", "CSS3"],
    features: [
      "Secure user authentication & session handling",
      "Dynamic product listing with categories",
      "Search, price sorting, and rating filters",
      "Protected routes for cart and checkout",
      "Dynamic REST API data integration",
      "Shopping cart state management",
      "Responsive, mobile-optimized UI",
    ],
    github: "https://github.com/jaswanthramadasappa-lab/nxttrendzapp",
    demo: null,
    image: "/projects/nxt-trendz.png",
    featured: true,
  },
  {
    slug: "nxt-watch",
    title: "Nxt Watch",
    category: "Video Streaming Platform",
    description:
      "A YouTube-inspired video streaming web application with dynamic content, JWT-based authentication, saved videos, and dark/light themes.",
    longDescription:
      "Developed a YouTube-inspired video streaming web application using React.js, implementing component-based architecture and dynamic routing. Integrated REST APIs to fetch and display video content including trending, gaming, and search-based results with efficient state management. Implemented JWT-based authentication with protected routes to ensure secure user access and personalized features like saved videos. Designed a fully responsive UI with dark/light theme support, focusing on performance optimization and seamless user experience.",
    technologies: ["React.js", "JavaScript (ES6+)", "REST APIs", "JWT", "CSS3"],
    features: [
      "Trending, gaming, and search video feeds",
      "Component-based architecture & dynamic routing",
      "JWT-based authentication & protected routes",
      "Personalized saved videos library",
      "Dark and light theme toggle support",
      "Optimized rendering and seamless UX",
    ],
    github: "https://github.com/jaswanthramadasappa-lab/Nxtwatch",
    demo: null,
    image: "/projects/nxt-watch.png",
    featured: true,
  },
  {
    slug: "jobby",
    title: "Jobby App",
    category: "Job Search & Recruitment Platform",
    description:
      "A job-focused web application for browsing and interacting with curated job opportunities.",
    longDescription:
      "A comprehensive job portal platform featuring role filtering, company information, salary ranges, and detailed job specifications with responsive layout.",
    technologies: ["React.js", "JavaScript", "REST APIs", "CSS3"],
    features: [
      "Browse and filter job openings",
      "Detailed job view & salary brackets",
      "REST API integration",
      "Responsive mobile layout",
    ],
    github: "https://github.com/jaswanthramadasappa-lab/jobby",
    demo: null,
    image: "/projects/jobby.png",
    featured: false,
  },
  {
    slug: "match-game",
    title: "Match Game",
    category: "Interactive Web Game",
    description:
      "An interactive browser-based memory matching game designed to test reflexes and visual recall.",
    longDescription:
      "A fast-paced interactive memory matching game featuring timer countdowns, dynamic scoring, score history, and smooth animations.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Dynamic score tracking & timer logic",
      "Memory matching game loops",
      "Engaging animations and feedback",
    ],
    github: "https://github.com/jaswanthramadasappa-lab/MatchGame",
    demo: null,
    image: "/projects/match-game.png",
    featured: false,
  },
  {
    slug: "wikipedia-search",
    title: "Wikipedia Search",
    category: "Search & Knowledge Application",
    description:
      "A dynamic search engine that queries and displays real-time Wikipedia results using asynchronous REST API calls.",
    longDescription:
      "A responsive app that fetches and displays Wikipedia search results dynamically via the Wikipedia REST API with instant asynchronous debounce handling and clean typography.",
    technologies: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
    features: [
      "Real-time search query execution",
      "Asynchronous fetch API integration",
      "Clean dynamic card rendering",
      "Efficient error handling",
    ],
    github: null,
    demo: null,
    image: "/projects/wiki-search.png",
    featured: false,
  },
]

