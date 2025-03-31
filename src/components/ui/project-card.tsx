import {
  LanguageLabel,
  LanguageToBadgeVariant,
  Project,
} from "@/types/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";
import { Badge } from "./badge";

interface ComponentProps {
  project: Project;
}

export default function ProjectCard({ project }: ComponentProps) {
  const { title, description, languages, githubUrl, deploymentURL } = project;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-row gap-2 bg-blue">
          {languages.map((language) => {
            return (
              <Badge key={language} variant={LanguageToBadgeVariant[language]}>
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 20"
                    className="w-4 h-auto" // or use h-4 w-auto depending on layout direction
                    preserveAspectRatio="xMidYMid meet"
                    fill="none"
                    stroke="#C74634"
                    strokeWidth="4"
                  >
                    <path d="m10,2a8,8 0 1,0 0,16h12a8,8 0 1,0 0-16z" />
                  </svg>
                  {LanguageLabel[language]}
                </div>
              </Badge>
            );
          })}
        </div>
        <CardDescription>{description.short}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description.long}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
