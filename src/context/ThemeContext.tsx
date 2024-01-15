import * as React from 'react';
import { usePersistedState, PersistedStateModel } from '../hooks/use-persisted-state';

type Theme = 'light' | 'dark';

const themeModel: PersistedStateModel<Theme> = {
  encode: (input: Theme) => input,
  decode: (input: unknown) => (input === 'dark' ? 'dark' : 'light'),
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<Theme>('theme', themeModel);

  const toggleTheme = React.useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
