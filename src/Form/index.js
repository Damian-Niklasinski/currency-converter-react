import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { FormMain, Header, Fieldset, Legend, Img, Input, Select, Button, Loading, Failure} from "./styled"
import { useRatesData } from "./useRatesData";

const Form = () => {

    const [result, setResult] = useState();
    const { rates, state, date } = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = rates[currency].value;

        setResult({
            targetAmount: amount * rate,
            currency,
            date: new Date(date).toLocaleDateString("pl-PL"),
        });
    };

    const [currency, setCurrency] = useState();
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };


    return (
        <FormMain onSubmit={onFormSubmit}>
            <Header>KALKULATOR WALUT</Header>
            {state === "loading"
                ? (
                    <Loading>
                        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjBrMDJrZ2toMjA2Z21obDVjeHg5azVpcjlndTNnYW85NTB5emwxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hPOy8lDXIMKRi9pqid/giphy.gif"/>
                        <br />
                        Zaczekaj chwilę, ładuje kursy walut!
                    </Loading>
                )
                : (
                    state === "error" ? (
                        <Failure>
                            Coś poszło nie tak... <br/> Spróbuj odświeżyć stronę!
                        </Failure>
                    ) : (
                        <>
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
                                        <Select onChange={({ target }) => setCurrency(target.value)}>
                                            {Object.keys(rates).map((currency) => (
                                                <option
                                                    key={currency}
                                                    value={currency}
                                                >
                                                    {currency}
                                                </option>
                                            ))}
                                        </Select>
                                    </label>
                                </p>
                                <Button>Przelicz!</Button>
                            </Fieldset>
                            <Result result={result} />
                        </>
                    )
                )
            }
        </FormMain>
    )
};

export default Form;
