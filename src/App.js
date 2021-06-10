import Header from "./Header";
import MainFieldset from "./MainFieldset";
import SubFieldset from "./SubFieldset";
import Form from "./Form";

function App() {
  const welcome = () => {
    console.log("Hej! Tutaj możesz przeliczyć waluty.");
  }

  welcome();

  return (
    <Form>
      <Header
        title="KALKULATOR WALUT"
      />
      <MainFieldset
        title="PRZELICZ Z"
      />
      <SubFieldset
        title="PRZELICZ NA"
      />
    </Form>
  );
}

export default App;
