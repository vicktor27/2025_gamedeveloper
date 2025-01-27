import React, { useState } from "react";

const Counter = () => {
  let x = 5;
  // Estado para manejar el contador
  const [count, setCount] = useState(0); //useState  //sirve para establecer valores a la variable
  //directamente

  // Función para incrementar el contador
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Función para decrementar el contador
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <p style={styles.counter}>{count}</p>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={handleIncrement}>
          +
        </button>
        <button style={styles.button} onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  counter: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    fontSize: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
};

export default Counter;
