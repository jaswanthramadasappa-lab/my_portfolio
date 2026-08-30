export type Certification = {
  title: string
  focus: string
}

// Certificate titles from portfolio-data.md. No verification links are invented.
// The `focus` label is a neutral category derived from each certificate's own title.
export const certifications: Certification[] = [
  { title: "Build Your Own Static Website", focus: "Web Fundamentals" },
  { title: "Build Your Own Responsive Website", focus: "Responsive Design" },
  { title: "Build Your Own Dynamic Web Application", focus: "Web Applications" },
  { title: "Programming Foundations", focus: "Programming" },
  { title: "Developer Foundations", focus: "Development" },
  { title: "Responsive Web Design using Flexbox", focus: "CSS Layout" },
  { title: "JavaScript Essentials", focus: "JavaScript" },
  { title: "React JS — Getting Started", focus: "React" },
  { title: "Introduction to Databases", focus: "Databases" },
  { title: "Node JS", focus: "Backend" },
]
