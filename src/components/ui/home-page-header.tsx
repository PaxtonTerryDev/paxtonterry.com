import Link from 'next/link';
import { HomePageSection } from '@/types/home-page-section';

interface HomePageHeaderProps {
  sections: HomePageSection[];
  currentSectionId: string;
  setCurrentSectionId: (id: string) => void;
}

export function HomePageHeader({ sections, currentSectionId, setCurrentSectionId }: HomePageHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-evenly h-16">
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
        </div>
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