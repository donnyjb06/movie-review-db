import { createContext } from "react";

interface ThemeContextType {
  theme: "dark" | "light";
  handleThemeSwitch: () => void;
}

export const ThemeContext = createContext<undefined | ThemeContextType>(undefined);
