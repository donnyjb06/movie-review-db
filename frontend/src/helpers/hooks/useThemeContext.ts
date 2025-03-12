import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    console.error("Theme context must be used inside of Theme Context Provider");
    throw new Error;
  }
  
  return context;
}
