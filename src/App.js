import React, { useState } from "react"; // Importar React y useState
import logo from "./logo.svg";
import HelloStudents from "./components/HelloStudents";
import Form from "./components/Form";
import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/footer";

function App() {
  let welcomeMessage = "Hello Students!!!!";

  // Definir el estado
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header> </header>
      <Main>
      <section></section>
      <section></section>
      <section></section>
      </Main>
      
      <h1>{welcomeMessage}</h1>
      <HelloStudents p1="Erasmo" p2="Elizabeth" />
      <Form name="Nombre" age="Edad" email="Correo Electrónico" />
      <Form name="Apellido" age="Dirección" email="Teléfono" />
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <label>Count: {count}</label> {/* Mostrar el valor de count */}

      <Footer count = {count}></Footer>
    </div>


  );
}

export default App;

