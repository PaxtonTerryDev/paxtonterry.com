import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { HelpCircleIcon } from 'lucide-react';

export function NavigationTooltip() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeenBefore, setHasSeenBefore] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem('hasSeenNavigationTooltip');
    if (!hasSeenTooltip) {
      setIsVisible(true);
      localStorage.setItem('hasSeenNavigationTooltip', 'true');
      setHasSeenBefore(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  return (
    <div>
        <Button variant="outline" size="icon" onClick={() => setIsVisible(true)}>
            <HelpCircleIcon className="h-4 w-4" />
        </Button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            key="tooltip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
          >
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Navigation Guide
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>• Use arrow keys or mouse wheel to navigate between sections</p>
                <p>• Click on the navigation links at the top to jump to specific sections</p>
                <p>• On mobile, swipe up or down to navigate</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 