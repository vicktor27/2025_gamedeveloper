import logo from "./logo.svg";
import HelloStudents from "./components/HelloStudents";
import Form from "./components/Form";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  let welcomeMessage = "Hello Students!!!!";

  return (
    <div className="App">
      <HelloStudents p1="Erasmo" p2="Elizabeth" />
      <Form name="Nombre" age="Edad" email="Correo Electronico"></Form>
      <Form name="Apellido" age="direccion" email="Telefono"></Form>
      <Counter />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
};
//form, que reciba como parametro nombre, edad, email;

export default App;
