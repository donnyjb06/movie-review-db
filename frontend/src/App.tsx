import React from "react";
import Header from "./components/Header/Header"
import { ThemeContextProvider } from "./helpers/providers/ThemeProvider";
import Main from "./components/Main/Main";

const App: React.FunctionComponent = () => {
  return(
    <ThemeContextProvider>
      <Header />
      <Main>
        
      </Main>
    </ThemeContextProvider>
  )
}

export default App