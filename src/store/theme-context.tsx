import { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const ctxValue = {
    isDarkMode: isDarkMode,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
