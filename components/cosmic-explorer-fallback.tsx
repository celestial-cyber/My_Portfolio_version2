"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function CosmicExplorerFallback() {
  const [activeTab, setActiveTab] = useState("preview")

  // Project details for the fallback
  const projectDetails = {
    title: "Cosmic Explorer",
    description: "An interactive space exploration web application with 3D visualization.",
    technologies: ["Next.js", "Three.js", "WebGL", "Framer Motion"],
    githubUrl: "https://github.com/celestialv/cosmic-explorer",
  }

  // Screenshots for the gallery tab
  const screenshots = [
    { id: 1, src: "/placeholder.svg?height=300&width=500", alt: "Solar System View" },
    { id: 2, src: "/placeholder.svg?height=300&width=500", alt: "Planet Detail" },
    { id: 3, src: "/placeholder.svg?height=300&width=500", alt: "Star Map" },
  ]

  // Features list for the features tab
  const features = [
    "Interactive 3D visualization of the solar system",
    "Detailed information about planets, moons, and stars",
    "Realistic physics-based orbital mechanics",
    "Search functionality for celestial objects",
    "Educational content about space exploration",
    "Responsive design for desktop and mobile devices",
  ]

  return (
    <div className="space-y-6">
      <div className="border border-purple-500 bg-white/5 backdrop-blur-md">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center p-4">
          <div>
            <h3 className="text-xl font-bold">{projectDetails.title}</h3>
            <p className="text-muted-foreground">{projectDetails.description}</p>
          </div>
          <span className="badge badge-outline">Project Preview</span>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {projectDetails.technologies.map((tech) => (
              <span key={tech} className="badge badge-secondary">{tech}</span>
            ))}
          </div>
          {projectDetails.githubUrl && (
            <a
              href={projectDetails.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-purple-500 text-purple-400 px-4 py-2 rounded-md hover:bg-purple-600 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22z"/>
              </svg>
              View on Github
            </a>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className="border border-purple-500 bg-white/5 backdrop-blur-md p-4">
          <h3 className="font-semibold mb-2">Preview</h3>
          <div className="aspect-video overflow-hidden rounded-lg bg-muted/30">
            <div className="flex h-full flex-col items-center justify-center p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold">Cosmic Explorer</h3>
              <p className="mb-6 text-muted-foreground">
                The interactive 3D visualization is currently undergoing maintenance.
              </p>
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 animate-spin rounded-full border-b-2 border-primary"></div>
                <div className="absolute inset-4 animate-pulse rounded-full bg-primary/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-medium">Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-purple-500 bg-white/5 backdrop-blur-md p-4">
          <h3 className="font-semibold mb-2">Gallery</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screenshot) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={screenshot.src || "/placeholder.svg"}
                    alt={screenshot.alt}
                    className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <p className="mt-2 text-center text-sm text-muted-foreground">{screenshot.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border border-purple-500 bg-white/5 backdrop-blur-md p-4">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}