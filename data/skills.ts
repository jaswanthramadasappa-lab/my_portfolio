export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "Bootstrap", "Flexbox", "React.js"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["SQL", "MongoDB"],
  },
  {
    title: "Other Technical Skills",
    skills: ["Data Structures & Algorithms", "REST APIs", "Generative AI"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
]
