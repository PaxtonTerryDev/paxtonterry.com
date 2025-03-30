'use client';
import { FullScreenSlider } from "@/components/ui/full-screen-slider";
import { HomePageHeader } from "@/components/ui/home-page-header";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const sections = [
    {
      id: "home",
      title: "Home",
      content: (
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            I'm a software developer passionate about creating amazing web experiences
          </p>
        </div>
      ),
    },
    {
      id: "about",
      title: "About",
      content: (
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            I'm a software developer with expertise in modern web technologies.
            I love building responsive, accessible, and performant applications
            that provide great user experiences.
          </p>
        </div>
      ),
    },
    {
      id: "projects",
      title: "Projects",
      content: (
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project cards will go here */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600 dark:text-gray-300">Description of project 1</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-600 dark:text-gray-300">Description of project 2</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "blog",
      title: "Blog",
      content: (
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blog post cards will go here */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Blog Post 1</h3>
              <p className="text-gray-600 dark:text-gray-300">Preview of blog post 1</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Blog Post 2</h3>
              <p className="text-gray-600 dark:text-gray-300">Preview of blog post 2</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </a>
        </div>
      ),
    },
  ];

  const [isScrolling, setIsScrolling] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        const nextSection = (currentSection + 1) % sections.length;
        setCurrentSection(nextSection);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        const nextSection = (currentSection - 1 + sections.length) % sections.length;
        setCurrentSection(nextSection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sections.length]);

  // Handle wheel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return; // Prevent multiple scrolls while animation is in progress

      const delta = e.deltaY;
      if (Math.abs(delta) > 50) { // Minimum scroll threshold
        setIsScrolling(true);
        if (delta > 0) {
          setCurrentSection((currentSection + 1) % sections.length);
        } else {
          setCurrentSection((currentSection - 1 + sections.length) % sections.length);
        }
        // Reset scrolling state after animation
        setTimeout(() => {
          setIsScrolling(false);
        }, 500); // Match this with the animation duration
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [sections.length, isScrolling]);

  // Handle scroll navigation
  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          const nextSection = (currentSection + 1) % sections.length;
          setCurrentSection(nextSection);
        } else {
          const nextSection = (currentSection - 1 + sections.length) % sections.length;
          setCurrentSection(nextSection);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [sections.length]);


  return (
    <div className="min-h-screen flex flex-col">
          <HomePageHeader />
          <FullScreenSlider sections={sections} currentSection={currentSection} />
    </div>
  );
}
