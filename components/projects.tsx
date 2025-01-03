import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import Image from "next/image"


interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  image: string
}

const projects: Project[] = [
    {
      "title": "Trust App",
      "description": "A platform connecting users with registered trusts for seamless food donations. Core features include user registration, trust management, and real-time notifications.",
      "tags": ["React.js", "Node.js", "MongoDB"],
      "link": "https://github.com/hariharan138/GlobalTrust",
      "image": "/placeholder.svg?height=400&width=600"
    },
    {
      "title": "Quiz App",
      "description": "A React-based skill evaluation app featuring dynamic question tracking, time management, and score calculation.",
      "tags": ["React.js", "JavaScript", "CSS"],
      "link": "https://quiz-app13.vercel.app/",
      "image": "/placeholder.svg?height=400&width=600"
    },
    {
      "title": "YouTube Search App",
      "description": "An app that allows users to search for YouTube videos, leveraging the YouTube Data API for seamless interaction.",
      "tags": ["React.js", "YouTube API", "JavaScript"],
      "link": "https://youtube-premium-eight.vercel.app",
      "image": "/placeholder.svg?height=400&width=600"
    },
    {
      "title": "ShareText",
      "description": "A simple and efficient text-sharing app, allowing users to share snippets of text across devices seamlessly.",
      "tags": ["React.js", "JavaScript", "CSS"],
      "link": "https://sharetexts.vercel.app/",
      "image": "/placeholder.svg?height=400&width=600"
    },
    {
      "title": "Admin Dashboard",
      "description": "A responsive admin dashboard with real-time analytics, user management, and data visualization.",
      "tags": ["React.js", "Tailwind CSS","Node.js","Express.js","MongoDB"],
      "link": "https://github.com/hariharan138/admin-dashboard",
      "image": "/placeholder.svg?height=400&width=600"
    },
    {
      "title": "Appointment Management App",
      "description": "A streamlined app for managing appointments with features like scheduling, notifications, and user management.",
      "tags": ["React.js", "MongoDB", "Node.js","Express.js"],
      "link": "https://github.com/hariharan138/appointment-management",
      "image": "/placeholder.svg?height=400&width=600"
    }
  
]

export function Projects() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Card key={i}>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  priority={i === 0}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

