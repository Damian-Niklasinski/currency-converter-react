import "./style.css";

export const Result = ({ result }) => (
    <p className="form__result">
        Kwota po przeliczeniu:
        {result !== undefined && (
            <strong className="form__strong">
                {result.targetAmount.toFixed(2)}{" "}{result.currency}
            </strong>
        )}
    </p>
);

