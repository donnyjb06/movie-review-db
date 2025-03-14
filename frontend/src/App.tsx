import React from "react";
import Header from "./components/Header/Header";
import { ThemeContextProvider } from "./helpers/providers/ThemeProvider";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";
import Container from "./components/Container/Container";
import InputGroup from "./components/Input/InputGroup";
import Star from "./components/Star/Star";

const App: React.FunctionComponent = () => {
  return (
    <ThemeContextProvider>
      <Header />
      <Main>
        <Container>
          <Form submitBtnText="Submit Review">
            <h3>Add a movie review</h3>
            <InputGroup
              labelText="Title"
              inputType="text"
              inputName="title"
              isTextArea={false}
            />
            <InputGroup
              labelText="Genre"
              inputType="text"
              inputName="title"
              isTextArea={false}
            />
            <InputGroup
              labelText="Review"
              inputName="title"
              isTextArea={true}
            />

            <Star starValue={3} selectedStarValue={4} size="1.3rem"/>
          </Form>
        </Container>
      </Main>
    </ThemeContextProvider>
  );
};

export default App;
