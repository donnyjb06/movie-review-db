import React from "react";
import Header from "./components/Header/Header"
import { ThemeContextProvider } from "./helpers/providers/ThemeProvider";

const App: React.FunctionComponent = () => {
  return(
    <ThemeContextProvider>
      <Header />
    </ThemeContextProvider>
  )
}

export default App