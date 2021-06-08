import "./style.css";

const SubFieldset = ({ title }) => (
    <fieldset className="form__fieldset">
        <legend className="form__legend">{title}</legend>
        <p>
            <label>
                <img className="form__flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png"
                    alt="Europejska Flaga" /> EUR:<strong className="form__strong"> 0 €</strong>
            </label>
        </p>
        <p>
            <label>
                <img className="form__flag"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                    alt="Stany Zjednoczone" /> USD:<strong className="form__strong"> 0 $</strong>
            </label>
        </p>
        <p>
            <label>
                <img className="form__flag"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
                    alt="Wielka Brytania" /> GBP:<strong className="form__strong"> 0 £</strong>
            </label>
        </p>
        <button className="form__button">Przelicz!</button>
        <button className="form__button" type="reset">Wyczyść!</button>
    </fieldset>
);

export default SubFieldset;