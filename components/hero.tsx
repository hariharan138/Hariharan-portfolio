import Image from 'next/image'
import { Github, Twitter, Linkedin, Mail ,ChefHat} from 'lucide-react'
import { Button } from "../components/ui/button"
import Profile from "../app/image.jpg"

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-24 px-4 text-center">
      <Image
        src={Profile}
        alt="Hariharan S"
        width={150}
        height={150}
        className="rounded-full"
      />
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Hariharan S
        </h1>
        <p className="text-xl text-muted-foreground">
          MERN Stack Developer
        </p>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        a MERN Developer skilled in React.js, JavaScript(ES6+),MongoDB,NodeJS and ExpressJS with expertise in responsive layouts, animations, and semantic markup.
        </p>
      </div>
      <div className="flex space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/hariharan138/" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://www.codechef.com/users/p_20cc138" target="_blank" rel="noopener noreferrer">
            <ChefHat  className="h-5 w-5" />
            <span className="sr-only">CodeChef</span>
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://www.linkedin.com/in/hari-haran-4aab64269/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:hariharan98704@example.com">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </Button>
      </div>
    </div>
  )
}

