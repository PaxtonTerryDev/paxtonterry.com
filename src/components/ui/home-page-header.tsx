import { HomePageSection } from '@/types/home-page-section';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Card } from './card';

interface HomePageHeaderProps {
  sections: HomePageSection[];
  currentSectionId: string;
  setCurrentSectionId: (id: string) => void;
}

export function HomePageHeader({ sections, currentSectionId, setCurrentSectionId }: HomePageHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentSection = sections.find(section => section.id === currentSectionId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {sections.map((section: HomePageSection) => (
              <HeaderLink 
                key={section.id}
                isSelected={section.id === currentSectionId}
                onClick={() => setCurrentSectionId(section.id)}
              >
                {section.title}
              </HeaderLink>
            ))}
          </nav>

          {/* Mobile Title and Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSection?.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-lg font-semibold text-gray-900 dark:text-white"
              >
                {currentSection?.title}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2"
            >
              <Card className="bg-background/80 backdrop-blur-sm border-border/50">
                <nav className="py-2">
                  {sections.map((section: HomePageSection) => (
                    <MobileHeaderLink
                      key={section.id}
                      isSelected={section.id === currentSectionId}
                      onClick={() => {
                        setCurrentSectionId(section.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {section.title}
                    </MobileHeaderLink>
                  ))}
                </nav>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

interface HeaderLinkProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

function HeaderLink({ children, isSelected, onClick }: HeaderLinkProps) {
  return (
    <div
      onClick={onClick}
      className={`transition-colors cursor-pointer ${
        isSelected 
          ? 'text-gray-900 dark:text-white font-semibold' 
          : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
      }`}
    >
      {children}
    </div>
  );
}

function MobileHeaderLink({ children, isSelected, onClick }: HeaderLinkProps) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 transition-colors cursor-pointer ${
        isSelected 
          ? 'bg-accent text-accent-foreground font-semibold' 
          : 'text-muted-foreground hover:bg-accent/50'
      }`}
    >
      {children}
    </div>
  );
}