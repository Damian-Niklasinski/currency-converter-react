import "./style.css";

const Form = ({ children }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
      };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            {children}
        </form>
    )
};

export default Form;
