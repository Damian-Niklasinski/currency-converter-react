import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { FormMain, Header, Fieldset, Legend, Img, Input, Select, Button  } from "./styled"

const Form = ({ result, calculateResult }) => {

    const [currency, setCurrency] = useState(currencies[1].shortcut)
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };


    return (
        <FormMain onSubmit={onFormSubmit}>
            <Header>KALKULATOR WALUT</Header>
            <Clock />
            <Fieldset>
                <Legend>PRZELICZ Z</Legend>
                <p>
                    <label>
                        <Img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/255px-Flag_of_Poland.svg.png"
                            alt="Polska flaga" />
                        {" "}PLN:
                        <Input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            name="PLN"
                            placeholder="Ile mam złotych?"
                            type="number"
                            autoFocus
                            required />
                    </label>
                </p>
            </Fieldset>
            <Fieldset>
                <Legend>PRZELICZ NA</Legend>
                <p>
                    <label>
                        Wybierz walute:
                        <Select
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
                        </Select>
                    </label>
                </p>
                <Button>Przelicz!</Button>
            </Fieldset>
            <Result result={result} />
        </FormMain>
    )
};

export default Form;
