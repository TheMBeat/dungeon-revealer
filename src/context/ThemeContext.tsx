import React, { createContext, useContext, ReactNode } from "react";
import { usePersistedState } from "../hooks/use-persisted-state";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const defaultState: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultState);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = usePersistedState<string>("theme", {
    encode: JSON.stringify,
    decode: JSON.parse,
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
