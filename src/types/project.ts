import { badgeVariants } from "@/components/ui/badge";
import { VariantProps } from "class-variance-authority";

export interface Project {
  title: string;
  description: ProjectDescription;
  languages: ProgrammingLanguage[];
  githubUrl: string;
  deploymentUrl?: string;
}

interface ProjectDescription {
  short: string;
  long: string;
}

export enum ProgrammingLanguage {
  Typescript,
  NextJS,
  PostgreSQL,
  Oracle,
  Go,
}

export const LanguageToBadgeVariant: Record<
  ProgrammingLanguage,
  VariantProps<typeof badgeVariants>["variant"]
> = {
  [ProgrammingLanguage.Typescript]: "typescript",
  [ProgrammingLanguage.NextJS]: "next",
  [ProgrammingLanguage.PostgreSQL]: "postgres",
  [ProgrammingLanguage.Go]: "go",
  [ProgrammingLanguage.Oracle]: "oracle",
};

export const LanguageLabel: Record<ProgrammingLanguage, string> = {
  [ProgrammingLanguage.Typescript]: "Typescript",
  [ProgrammingLanguage.NextJS]: "Next.js",
  [ProgrammingLanguage.PostgreSQL]: "PostgreSQL",
  [ProgrammingLanguage.Go]: "Go",
  [ProgrammingLanguage.Oracle]: "Oracle",
};
