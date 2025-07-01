"use client";
import ProjectCard from "@/components/ui/project-card";
import { LanguageLabel, ProgrammingLanguage, Project } from "@/types/project";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ComponentProps {
  projects: Project[];
}
export default function ProjectsSection({ projects }: ComponentProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedLanguages, setSelectedLanguages] =
    useState<ProgrammingLanguage[]>([]);
  const [dragging, isDragging] = useState<boolean>(false);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (selectedLanguages.length === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          selectedLanguages.some((lang) => project.languages.includes(lang))
        )
      );
    }
  }, [selectedLanguages, projects]);

  useEffect(() => {
    if (!api) return;

    const onPointerDown = () => isDragging(true);
    const onPointerUp = () => isDragging(false);

    api.on("pointerDown", onPointerDown);
    api.on("pointerUp", onPointerUp);

    return () => {
      api.off("pointerDown", onPointerDown);
      api.off("pointerUp", onPointerUp);
    };
  }, [api]);

  const handleLanguageSelect = (language: ProgrammingLanguage) => {
    setSelectedLanguages(prev => 
      prev.includes(language)
        ? prev.filter(lang => lang !== language)
        : [...prev, language]
    );
  };

  const handleClearFilter = () => {
    setSelectedLanguages([]);
  };

  return (
    <div className="text-left w-full px-2 flex-col justify-center items-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Projects</h2>
      <div className="text-xl md:text-xl font-extralight mb-6 hidden md:flex">
        These are a couple of the larger projects I have built. Other smaller
        projects and scripts can be found on my Github
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.values(ProgrammingLanguage)
          .filter((value) => typeof value === "number")
          .map((language) => (
            <Badge
              key={language as number}
              onClick={() =>
                handleLanguageSelect(language as ProgrammingLanguage)
              }
              className="cursor-pointer"
              variant={selectedLanguages.includes(language as ProgrammingLanguage) ? "default" : "secondary"}
            >
              {LanguageLabel[language as ProgrammingLanguage]}
            </Badge>
          ))}
        {selectedLanguages.length > 0 && (
          <Badge
            onClick={handleClearFilter}
            className="cursor-pointer"
            variant="destructive"
          >
            Clear
          </Badge>
        )}
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className={cn("w-full", dragging ? "cursor-grabbing" : "cursor-grab")}
      >
        <CarouselContent className="">
          {filteredProjects.map((project, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center lg:basis-1/3"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="gap-2 mt-8 w-full flex items-center justify-center text-accent">
        <ArrowLeft />
        <span>Drag to Move</span>
        <ArrowRight />
      </div>
    </div>
  );
}
