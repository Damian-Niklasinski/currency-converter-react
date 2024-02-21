import React, { useState } from "react";
import Form from "./Form";

function App() {
  return (
    <Form>
    <h1 className="form__header">KALKULATOR WALUT</h1>
    <fieldset className="form__fieldset">
      <legend className="form__legend">PRZELICZ Z</legend>
      <p className="form__paragraph">
        <label>
          <img className="form__flag"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/255px-Flag_of_Poland.svg.png"
            alt="Polska flaga" />
          PLN: <input className="form__value js-plnValue" name="PLN" placeholder="Ile mam złotych?" type="number"
            autofocus required />
        </label>
      </p>
    </fieldset>
    <fieldset className="form__fieldset">
      <legend className="form__legend">PRZELICZ NA</legend>
      <p>
        <label>
          <img className="form__flag"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png"
            alt="Europejska Flaga" /> EUR:<strong className="form__strong js-eurValue"> 0 €</strong>
        </label>
      </p>
      <p>
        <label>
          <img className="form__flag"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
            alt="Stany Zjednoczone" /> USD:<strong className="form__strong js-usdValue"> 0 $</strong>
        </label>
      </p>
      <p>
        <label>
          <img className="form__flag"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
            alt="Wielka Brytania" /> GBP:<strong className="form__strong js-gbpValue"> 0 £</strong>
        </label>
      </p>
      <button className="form__button">Przelicz!</button>
      <button className="form__button" type="reset">Wyczyść!</button>
    </fieldset>
  </Form>
  )
};

export default App;
