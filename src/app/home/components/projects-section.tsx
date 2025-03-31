import ProjectCard from "@/components/ui/project-card";
import { Project } from "@/types/project";

interface ComponentProps {
  projects: Project[];
}
// TODO - add in a basic filter on projects for language tags
// TODO - update projects page into carousel - mobile shows two, desktop shows 4.  slide between components.
export default function ProjectsSection({ projects }: ComponentProps) {
  return (
    <div className="text-left w-full px-2">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Major Projects</h2>
      <div className="text-xl md:text-xl font-extralight mb-6 hidden md:flex">
        These are a couple of the larger projects I have built. Other smaller
        projects and scripts can be found on my Github
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
        {/* Project cards will go here */}
        {projects.map((project: Project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
}
