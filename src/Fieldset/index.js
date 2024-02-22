import "./style.css";

const Fieldset = ({body, legendTitle, buttons}) => (
    <fieldset className="form__fieldset">
      {legendTitle}
      {body}
      {buttons}
    </fieldset>
);

export default Fieldset;