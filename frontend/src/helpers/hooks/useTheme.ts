import { useState, useEffect, useCallback, useRef } from "react";
import { applyTheme } from "../utils/themeUtils";

export const useTheme = (getInitialThemeFunc: () => "dark" | "light") => {
  const [ theme, setTheme ] = useState<"dark" | "light">(() => getInitialThemeFunc())
  const firstRender = useRef<boolean>(true);

  const handleThemeSwitch = useCallback(() => {
    setTheme( prevTheme => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      return newTheme
    })
  }, [])

  useEffect(() => {
    if (firstRender.current === true) {
      firstRender.current = false
    } else {
      applyTheme(theme)
    }
  }, [theme])

  useEffect(() => {
    const themeMediaQuery = matchMedia("(prefers-color-scheme: dark)");

    const handleThemeSwitch = (event: MediaQueryListEvent) => {
      const newTheme = event.matches ? "dark" : "light";
      setTheme(newTheme);
      applyTheme(newTheme)
    }

    themeMediaQuery.addEventListener("change", handleThemeSwitch);

    return () => {
      themeMediaQuery.removeEventListener("change", handleThemeSwitch);
    }
  }, [])

  return [ theme, handleThemeSwitch ] as const;
}