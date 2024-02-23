import React, { useState } from "react";
import Form from "./Form";
import { currencies } from "./currencies";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const exchangeRate = currencies
      .find(({ shortcut }) => shortcut === currency)
      .exchangeRate

    setResult({
      targetAmount: amount / exchangeRate,
      currency,
    });
  };

  return (
    <Form
      calculateResult={calculateResult}
      result={result}
    />
  )
};

export default App;
