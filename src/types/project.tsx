import { badgeVariants } from "@/components/ui/badge";
import { VariantProps } from "class-variance-authority";

export interface Project {
  title: string;
  description: ProjectDescription;
  languages: ProgrammingLanguage[];
  githubUrl: ProjectLink;
  deploymentUrl?: ProjectLink;
}

interface ProjectDescription {
  short: string;
  long: string;
}

export interface ProjectLink {
  label: string;
  href: string;
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

export const LanguageLogo: Record<ProgrammingLanguage, React.ReactNode> = {
  [ProgrammingLanguage.Typescript]: (
    <svg viewBox="0 0 128 128" className="w-4 h-auto">
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
      <path
        data-name="original"
        fill="#007acc"
        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
      ></path>
    </svg>
  ),
  [ProgrammingLanguage.NextJS]: (
    <svg
      viewBox="0 0 128 128"
      className="w-7 h-auto text-black dark:text-white"
    >
      <path
        fill="currentColor"
        d="M64 0C28.66 0 0 28.66 0 64s28.66 64 64 64h.002a63.994 63.994 0 0 0 35.506-10.838l.014-.008.37-.283-.568-.815-52.676-68.054v40.88h-7.552V39.097h9.943l56.229 72.425.64.819.371-.344.014-.012A64.002 64.002 0 0 0 128 64c0-35.34-28.66-64-64-64Zm0 .992c34.804 0 63.008 28.204 63.008 63.008a62.999 62.999 0 0 1-20.983 46.879l-56.5-72.775H38.104v51.771h9.537v-38.97l50.863 65.712A63 63 0 0 1 64 127.007C29.196 127.008.992 98.805.992 64S29.196.992 64 .992Zm17.143 37.112v37.94l9.46 12.423V38.104Zm.992.992h7.476v46.43l-7.476-9.815z"
      ></path>
    </svg>
  ),
  [ProgrammingLanguage.PostgreSQL]: "PostgreSQL",
  [ProgrammingLanguage.Go]: (
    <svg viewBox="0 0 128 128" className="w-4 h-auto">
      <g fill="#00acd7" fill-rule="evenodd">
        <path d="M11.156 54.829c-.243 0-.303-.122-.182-.303l1.273-1.637c.12-.182.424-.303.666-.303H34.55c.243 0 .303.182.182.364l-1.03 1.576c-.121.181-.424.363-.606.363zM2.004 60.404c-.242 0-.303-.12-.182-.303l1.273-1.636c.121-.182.424-.303.667-.303h27.636c.242 0 .364.182.303.364l-.485 1.454c-.06.243-.303.364-.545.364zM16.67 65.98c-.242 0-.302-.182-.181-.364l.848-1.515c.122-.182.364-.363.607-.363h12.12c.243 0 .364.181.364.424l-.12 1.454c0 .243-.243.425-.425.425zM79.58 53.738c-3.819.97-6.425 1.697-10.182 2.666-.91.243-.97.303-1.758-.606-.909-1.03-1.576-1.697-2.848-2.303-3.819-1.878-7.516-1.333-10.97.91-4.121 2.666-6.242 6.605-6.182 11.514.06 4.849 3.394 8.849 8.182 9.516 4.121.545 7.576-.91 10.303-4 .545-.667 1.03-1.394 1.636-2.243H56.064c-1.272 0-1.575-.788-1.151-1.818.788-1.879 2.242-5.03 3.09-6.606.183-.364.607-.97 1.516-.97h22.06c-.12 1.637-.12 3.273-.363 4.91-.667 4.363-2.303 8.363-4.97 11.878-4.364 5.758-10.06 9.333-17.273 10.303-5.939.788-11.454-.364-16.302-4-4.485-3.394-7.03-7.879-7.697-13.454-.788-6.606 1.151-12.546 5.151-17.758 4.303-5.636 10-9.212 16.97-10.485 5.697-1.03 11.151-.363 16.06 2.97 3.212 2.121 5.515 5.03 7.03 8.545.364.546.122.849-.606 1.03z"></path>
        <path
          d="M99.64 87.253c-5.515-.122-10.546-1.697-14.788-5.334-3.576-3.09-5.818-7.03-6.545-11.697-1.091-6.848.787-12.909 4.909-18.302 4.424-5.819 9.757-8.849 16.97-10.122 6.181-1.09 12-.484 17.272 3.091 4.788 3.273 7.757 7.697 8.545 13.515 1.03 8.182-1.333 14.849-6.97 20.546-4 4.06-8.909 6.606-14.545 7.757-1.636.303-3.273.364-4.848.546zm14.424-24.485c-.06-.788-.06-1.394-.182-2-1.09-6-6.606-9.394-12.363-8.06-5.637 1.272-9.273 4.848-10.606 10.545-1.091 4.727 1.212 9.515 5.575 11.454 3.334 1.455 6.667 1.273 9.879-.363 4.788-2.485 7.394-6.364 7.697-11.576z"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
  ),
  [ProgrammingLanguage.Oracle]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 20"
      className="w-4 h-auto"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      stroke="#C74634"
      strokeWidth="4"
    >
      <path d="m10,2a8,8 0 1,0 0,16h12a8,8 0 1,0 0-16z" />
    </svg>
  ),
};
