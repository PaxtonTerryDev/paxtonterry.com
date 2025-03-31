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
import { Badge } from "./badge";
import { buttonVariants } from "./button";
import Link from "next/link";

interface ComponentProps {
  project: Project;
}

export default function ProjectCard({ project }: ComponentProps) {
  const { title, description, languages, githubUrl, deploymentUrl } = project;

  return (
    <Card className="py-3 md:py-6">
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
        <CardDescription className="flex md:hidden">
          {description.short}
        </CardDescription>
      </CardHeader>
      <CardContent className="hidden md:flex">
        <p>{description.long}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <ProjectLinkButton href={githubUrl.href}>
          {githubUrl.label}
        </ProjectLinkButton>
        {deploymentUrl && (
          <ProjectLinkButton href={deploymentUrl.href}>
            {deploymentUrl.label}
          </ProjectLinkButton>
        )}
      </CardFooter>
    </Card>
  );
}

function ProjectLinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={buttonVariants({ variant: "outline" })}>
      {children}
    </Link>
  );
}
