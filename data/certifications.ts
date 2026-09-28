export type Certification = {
  slug: string
  title: string
  issuer: string
  recipient: string
  focus: string
  category: "Frontend" | "Backend & DB" | "Foundations" | "Full Stack"
  image: string
  skillsCovered: string[]
  description: string
}

export const certifications: Certification[] = [
  {
    slug: "react-js",
    title: "React JS - Getting Started",
    issuer: "NxtWave CCBP 4.0 Academy",
    recipient: "R. Jaswanth",
    focus: "React & SPA",
    category: "Frontend",
    image: "/certificates/react-js.png",
    skillsCovered: ["React.js", "Component Architecture", "State & Props", "Hooks", "Event Handling"],
    description: "Certification covering core React concepts, virtual DOM, component lifecycles, state management, and modern SPA principles.",
  },
  {
    slug: "javascript-essentials",
    title: "JavaScript Essentials",
    issuer: "NxtWave CCBP 4.0 Academy",
    recipient: "R. Jaswanth",
    focus: "JavaScript ES6+",
    category: "Frontend",
    image: "/certificates/javascript-essentials.png",
    skillsCovered: ["JavaScript ES6+", "DOM Manipulation", "Asynchronous JS", "Event Loop", "Fetch API"],
    description: "Deep dive into core JavaScript, lexical scoping, closures, async/await, REST API integration, and dynamic browser scripting.",
  },
  {
    slug: "node-js",
    title: "Node JS",
    issuer: "NxtWave CCBP 4.0 Academy",
    recipient: "R. Jaswanth",
    focus: "Backend Engineering",
    category: "Backend & DB",
    image: "/certificates/node-js.png",
    skillsCovered: ["Node.js", "Express.js", "REST APIs", "Middleware", "Authentication & JWT"],
    description: "Practical mastery in building scalable server-side web APIs, handling routing, middleware, database connectivity, and backend logic.",
  },
  {
    slug: "databases",
    title: "Introduction to Databases",
    issuer: "NxtWave CCBP 4.0 Academy",
    recipient: "R. Jaswanth",
    focus: "SQL & Databases",
    category: "Backend & DB",
    image: "/certificates/databases.png",
    skillsCovered: ["SQL", "Relational Database Design", "CRUD Operations", "Table Joins", "Aggregations"],
    description: "Database design, schema modeling, relational querying, data normalization, subqueries, and database performance essentials.",
  },
  {
    slug: "dynamic-web-app",
    title: "Build Your Own Dynamic Web Application",
    issuer: "NxtWave CCBP 4.0 Academy",
    recipient: "R. Jaswanth",
    focus: "Dynamic Web Apps",
    category: "Full Stack",
    image: "/certificates/dynamic-web-app.png",
    skillsCovered: ["Dynamic UI", "HTTP Requests", "JSON Handling", "Local Storage", "API Consumption"],
    description: "Developing responsive and data-driven web applications that communicate with remote servers and manage client-side state.",
  },
  {
    slug: "responsive-website",
    title: "Build Your Own Responsive Website",
    issuer: "NxtWave CCBP 4.0 Academy",
    recipient: "R. Jaswanth",
    focus: "Responsive Design",
    category: "Frontend",
    image: "/certificates/responsive-website.png",
    skillsCovered: ["Responsive Layouts", "Media Queries", "Bootstrap", "Mobile-First Design"],
    description: "Designing websites that adapt seamlessly across mobile, tablet, and desktop viewports with fluid layout systems.",
  },
  {
    slug: "flexbox-design",
    title: "Responsive Web Design using Flexbox",
    issuer: "NxtWave CCBP 4.0 Academy",
    recipient: "R. Jaswanth",
    focus: "CSS Flexbox",
    category: "Frontend",
    image: "/certificates/flexbox-design.png",
    skillsCovered: ["CSS3 Flexbox", "Alignments & Justifications", "Direction & Wrapping", "Flex Grow & Shrink"],
    description: "Advanced CSS flexbox layout mechanics for crafting modern, flexible, and robust user interface structures.",
  },
  {
    slug: "static-website",
    title: "Build Your Own Static Website",
    issuer: "NxtWave CCBP 4.0 Academy",
    recipient: "R. Jaswanth",
    focus: "HTML5 & CSS3",
    category: "Frontend",
    image: "/certificates/static-website.png",
    skillsCovered: ["HTML5", "CSS3", "Typography", "Semantic Web", "Layouts"],
    description: "Foundational mastery of semantic HTML5 elements, CSS styling, colors, typography, and page structure.",
  },
  {
    slug: "programming-foundations",
    title: "Programming Foundations",
    issuer: "NxtWave CCBP 4.0 Academy",
    recipient: "R. Jaswanth",
    focus: "Algorithms & Logic",
    category: "Foundations",
    image: "/certificates/programming-foundations.png",
    skillsCovered: ["Problem Solving", "Control Flow", "Data Structures Basics", "Algorithms", "Functions"],
    description: "Core algorithmic thinking, computational problem solving, loops, recursion, and structured programming paradigms.",
  },
  {
    slug: "developer-foundations",
    title: "Developer Foundations",
    issuer: "NxtWave CCBP 4.0 Academy",
    recipient: "R. Jaswanth",
    focus: "Developer Tooling",
    category: "Foundations",
    image: "/certificates/developer-foundations.png",
    skillsCovered: ["Git & GitHub", "Command Line / Terminal", "Debugging", "Code Quality", "CI/CD Basics"],
    description: "Essential software engineering tooling, version control with Git, terminal workflows, and collaboration hygiene.",
  },
]
