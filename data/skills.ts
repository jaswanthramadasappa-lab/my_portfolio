export type Skill = {
  name: string
  level?: "Proficient" | "Advanced" | "Familiar"
  tag?: string
}

export type SkillCategory = {
  title: string
  iconName: "layout" | "server" | "database" | "cpu" | "sparkles" | "tool"
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    iconName: "layout",
    description: "Building responsive, dynamic, and high-performance user interfaces.",
    skills: [
      { name: "React.js", level: "Proficient", tag: "Primary" },
      { name: "JavaScript (ES6+)", level: "Proficient", tag: "Core" },
      { name: "HTML5 & Semantic Web", level: "Proficient" },
      { name: "CSS3 / Modern Styling", level: "Proficient" },
      { name: "CSS Flexbox & Grid", level: "Proficient" },
      { name: "Bootstrap / UI Systems", level: "Proficient" },
      { name: "Responsive UI Architecture", level: "Proficient" },
    ],
  },
  {
    title: "Backend & APIs",
    iconName: "server",
    description: "Architecting reliable REST APIs and server-side business logic.",
    skills: [
      { name: "Node.js", level: "Proficient", tag: "Primary" },
      { name: "Express.js", level: "Proficient" },
      { name: "RESTful API Design", level: "Proficient" },
      { name: "JWT & Authentication", level: "Proficient" },
      { name: "Middleware & Routing", level: "Proficient" },
    ],
  },
  {
    title: "Database Engineering",
    iconName: "database",
    description: "Relational data modeling, schema architecture, and querying.",
    skills: [
      { name: "SQL (Structured Query)", level: "Proficient", tag: "Certified" },
      { name: "MongoDB", level: "Familiar" },
      { name: "Relational Modeling & Joins", level: "Proficient" },
      { name: "CRUD & Aggregations", level: "Proficient" },
    ],
  },
  {
    title: "Programming & DSA",
    iconName: "cpu",
    description: "Strong algorithmic foundations, problem solving, and optimization.",
    skills: [
      { name: "Python", level: "Proficient", tag: "Primary" },
      { name: "C++", level: "Proficient" },
      { name: "C", level: "Proficient" },
      { name: "Data Structures & Algorithms", level: "Proficient" },
      { name: "Problem Solving / LeetCode", level: "Proficient" },
    ],
  },
  {
    title: "AI & Emerging Tech",
    iconName: "sparkles",
    description: "Exploring agentic AI architectures and LLM application development.",
    skills: [
      { name: "Generative AI Workflows", level: "Proficient", tag: "Focus" },
      { name: "Agentic AI Orchestration", level: "Proficient" },
      { name: "Prompt Engineering & RAG", level: "Proficient" },
      { name: "AI API Integration", level: "Proficient" },
    ],
  },
  {
    title: "Developer Tools & Workflow",
    iconName: "tool",
    description: "Modern engineering tooling, version control, and collaboration.",
    skills: [
      { name: "Git & Version Control", level: "Proficient" },
      { name: "GitHub & CI/CD Basics", level: "Proficient" },
      { name: "VS Code & Debugging", level: "Proficient" },
      { name: "Postman API Testing", level: "Proficient" },
      { name: "Command Line / Terminal", level: "Proficient" },
    ],
  },
]
