import { HomePageSection } from "@/types/home-page-section"
import { TypewriterText } from '@/components/ui/typewriter-text';

const sectonLayoutClass = "text-left w-full px-2"
export const sections: HomePageSection[] = [
    {
      id: "home",
      title: "Home",
      content: (
        <div className={sectonLayoutClass}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-emerald-600">Paxton Terry</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            <TypewriterText cursorTextOptions={["software", "web", "game", "systems"]} suffixText=" developer" className="text-4xl md:text-6xl text-black dark:text-white"/>
          </p>
        </div>
      ),
    },
    {
      id: "about",
      title: "About",
      content: (
        <div className={sectonLayoutClass}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            I'm a software developer with expertise in modern web technologies.
            I love building responsive, accessible, and performant applications
            that provide great user experiences.
          </p>
        </div>
      ),
    },
    {
      id: "projects",
      title: "Projects",
      content: (
        <div className={sectonLayoutClass}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project cards will go here */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600 dark:text-gray-300">Description of project 1</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-600 dark:text-gray-300">Description of project 2</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "blog",
      title: "Blog",
      content: (
        <div className={sectonLayoutClass}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blog post cards will go here */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Blog Post 1</h3>
              <p className="text-gray-600 dark:text-gray-300">Preview of blog post 1</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Blog Post 2</h3>
              <p className="text-gray-600 dark:text-gray-300">Preview of blog post 2</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <div className={sectonLayoutClass}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </a>
        </div>
      ),
    },
  ];
