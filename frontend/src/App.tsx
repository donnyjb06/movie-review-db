import React from "react";
import Header from "./components/Header/Header"
import { ThemeContextProvider } from "./helpers/providers/ThemeProvider";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";

const App: React.FunctionComponent = () => {
  return(
    <ThemeContextProvider>
      <Header />
      <Main>
        <Form submitBtnText="Submit Review">

        </Form>
      </Main>
    </ThemeContextProvider>
  )
}

export default App