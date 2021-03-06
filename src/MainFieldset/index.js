import { useState } from 'react';
import "./style.css";

const MainFieldset = ({ title }) => {
    const [newValue, setNewValue] = useState("");
    
    return (
        <fieldset className="form__fieldset">
            <legend className="form__legend">{title}</legend>
            <p className="form__paragraph">
                <label>
                    <img className="form__flag"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/255px-Flag_of_Poland.svg.png"
                        alt="Polska flaga" />
                      PLN: <input
                        className="form__value"
                        name="PLN"
                        placeholder="Ile mam złotych?"
                        type="number"
                        autoFocus
                        required
                        value={newValue}
                        onChange={({ target }) => setNewValue(target.value)}
                    />
                </label>
            </p>
        </fieldset>
    );
};

export default MainFieldset;