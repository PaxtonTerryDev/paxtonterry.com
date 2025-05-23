import { useState, useEffect, useCallback } from 'react';
import { HomePageSection } from '@/types/home-page-section';

interface UseSectionNavigationProps {
  sections: HomePageSection[];
  animationDuration?: number;
}

export function useSectionNavigation({ sections, animationDuration = 500 }: UseSectionNavigationProps) {
  const [currentSectionId, setCurrentSectionId] = useState(sections[0].id);
  const [isScrolling, setIsScrolling] = useState(false);

  const getCurrentIndex = useCallback(() => 
    sections.findIndex(section => section.id === currentSectionId),
    [sections, currentSectionId]
  );

  const goToNextSection = useCallback(() => {
    const currentIndex = getCurrentIndex();
    const nextIndex = (currentIndex + 1) % sections.length;
    setCurrentSectionId(sections[nextIndex].id);
  }, [sections, getCurrentIndex]);

  const goToPreviousSection = useCallback(() => {
    const currentIndex = getCurrentIndex();
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    setCurrentSectionId(sections[prevIndex].id);
  }, [sections, getCurrentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        goToNextSection();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        goToPreviousSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sections, currentSectionId, goToNextSection, goToPreviousSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const delta = e.deltaY;
      if (Math.abs(delta) > 50) {
        setIsScrolling(true);
        if (delta > 0) {
          goToNextSection();
        } else {
          goToPreviousSection();
        }
        setTimeout(() => {
          setIsScrolling(false);
        }, animationDuration);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [sections, currentSectionId, isScrolling, animationDuration, goToNextSection, goToPreviousSection]);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToNextSection();
        } else {
          goToPreviousSection();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [sections, currentSectionId, goToNextSection, goToPreviousSection]);

  return {
    currentSectionId,
    setCurrentSectionId,
    goToNextSection,
    goToPreviousSection,
  };
} 