import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  prefixText?: string;
  cursorTextOptions: string[];
  suffixText?: string;
  letterTypeTime?: number;
  finishedWordDelay?: number;
  className?: string;
}

export function TypewriterText({
  prefixText = '',
  cursorTextOptions,
  suffixText = '',
  letterTypeTime = 150,
  finishedWordDelay = 2000,
  className = '',
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  // Main typing logic
  useEffect(() => {
    const word = cursorTextOptions[wordIndex];
    let i = 0;
    let current = '';

    setDisplayText('');

    intervalRef.current = setInterval(() => {
      if (i < word.length) {
        current += word[i];     
        setDisplayText(current); 
        i++;
      } else {
        clearInterval(intervalRef.current!);

        timeoutRef.current = setTimeout(() => {
          let j = word.length;

          intervalRef.current = setInterval(() => {
            if (j > 0) {
              current = current.slice(0, -1);
              setDisplayText(current);
              j--;
            } else {
              clearInterval(intervalRef.current!);
              setWordIndex((prev) => (prev + 1) % cursorTextOptions.length);
            }
          }, letterTypeTime);
        }, finishedWordDelay);
      }
    }, letterTypeTime);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [cursorTextOptions, finishedWordDelay, letterTypeTime, wordIndex]);

  return (
    <span className={className}>
      {prefixText}
      {displayText}
      <span
        className={`inline-block w-[2px] h-[1em] bg-white ml-[2px] transition-opacity duration-200 ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {suffixText}
    </span>
  );
}
