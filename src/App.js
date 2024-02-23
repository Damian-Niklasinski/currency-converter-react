import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Legend from "./Legend";
import Fieldset from "./Fieldset";
import Buttons from "./Buttons";
import SecondParagraph from "./SecondParagraph";
import ResultParagraph from "./ResultParagraph";

function App() {

  return (
    <Form>
      <Header title="Kalkulator Walut" />
      <Fieldset
        body={<Paragraph />}
        legendTitle={<Legend title="PRZELICZ Z" />}
      />

      <Fieldset
        body={<SecondParagraph />}
        legendTitle={<Legend title="PRZELICZ NA" />}
        buttons={<Buttons />}
      />
      <ResultParagraph />

    </Form>
  )
};

export default App;
