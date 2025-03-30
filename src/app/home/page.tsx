'use client';
import { FullScreenSlider } from "@/components/ui/full-screen-slider";
import { HomePageHeader } from "@/components/ui/home-page-header";
import { NavigationTooltip } from "@/components/ui/navigation-tooltip";
import { sections } from "./data/home-page-sections";
import { useSectionNavigation } from "@/hooks/use-section-navigation";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";

export default function Home() {
  const { currentSectionId, setCurrentSectionId } = useSectionNavigation({ sections });

  return (
    <div className="min-h-screen flex flex-col">
      <HomePageHeader
        sections={sections}
        currentSectionId={currentSectionId}
        setCurrentSectionId={setCurrentSectionId}
      />
      <FullScreenSlider section={sections.find(s => s.id === currentSectionId)!} />
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        <NavigationTooltip />
        <DarkModeToggle />
      </div>
    </div>
  );
}
