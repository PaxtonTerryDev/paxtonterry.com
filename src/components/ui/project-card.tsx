import {
  LanguageLabel,
  LanguageToBadgeVariant,
  Project,
} from "@/types/project";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { buttonVariants } from "./button";
import Link from "next/link";

interface ComponentProps {
  project: Project;
}

export default function ProjectCard({ project }: ComponentProps) {
  const { title, description, languages, githubUrl, deploymentUrl } = project;

  return (
    <Card className="py-3 md:py-6 flex flex-col min-w-80 max-w-xl aspect-square select-none">
      <CardHeader className="gap-2 mt-2">
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2">
          {languages.map((language) => {
            return (
              <Badge key={language} variant={LanguageToBadgeVariant[language]}>
                <div className="flex gap-1 items-center">
                  {/* {LanguageLogo[language]} */}
                  {LanguageLabel[language]}
                </div>
              </Badge>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow overflow-ellipsis">
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
