import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";

const Form = ({ result, calculateResult }) => {

    const [currency, setCurrency] = useState(currencies[1].shortcut)
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <h1 className="form__header">KALKULATOR WALUT</h1>
            <fieldset className="form__fieldset">
                <legend className="form__legend">PRZELICZ Z</legend>
                <p className="form__paragraph">
                    <label>
                        <img className="form__flag"
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/255px-Flag_of_Poland.svg.png"
                            alt="Polska flaga" />
                        {" "}PLN:
                        <input className="form__value"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            name="PLN"
                            placeholder="Ile mam złotych?"
                            type="number"
                            autoFocus
                            required />
                    </label>
                </p>
            </fieldset>
            <fieldset className="form__fieldset">
                <legend className="form__legend">PRZELICZ NA</legend>
                <p className="form__paragraph">
                    <label>
                        Wybierz walute:
                        <select
                            className="form__select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                            name="currencySelect"
                        >
                            {currencies.map(currency => (
                                <option
                                    key={currency.shortcut}
                                    value={currency.shortcut}
                                >
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
                <button className="form__button">Przelicz!</button>
            </fieldset>
            <Result result={result} />
        </form>
    )
};

export default Form;
