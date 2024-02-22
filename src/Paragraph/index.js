import "./style.css";

const Paragraph = () => (
    <p className="form__paragraph">
        <label>
            <img
                className="form__flag"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/255px-Flag_of_Poland.svg.png"
                alt="Polska flaga"
            />
            PLN:
            <input className="form__value"
                name="PLN"
                placeholder="Ile mam złotych?"
                type="number"
                autofocus
                required
            />
        </label>
    </p>
);

export default Paragraph;