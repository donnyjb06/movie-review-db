import React from "react";
import Header from "./components/Header/Header";
import { ThemeContextProvider } from "./helpers/providers/ThemeProvider";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";
import Container from "./components/Container/Container";
import InputGroup from "./components/Input/InputGroup";

const App: React.FunctionComponent = () => {
  return (
    <ThemeContextProvider>
      <Header />
      <Main>
        <Container>
          <Form submitBtnText="Submit Review"></Form>
        </Container>
      </Main>
    </ThemeContextProvider>
  );
};

export default App;
