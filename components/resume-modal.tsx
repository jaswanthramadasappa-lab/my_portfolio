"use client"

import { Download, ExternalLink, FileText, Printer, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { resumeUrl, socials } from "@/data/portfolio"

export function ResumeModal({
  trigger,
}: {
  trigger?: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-4 py-2 text-xs sm:text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FileText className="size-4 text-primary" />
            <span>View Resume</span>
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-3xl max-h-[92vh] overflow-y-auto p-0 border border-border bg-background">
        {/* Sticky Action Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/95 px-6 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />
            <DialogTitle className="text-xs sm:text-sm font-bold text-foreground">
              Jaswanth Ramadasappa Gari — Resume
            </DialogTitle>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Jaswanth_Ramadasappa_Gari_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <Download className="size-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Verbatim Document Preview */}
        <div className="p-6 sm:p-12 text-slate-900 dark:text-slate-100 font-sans space-y-5 bg-white dark:bg-[#0c1116] shadow-sm selection:bg-amber-500/20">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Jaswanth Ramadasappa Gari
            </h1>
            <div className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-medium">
              <span>+91 6303842582</span>
              <a href="mailto:jaswanthramadasappa@gmail.com" className="hover:underline text-slate-800 dark:text-slate-200">
                jaswanthramadasappa@gmail.com
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Linkedin
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Github
              </a>
              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Leetcode
              </a>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="pt-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-300 dark:border-slate-700 pb-1">
              EDUCATION
            </h2>
            <div className="mt-2.5 space-y-2 text-xs sm:text-sm">
              <div>
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span>Madanapalle Institute of Technology &amp; Science (MITS), Madanapalle</span>
                  <span className="font-normal text-slate-700 dark:text-slate-300">2024 - 2028</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span>B Tech (Bachelor of Technology) , Computer Science Engineering (CSE)</span>
                  <span>0</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span>Narayana Junior college</span>
                  <span className="font-normal text-slate-700 dark:text-slate-300">2024</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span>Intermediate/12th</span>
                  <span className="font-bold text-slate-900 dark:text-white">96%</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span>ZP High school</span>
                  <span className="font-normal text-slate-700 dark:text-slate-300">2022</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span>10th Grade/SSC</span>
                  <span className="font-bold text-slate-900 dark:text-white">89%</span>
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="pt-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-300 dark:border-slate-700 pb-1">
              SKILLS
            </h2>
            <div className="mt-2.5 space-y-1 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
              <p><strong className="font-bold text-slate-900 dark:text-white">Frontend:</strong> HTML, CSS, JavaScript, ReactJS</p>
              <p><strong className="font-bold text-slate-900 dark:text-white">Backend:</strong> Node.js, Express.js</p>
              <p><strong className="font-bold text-slate-900 dark:text-white">Database:</strong> SQL</p>
              <p><strong className="font-bold text-slate-900 dark:text-white">Programming Languages:</strong> Python, C++</p>
              <p><strong className="font-bold text-slate-900 dark:text-white">Core Concepts:</strong> Data Structures &amp; Algorithms</p>
              <p><strong className="font-bold text-slate-900 dark:text-white">AI:</strong> Generative AI</p>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="pt-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-300 dark:border-slate-700 pb-1">
              PROJECTS
            </h2>
            <div className="mt-2.5 space-y-3.5 text-xs sm:text-sm">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Voice2action Ai – Voice Notes To Action Items
                  </h3>
                  <a
                    href="https://github.com/jaswanthramadasappa-lab/AgenticAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
                  >
                    Link
                  </a>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300 pl-3 border-l-2 border-slate-200 dark:border-slate-800">
                  • Developed an AI-powered voice productivity application that converts recorded/uploaded audio into text and transforms transcripts into summaries, key points, decisions, and prioritized action items. Implemented REST APIs using Node.js and Express.js, integrated OpenAI for speech-to-text and AI analysis, and stored user notes in MongoDB for persistent access.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Nxt Trendz (ecommerce Clone-amazon, Flipkart)
                  </h3>
                  <a
                    href="https://github.com/jaswanthramadasappa-lab/nxttrendzapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
                  >
                    Link
                  </a>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300 pl-3 border-l-2 border-slate-200 dark:border-slate-800">
                  • Built a responsive e-commerce web app with secure authentication, product listing, search, and filtering features. Implemented protected routes and dynamic data rendering using REST APIs. Designed a clean UI with shopping cart functionality to enhance user experience.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Nxt Watch
                  </h3>
                  <a
                    href="https://github.com/jaswanthramadasappa-lab/Nxtwatch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
                  >
                    Link
                  </a>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300 pl-3 border-l-2 border-slate-200 dark:border-slate-800">
                  • Developed a YouTube-inspired video streaming web application using React.js, implementing component-based architecture and dynamic routing. Integrated REST APIs to fetch and display video content including trending, gaming, and search-based results with efficient state management. Implemented JWT-based authentication with protected routes to ensure secure user access and personalized features like saved videos. Designed a fully responsive UI with dark/light theme support, focusing on performance optimization and seamless user experience.
                </p>
              </div>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="pt-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-300 dark:border-slate-700 pb-1">
              ACHIEVEMENTS
            </h2>
            <ul className="mt-2.5 space-y-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              <li>• 2nd Prize – Coding Competition</li>
              <li>• Cleared Nxtmock Ai Interview – Nxtwave</li>
              <li>• 1st Prize – Department-level Project Expo</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

