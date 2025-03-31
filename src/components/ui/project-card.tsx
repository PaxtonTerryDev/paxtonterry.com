import {
  LanguageLabel,
  LanguageLogo,
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
      <CardHeader className="gap-2">
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-row gap-2">
          {languages.map((language) => {
            return (
              <Badge
                key={language}
                variant={LanguageToBadgeVariant[language]}
                className="cursor-pointer"
                onClick={() => console.log(LanguageLabel[language])}
              >
                <div className="flex gap-1 items-center">
                  {/* {LanguageLogo[language]} */}
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
