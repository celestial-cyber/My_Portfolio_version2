"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      id: 1,
      title: "PrepLens - A Centralized Placement Preparation and Tracker Portal",
      description:
        "PrepLens is a role-based placement preparation platform with Student and Admin workspaces.",
      technologies: ["HTML", "JS, Chart-JS", "React","Tailwind CSS", "Firebase", "AI"],
      categories: ["Technical"],
      githubUrl:
       " https://github.com/celestial-cyber/MyVersionOfPrepLens",
    },
    {
      id: 2,
      title: "AstroScope – Exoplanet Detection ML Model | NASA Space App Challenge 2025",
      description:
        "Built an end-to-end ML platform using the Kepler Mission dataset to classify confirmed exoplanets vs. false positives, achieving 83% accuracy with Random Forest. ",
      technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Numpy"],
      categories: ["Technical"],
      githubUrl:
        "https://github.com/celestial-cyber/NasaSpaceAppChallenge-MyProject",
    },
    {
      id: 3,
      title: "COSMICIPHER-Alien-Audio-Intelligence-System",
      description:
        "COSMICIPHER is a sci-fi inspired AI system that explores how an unknown “alien-like” language can be decoded using only audio signals. Instead of relying on human language, this project treats communication as pure physics — frequency, waveform, and pattern — and uses machine learning to map these signals to meaning.It simulates a first-contact scenario, where machines must interpret intelligence without any shared linguistic structure.",
      technologies: ["Python", "Streamlit"],
      categories: ["Technical"],
      githubUrl:
        "https://github.com/celestial-cyber/COSMICIPHER-Alien-Audio-Intelligence-System",
    },
    {
      id: 4,
      title: "Cassiopeia - Rule Based Chatbot",
      description:
        "Simple rule-based chatbot that responds based on user input using basic AI techniques.",
      technologies: ["Python", "Streamlit", "AI"],
      categories: ["Technical"],
      githubUrl: "https://github.com/celestial-cyber/AI-Chatbot-Streamlit",
    },
    {
      id: 5,
      title: "ManoDarpan - Mental Wellness App",
      description:
        "Privacy-focused AI mental health app with SOS alerts, journaling, mood tracking, and more. Built for Code for Change 2025.",
      technologies: ["React", "Tailwind", "TypeScript", "shadcn/ui"],
      categories: ["Technical"],
      githubUrl:
        "https://github.com/celestial-cyber/ManoDarpan-The-AI-mental-wellness-app",
    },
    {
      id: 6,
      title: "Arduino Based projects",
      description:
        "Built hands-on Arduino projects using sensors such as DHT, LDR, vibration, sound, and rotary encoders to implement automation, environmental monitoring, alert systems, and smart control applications.",
      technologies: ["Arduino", "Sensors", "Hardware"],
      categories: ["Hardware"],
      githubUrl:
        "https://github.com/celestial-cyber/InternetOfthingsLab",
    },
    {
      id: 7,
      title: "CarbonWise - Sustainable Living AI",
      description:
        "Detects biodegradable vs non-biodegradable items using image recognition and promotes eco-friendly actions.",
      technologies: ["AI", "Sustainability", "Computer Vision"],
      categories: ["Technical"],
      githubUrl: "https://github.com/celestial-cyber/carbonwise",
    },
    {
      id: 8,
      title: "My Portfolio website Version 1",
      description: 
      "I have created my first portfolio website using Prompt Engineering.",
      technologies:["Prompt Engineering","Portfolio","website"],
      categories:["Creative"],
    },
    {
      id: 9,
      title: "Saturn 3D Visualization",
      description:
        "Interactive Three.js model of Saturn with rings, moons, and orbiting animations in a space-like environment.",
      technologies: ["Three.js", "3D", "WebGL"],
      categories: ["Creative"],
      githubUrl: "https://github.com/celestial-cyber/SaturnPlanetCodeWithMoons",
    },
  ]

  const allCategories = ["Technical", "Creative", "Hardware"]
  const [activeCategory, setActiveCategory] = useState("Technical")
  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeCategory)
  )
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <ErrorBoundary fallback={<p className="text-center py-10">Something went wrong loading the projects section.</p>}>
      <section id="projects" className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent relative inline-block">
                My Projects
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Explore my creative and technical work
              </p>
            </div>
          </motion.div>

          {/* Category Filter Buttons */}
          <div className="mx-auto mt-8 max-w-5xl">
            <div className="flex flex-wrap justify-center gap-3">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="border border-purple-500 text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects List */}
          <div className="mx-auto mt-12 max-w-4xl space-y-8">
            {displayedProjects.length > 0 ? (
              displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="border border-purple-500 bg-white/5 backdrop-blur-md">
                    <CardHeader>
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {activeCategory}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-purple-500 text-purple-400 px-4 py-2 rounded-md hover:bg-purple-600 transition"
                        >
                          <Github className="h-4 w-4" />
                          View on Github
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>

          {/* Show More Button */}
          {filteredProjects.length > 3 && (
            <div className="flex justify-center mt-10">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-600/20"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}

          {/* View More Button */}
          <div className="mt-12 flex justify-center">
            <Button variant="outline" asChild className="border border-purple-500">
              <a href="https://github.com/celestial-cyber" target="_blank" rel="noopener noreferrer">
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}