import React from "react";
import Header from "./components/Header/Header";
import { ThemeContextProvider } from "./helpers/providers/ThemeProvider";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";
import Container from "./components/Container/Container";
import InputGroup from "./components/Input/InputGroup";
import StarFormGroup from "./components/StarFormGroup/StarFormGroup";
import { addNewReview } from "./helpers/utils/addNewReview";
import SortFilterContainer from "./components/SortFilterContainer/SortFilterContainer";
import ReviewProvider from "./helpers/providers/ReviewProvider";

const App: React.FunctionComponent = () => {
  return (
    <ThemeContextProvider>
      <Header />
      <Main>
        <ReviewProvider>
          <Container>
            <Form submitBtnText="Submit Review" submitCallback={addNewReview}>
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
                inputName="genre"
                isTextArea={false}
              />

              <StarFormGroup />
              <InputGroup
                labelText="Review"
                inputName="userReview"
                isTextArea={true}
              />
            </Form>
          </Container>
          <SortFilterContainer />
        </ReviewProvider>
      </Main>
    </ThemeContextProvider>
  );
};

export default App;
