import React from "react";
import HelloStudents from "./components/HelloStudents";
import Form from "./components/Form";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  let welcomeMessage = "Hello Students!!!!";

  return (
    <div className="App">
      <HelloStudents p1="Erasmo" p2="Elizabeth" />
      <Form name="Nombre" age="Edad" email="Correo Electrónico"></Form>
      <Form name="Apellido" age="Dirección" email="Teléfono"></Form>
      <Counter />
      <Footer count={count}></Footer>
    </div>
  );
}

// Estilos (puedes eliminar este objeto si no lo usas)
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

export default App;
