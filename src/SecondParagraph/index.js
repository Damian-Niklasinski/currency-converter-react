import "./style.css";

const SecondParagraph = () => (
    <div>
        <p class="form__paragraph">
                    <label>
                        Wybierz walute:
                        <select class="form__select js-currency" name="currencySelect">
                            <option value="EUR" selected>Euro</option>
                            <option value="USD">Dolar Amerykański</option>
                            <option value="GBP">Funt Brytyjski</option>
                        </select>
                    </label>
                </p>
    </div>
);

export default SecondParagraph;