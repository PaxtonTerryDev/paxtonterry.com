import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { HelpCircleIcon, X } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './card';

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
      const target = event.target as Node;
      if (tooltipRef.current && !tooltipRef.current.contains(target) && !(target as Element).closest('button')) {
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
      <Button 
        variant="outline" 
        size="icon" 
        onClick={(e) => {
          e.stopPropagation();
          setIsVisible(!isVisible);
        }}
      >
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
            className="absolute bottom-16 right-0 w-64"
          >
            <Card className="bg-background/80 backdrop-blur-sm border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">Navigation Guide</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4"
                  onClick={() => setIsVisible(false)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Use arrow keys or mouse wheel to navigate between sections</p>
                <p>• Click on the navigation links at the top to jump to specific sections</p>
                <p>• On mobile, swipe up or down to navigate</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 