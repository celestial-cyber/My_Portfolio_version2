"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<"courses" | "competitions">("courses")
  const [showAll, setShowAll] = useState(false)
  const INITIAL_COUNT = 5
 const courses = [
  // ===================== 2025–2026 =====================

  {
    id: 1,
    name: "Deep Learning",
    issuer: "NPTEL, IIT Madras",
    date: "2025",
    link: "",
    tags: ["Deep Learning", "AI"]
  },
  {
    id: 2,
    name: "Mathematical Foundation of Machine Learning",
    issuer: "NPTEL, IISc Bangalore",
    date: "2025",
    link: "",
    tags: ["Machine Learning", "Mathematics"]
  },
  {
    id: 3,
    name: "AI Skill Passport",
    issuer: "EY & Microsoft",
    date: "2025",
    link: "",
    tags: ["AI"]
  },
  {
    id: 4,
    name: "A Hands-On Guide to MLOps",
    issuer: "Pregrad",
    date: "2025",
    link: "",
    tags: ["MLOps"]
  },
  {
    id: 5,
    name: "N8N Crash Course",
    issuer: "LetsUpgrade",
    date: "2025",
    link: "",
    tags: ["Automation"]
  },

  // ===================== Python (split from Essentials 1 & 2) =====================
  {
    id: 6,
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "2025",
    link: "",
    tags: ["Python"]
  },
  {
    id: 7,
    name: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "2025",
    link: "",
    tags: ["Python"]
  },

  {
    id: 8,
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2023",
    link: "https://www.credly.com/badges/b3d2ba14-aeb8-40c1-8630-70e387b209fc/public_url",
    tags: ["Cybersecurity"]
  },
  {
    id: 9,
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2025",
    link: "https://www.credly.com/badges/c976ccd7-2f18-4b80-8c34-322ab1c58ae3",
    tags: ["Networking"]
  },
  {
    id: 10,
    name: "Quantum Computing Introduction",
    issuer: "Fractal (Coursera)",
    date: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/74P9CVZULTNX",
    tags: ["Quantum Computing"]
  },
  {
    id: 11,
    name: "Python Data Visualization",
    issuer: "Rice University (Coursera)",
    date: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/HM3WUFDFKVV1",
    tags: ["Python", "Visualization"]
  },
  {
    id: 12,
    name: "Data Visualization with Python & R for Engineers",
    issuer: "Northeastern University",
    date: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/GIAYS7XO9CC8",
    tags: ["Python", "R", "Data Visualization"]
  },
  {
    id: 13,
    name: "Overview of Data Visualization",
    issuer: "Coursera",
    date: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/T6V0VXSF0PSD",
    tags: ["Data Visualization"]
  },
  {
    id: 14,
    name: "Cloud Computing Basics",
    issuer: "LearnQuest (Coursera)",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/4NP3YAJEKFAC",
    tags: ["Cloud"]
  },
  {
    id: 15,
    name: "Computer Networking",
    issuer: "Illinois Institute of Technology",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/JYKG5MAD2REN",
    tags: ["Networking"]
  },
  {
    id: 16,
    name: "Introduction to Large Language Models",
    issuer: "Google",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/CFWVAQMJWXWD",
    tags: ["LLM", "AI"]
  },
  {
    id: 17,
    name: "Google Crash Course on Python",
    issuer: "Google",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/8MWBY55LDBU4",
    tags: ["Python"]
  },
  {
    id: 18,
    name: "Google Foundations of Cybersecurity",
    issuer: "Google",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/UY9S3QW63D5L",
    tags: ["Cybersecurity"]
  },
  {
    id: 19,
    name: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/Q9BVW8JSGG3Q",
    tags: ["AI"]
  },
  {
    id: 20,
    name: "Machine Learning for All",
    issuer: "University of London",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/VQZQEAPTMVD5",
    tags: ["Machine Learning"]
  },
  {
    id: 21,
    name: "Python for Data Analysis (Pandas & NumPy)",
    issuer: "Coursera",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/0NQWBJC9VVM8",
    tags: ["Python", "Data Analysis"]
  },
  {
    id: 22,
    name: "Data Analysis with Python",
    issuer: "IBM",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/P6LYTOID7NAF",
    tags: ["Data Analysis"]
  },
  {
    id: 23,
    name: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/Q3FEA93EFCKN",
    tags: ["GenAI"]
  },
  {
    id: 24,
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "2024",
    link: "https://www.linkedin.com/learning/certificates/17b1bc60b3e424058eb04bec485f6c3a573e3cdd526e5274099134eef9a44bb6",
    tags: ["GenAI"]
  },
  {
    id: 25,
    name: "Learning Microsoft 365 Copilot",
    issuer: "LinkedIn",
    date: "2024",
    link: "https://www.linkedin.com/learning/certificates/ae0d5704f763e4b8048a6fa78e7d7f9796d4f272c7fcb8700fbce6b8d5e9780a",
    tags: ["Microsoft"]
  },
  {
    id: 26,
    name: "Streamlining Work with Microsoft Copilot",
    issuer: "LinkedIn",
    date: "2024",
    link: "https://www.linkedin.com/learning/certificates/ccf7ee7a8d8591f8d69e6f3256eadce068bb59c9494f21c1bad28ffdbb3eb8c4",
    tags: ["Microsoft"]
  },
  {
    id: 27,
    name: "Google Introduction to Generative AI",
    issuer: "Google",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/X5BENGQ2QWBR",
    tags: ["GenAI"]
  },
  {
    id: 28,
    name: "Quantum Mechanics",
    issuer: "University of Colorado Boulder",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/ZC8HNJ2SUV32",
    tags: ["Quantum Physics"]
  },
  {
    id: 29,
    name: "Meta Foundations of AR",
    issuer: "Meta",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/NPUDA7ULEJ5Q",
    tags: ["AR"]
  },
  {
    id: 30,
    name: "Introduction to Java",
    issuer: "Coursera",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/5LAFCX7BS9LY",
    tags: ["Java"]
  },
  {
    id: 31,
    name: "C++ for C Programmers",
    issuer: "UCSC",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/DE4MPT7XS8MX",
    tags: ["C++"]
  },
  {
    id: 32,
    name: "C for Everyone: Structured Programming",
    issuer: "UCSC",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/records/2ATQ36D9NS5H",
    tags: ["C"]
  },
  {
    id: 33,
    name: "Mastering Python",
    issuer: "Infosys Springboard",
    date: "2024",
    link: "https://drive.google.com/file/d/1ytGbDBfWTiqNlYx4tVaFGW-AM5f1wYfZ/view",
    tags: ["Python"]
  },
  {
    id: 34,
    name: "Introduction to Python",
    issuer: "Infosys Springboard",
    date: "2024",
    link: "https://drive.google.com/file/d/1Lkfq1ssEUpl6dOYmNXpzgdXGRO6iJVo_/view",
    tags: ["Python"]
  },
  {
    id: 35,
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2024",
    link: "",
    tags: ["SQL"]
  },
  {
    id: 36,
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2024",
    link: "https://www.hackerrank.com/certificates/iframe/5412a2a8ad7e",
    tags: ["Problem Solving"]
  },

  // ===================== ISRO / IIRS =====================

  {
    id: 37,
    name: "Remote Sensing Data Analytics for Crop Production Forecasting",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Remote Sensing", "GIS"]
  },
  {
    id: 38,
    name: "Archival & Access of Space Science Data",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Space Science", "Data"]
  },
  {
    id: 39,
    name: "Geospatial Technology for Modelling Urban Environment",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["GIS", "Urban Modeling"]
  },
  {
    id: 40,
    name: "Method of Space Science Research",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Space Science"]
  },
  {
    id: 41,
    name: "Recent Trends in Ecological Modelling & Simulation",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Ecology", "Simulation"]
  },
  {
    id: 42,
    name: "Space Exploration Technology: An Overview",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Space Technology"]
  },
  {
    id: 43,
    name: "Geodata Processing using Python & Machine Learning",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Python", "ML", "GIS"]
  },
  {
    id: 44,
    name: "Workshop on Space Technology Applications",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Space Technology"]
  },
  {
    id: 45,
    name: "Geodata Sharing & Cyber Security",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Cybersecurity", "GIS"]
  },
  {
    id: 46,
    name: "Overview of Geocomputation & Geoweb Applications",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Geospatial"]
  },
  {
    id: 47,
    name: "Deep Learning in Ecological Studies",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Deep Learning", "Ecology"]
  },
  {
    id: 48,
    name: "Basics of Remote Sensing, GIS & GNSS",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["GIS", "Remote Sensing"]
  },
  {
    id: 49,
    name: "RS & GIS Applications in Natural Resource Management",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["GIS"]
  },
  {
    id: 50,
    name: "Air Pollutants: Monitoring & Modelling",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Environment"]
  },
  {
    id: 51,
    name: "Overview of Geographical Information Systems",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["GIS"]
  },
  {
    id: 52,
    name: "Space-Based Inputs for Village-Level Crop Assessment",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["Agriculture", "GIS"]
  },
  {
    id: 53,
    name: "Overview of Global Navigation Satellite Systems",
    issuer: "ISRO / IIRS",
    date: "2025",
    link: "",
    tags: ["GNSS"]
  },
  {
    id: 54,
    name: "START-2025: Space Science & Technology Awareness Training",
    issuer: "ISRO",
    date: "2025",
    link: "",
    tags: ["Space Science"]
  },

  // ===================== Additional Certifications =====================

  {
    id: 55,
    name: "Course on Computer Concepts",
    issuer: "NIELIT",
    date: "2024",
    link: "",
    tags: ["Computer Basics"]
  },
  {
    id: 56,
    name: "AI for Everyone",
    issuer: "IBM",
    date: "2024",
    link: "",
    tags: ["AI"]
  },
  {
    id: 57,
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "2024",
    link: "",
    tags: ["Java"]
  },
  {
    id: 58,
    name: "Mastering Data Structures using C & C++",
    issuer: "Udemy",
    date: "2024",
    link: "",
    tags: ["Data Structures", "C++"]
  }
];
  
 const competitions = [
  // ---------------- 2026 ----------------

  {
    id: 20,
    name: "Gen AI Forge Hackathon 2026",
    issuer: "NASSCOM",
    date: "2026",
    description: "Participation in Gen AI Forge Hackathon 2026",
    link: "",
    tags: ["Hackathon", "AI"]
  },
  {
    id: 21,
    name: "EliteHer Hackathon 2026",
    issuer: "Elite Coders",
    date: "2026",
    description: "Participation in EliteHer Hackathon 2026",
    link: "",
    tags: ["Hackathon"]
  },
  {
    id: 22,
    name: "NextGen AI Hackathon 2026",
    issuer: "AI Academia",
    date: "2026",
    description: "Participation in NextGen AI Hackathon 2026",
    link: "",
    tags: ["Hackathon", "AI"]
  },
  {
    id: 23,
    name: "ForgeAscend'26 Mega Buildathon",
    issuer: "KLH",
    date: "2026",
    description: "Participation in ForgeAscend'26 Mega Buildathon",
    link: "",
    tags: ["Hackathon"]
  },
  {
    id: 24,
    name: "CodeStorm | Enyugma'26",
    issuer: "Unstop",
    date: "2026",
    description: "Participation in CodeStorm competition",
    link: "",
    tags: ["Coding"]
  },
  {
    id: 25,
    name: "Reverse Coding X | Shaastra 2026",
    issuer: "IIT Madras",
    date: "2026",
    description: "Participation in Reverse Coding X",
    link: "",
    tags: ["Coding"]
  },

  // ---------------- 2026 Events / Fests ----------------

  {
    id: 33,
    name: "Forge Inspira’26 Career & Corporate Fest",
    issuer: "IIT Hyderabad",
    date: "2026",
    description: "Participation in career and corporate fest",
    link: "",
    tags: ["Fest"]
  },
  {
    id: 34,
    name: "Theme2Web",
    issuer: "SPECFIESTA’26",
    date: "2026",
    description: "Participation in Theme2Web event",
    link: "",
    tags: ["Event"]
  },
  {
    id: 35,
    name: "Quest Arena",
    issuer: "SPECFIESTA’26",
    date: "2026",
    description: "Participation in Quest Arena",
    link: "",
    tags: ["Event"]
  },
  {
    id: 36,
    name: "Code Shuffle",
    issuer: "SPECFIESTA’26",
    date: "2026",
    description: "Participation in Code Shuffle",
    link: "",
    tags: ["Coding"]
  },
  {
    id: 37,
    name: "Techno Blitz (Project Expo)",
    issuer: "SPECFIESTA’26",
    date: "2026",
    description: "Participation in Project Expo event",
    link: "",
    tags: ["Project"]
  },
  {
    id: 38,
    name: "BuildSphere (Paper Presentation)",
    issuer: "SPECFIESTA’26",
    date: "2026",
    description: "Participation in Paper Presentation",
    link: "",
    tags: ["Presentation"]
  },
  {
    id: 39,
    name: "Mindscape (Poster Presentation)",
    issuer: "SPECFIESTA’26",
    date: "2026",
    description: "Participation in Poster Presentation",
    link: "",
    tags: ["Poster"]
  },

  // ---------------- Workshops (date not specified) ----------------

  {
    id: 29,
    name: "Image Processing with Computer Vision Workshop",
    issuer: "Forge Inspira",
    date: "",
    description: "Workshop on Computer Vision and Image Processing",
    link: "",
    tags: ["Workshop", "AI"]
  },
  {
    id: 30,
    name: "Turbotron: 2-Day Hands-On Workshop",
    issuer: "SPEC Infinitron",
    date: "",
    description: "Hands-on technical workshop",
    link: "",
    tags: ["Workshop"]
  },
  {
    id: 31,
    name: "Innovators Drone Workshop",
    issuer: "SPEC Infinitrons",
    date: "",
    description: "Workshop on drone technology",
    link: "",
    tags: ["Workshop"]
  },
  {
    id: 32,
    name: "Break into Data Analytics Workshop",
    issuer: "Coding Ninjas",
    date: "",
    description: "Workshop on Data Analytics fundamentals",
    link: "",
    tags: ["Workshop", "Data"]
  },

  // ---------------- 2025 ----------------

  {
    id: 1,
    name: "Code for Change AI Hackathon",
    issuer: "DevPost",
    date: "Jun 2025",
    description: "Certificate of Participation – 2025 Code for Change AI Hackathon",
    link: "https://drive.google.com/file/d/1oaYpsDCHs81ULGf_MO6ikfNyv3QfiSSj",
    tags: ["Hackathon", "AI"]
  },
  {
    id: 2,
    name: "Essay Writing Competition",
    issuer: "SPEC-NSS",
    date: "Jun 2025",
    description: "Certificate of Participation – Essay Writing Competition",
    link: "https://drive.google.com/file/d/1ynLFajJqht3JWFu3WSfDhCSEluWtrB1F/view?usp=drive_link",
    tags: ["Essay", "Writing"]
  },
  {
    id: 3,
    name: "Hackatopia 2025",
    issuer: "DevPost, Certopus",
    date: "Apr 2025",
    description: "Hackatopia Hackathon Participation",
    link: "https://certopus.com/c/80550047e1c34a399ec73281a01b7749",
    tags: ["Hackathon"]
  },
  {
    id: 4,
    name: "Green Pioneers Hackathon",
    issuer: "DevPost",
    date: "Mar 2025",
    description: "Participation in Green Pioneer’s Hackathon",
    link: "https://drive.google.com/file/d/1zz4ieoFO7WlIjj7fBy8Ii60C-NaKQE_Z/view?usp=drive_link",
    tags: ["Hackathon"]
  },
  {
    id: 5,
    name: "The AI Hack Day",
    issuer: "St. Peter’s Engineering College",
    date: "Jan 2025",
    description: "Visionaries – The AI Hack Day Participation",
    link: "https://drive.google.com/file/d/1FxQhnQixENFgvDbGFkQdcuaefMI3WBZq/view?usp=drive_link",
    tags: ["Hackathon", "AI"]
  },
  {
    id: 19,
    name: "Neuro Debugging | AI Infinity'25",
    issuer: "Gradient - St. Peter's Engineering College",
    date: "Jul 2025",
    description: "Participation in Code Debugging event",
    link: "https://drive.google.com/file/d/1REXgQDC3h2qZ8OjBTkWwWJ3bpQBJLuAR/view?usp=drive_link",
    tags: ["Code Debugging"]
  },
  {
    id: 26,
    name: "MOSIP Decode 2025 | Synergy’25",
    issuer: "IIIT Bangalore",
    date: "2025",
    description: "Participation in MOSIP Decode Challenge",
    link: "",
    tags: ["Hackathon"]
  },
  {
    id: 27,
    name: "NASA International Space Apps Challenge 2025",
    issuer: "NASA",
    date: "2025",
    description: "Participation in NASA Space Apps Challenge",
    link: "",
    tags: ["Space", "Hackathon"]
  },
  {
    id: 28,
    name: "Adobe India Hackathon 2025",
    issuer: "Adobe",
    date: "2025",
    description: "Participation in Adobe India Hackathon",
    link: "",
    tags: ["Hackathon"]
  },

  // ---------------- 2024 ----------------

  {
    id: 6,
    name: "2nd Prize – Poster Presentation",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Awarded 2nd Prize in Poster Presentation",
    link: "https://drive.google.com/file/d/1Z5cV1RV3S8p3hGZOyqrpJtJVX0l7fbYL/view?usp=drive_link",
    tags: ["Poster", "Award"]
  },
  {
    id: 7,
    name: "Poster Presentation – First Prize",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Awarded First Prize in Poster Presentation",
    link: "https://drive.google.com/file/d/1YtXiZtL8HH9qBWSoxAryOnOgk6CepZz5/view?usp=sharing",
    tags: ["Poster", "Award"]
  },
  {
    id: 8,
    name: "Poster Presentation Participation",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Certificate of Participation – Poster Presentation",
    link: "https://drive.google.com/file/d/1YPRPC0oPIPcy8BGdWho552hMNivzLH-W/view?usp=sharing",
    tags: ["Poster"]
  },
  {
    id: 9,
    name: "Paper Presentation",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Paper Presentation Participation",
    link: "https://drive.google.com/file/d/1YpLgxyR1Kau6QvWS8X0DB4UOeaeCQioY/view?usp=sharing",
    tags: ["Presentation"]
  },
  {
    id: 10,
    name: "Brand Aid",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Participation in Brand Aid Competition",
    link: "https://drive.google.com/file/d/1YKJjZ1MW1NCzO9KHX-uLGV1gVZSZRZUU/view?usp=sharing",
    tags: ["Branding"]
  },
  {
    id: 11,
    name: "Code Debugging",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Participation in Code Debugging Event",
    link: "https://drive.google.com/file/d/1YEj-sXHH8Su0L1qcWX62eGOl4taE8ebp/view?usp=sharing",
    tags: ["Debugging"]
  },
  {
    id: 12,
    name: "Mindmaze",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Participation in Mindmaze Quiz",
    link: "https://drive.google.com/file/d/1YhdLVHtgMA4YL_WiC5iW_DiV-2-PZi0x/view?usp=sharing",
    tags: ["Quiz"]
  },

  // ---------------- 2023 ----------------

  {
    id: 13,
    name: "National Mathematics Day",
    issuer: "Adikavi Nannaya University (AKNU)",
    date: "Dec 2023",
    description: "Participation in National Mathematics Day",
    link: "https://drive.google.com/file/d/1YxQBU7bJoq5sVHy0xNXD2HbMBIIFJcG6/view?usp=drive_link",
    tags: ["Mathematics"]
  },
  {
    id: 14,
    name: "Idea Generation Competition",
    issuer: "St. Peter’s Engineering College",
    date: "Nov 2023",
    description: "Participation in Idea Generation Competition",
    link: "https://drive.google.com/file/d/1YQ1QOnC7Vqee93SpfOtc0inFGuuRJfKx/view?usp=sharing",
    tags: ["Innovation"]
  },
  {
    id: 15,
    name: "Project Expo",
    issuer: "St. Peter’s Engineering College",
    date: "Nov 2023",
    description: "Participation in Project Expo",
    link: "https://drive.google.com/file/d/1YlqoVSFZ5i4CrT-rrXGe6FYqPY2_Pukn/view?usp=sharing",
    tags: ["Project"]
  },
  {
    id: 16,
    name: "Aquilla Painting Competition",
    issuer: "Aquilla",
    date: "2023",
    description: "1st Prize in Aquilla Painting Competition",
    link: "https://drive.google.com/file/d/1Y9sP8_8wP6Yi9UmMFUbgzXHuIMnQG5fy/view?usp=sharing",
    tags: ["Painting", "Art"]
  },
  {
    id: 17,
    name: "Essay Writing Competition",
    issuer: "CISF",
    date: "2023",
    description: "Participation in CISF Essay Writing Competition",
    link: "https://drive.google.com/file/d/1YCM4rnGpUeAYKhiCkODjl2I_nuUX2xpr/view?usp=sharing",
    tags: ["Essay"]
  },

  // ---------------- 2021 ----------------

  {
    id: 18,
    name: "ISRO Cyberspace Quiz",
    issuer: "ISRO",
    date: "Feb 2021",
    description: "Participation in Cyberspace Quiz Competition",
    link: "",
    tags: ["ISRO", "Quiz"]
  }
];


 const fullList = activeTab === "courses" ? courses : competitions

