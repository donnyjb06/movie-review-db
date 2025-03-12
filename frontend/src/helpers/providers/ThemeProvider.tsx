import { FC } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTheme } from "../hooks/useTheme";
import { getInitialTheme } from "../utils/themeUtils";

interface ThemeContextProviderProps {
  children: React.ReactNode
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ( { children } ) => {
  const [ theme, handleThemeSwitch ] = useTheme(getInitialTheme)
  return (
    <ThemeContext.Provider value={ {theme, handleThemeSwitch} }>
      {children}
    </ThemeContext.Provider>
  )
}