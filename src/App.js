import logo from "./logo.svg";
import HelloStudents from "./components/HelloStudents";
import Form from "./components/Form";
import "./App.css";
import Counter from "./components/Counter";
import React, { useState } from "react";
import Footer from "./components/footer";

function App() {
  let welcomeMessage = "Hello Students!!!!";
  const [count, setCount] = useState(0);

    // Función para incrementar el contador
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    // Función para decrementar el contador
    const handleDecrement = () => {
      setCount(count - 1);
    };

  return (
    <div className="App">
      <HelloStudents p1="Erasmo" p2="Elizabeth" />
      <Form name="Nombre" age="Edad" email="Correo Electronico"></Form>
      <Form name="Apellido" age="direccion" email="Telefono"></Form>
      <Counter 
        count = {count}
        handleIncrement = {handleIncrement}
        handleDecrement = {handleDecrement}
        />
        <label count = {count}>count: {count}</label>
        <Footer count = {count}></Footer>
        
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