const allCerts = showAll ? fullList : fullList.slice(0, INITIAL_COUNT)

  return (
    <section id="certifications" className="py-20 md:py-28 bg-black">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-purple-300 text-lg">
            {fullList.length} {activeTab === "courses" ? "Courses" : "Competitions"}
          </p>
        </motion.div>
        

        <div className="flex gap-3 justify-center mb-10">
          <Button
            onClick={() => setActiveTab("courses")}
            variant={activeTab === "courses" ? "default" : "outline"}
            className="gap-2"
          >
            📘 Courses
          </Button>
          <Button
            onClick={() => setActiveTab("competitions")}
            variant={activeTab === "competitions" ? "default" : "outline"}
            className="gap-2"
          >
            🏆 Hackathons & Events 
          </Button>
        </div>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {allCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              className="flex items-center justify-between p-3 rounded-lg border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-950/20 transition-all group"
            >
              <div className="flex-1 min-w-0">
                <h4 className="text-purple-100 font-medium text-sm group-hover:text-purple-300 transition-colors truncate">
                  {cert.name}
                </h4>
                <p className="text-purple-400 text-xs mt-0.5">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 p-1.5 rounded hover:bg-purple-900/50 transition-colors flex-shrink-0"
                  title="View Certificate"
                >
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
         <div className="flex justify-center mt-6">
    <Button
      onClick={() => setShowAll((prev) => !prev)}
      variant="outline"
      className="text-purple-300 border-purple-500/30 hover:bg-purple-950/30"
    >
      {showAll ? "Show Less" : "Show More"}
    </Button>
  </div>
      </div>
    </section>
  )
}