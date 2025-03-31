import ProjectCard from "@/components/ui/project-card";
import { Project } from "@/types/project";

interface ComponentProps {
  projects: Project[];
}
export default function ProjectsSection({ projects }: ComponentProps) {
  return (
    <div className="text-left w-full px-2">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project cards will go here */}
        {projects.map((project: Project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
}
