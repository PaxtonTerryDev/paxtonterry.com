'use client';
import { HomePageSection } from '@/types/home-page-section';
import { DefaultHomepageAnimationComponent } from '../animation/default-homepage-animation';

interface FullScreenSliderProps {
  section: HomePageSection;
}

export function FullScreenSlider({ section }: FullScreenSliderProps) {
  return (
    <div className="relative h-[calc(100vh-4rem)] overflow-hidden">
        <DefaultHomepageAnimationComponent key={section.id}>{section.content}</DefaultHomepageAnimationComponent>
    </div>
  );
} 