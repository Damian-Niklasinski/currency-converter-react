import "./style.css";

const Form = ({ children, newCurrency }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        newCurrency();
    };
   
    return (
            <form className="form"
            onSubmit={onFormSubmit}
            >
                {children}
            </form>
    );
};

export default Form;