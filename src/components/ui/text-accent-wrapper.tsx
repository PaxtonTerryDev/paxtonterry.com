export function TextAccentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-emerald-600 dark:text-emerald-400">
      {children}
    </span>
  );
}