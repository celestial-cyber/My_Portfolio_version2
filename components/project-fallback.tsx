"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

export default function ProjectFallback({
  title,
  description,
  technologies,
  githubUrl,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="border border-purple-500 bg-white/5 backdrop-blur-md">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center p-4">
          <div>
            <h3 className="CardTitle">{title}</h3>
            <p className="CardDescription">{description}</p>
          </div>
          <span className="badge badge-outline">Project Preview</span>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech: string) => (
              <span key={tech} className="badge badge-secondary">{tech}</span>
            ))}
          </div>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-purple-500 text-purple-400 px-4 py-2 rounded-md hover:bg-purple-600 transition"
            >
              <Github className="h-4 w-4" />
              View on Github
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}