import React, { useState } from "react";

<<<<<<< HEAD
const Counter = (props) => {
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
=======
const Counter = () => {
  const [count, setCount] = useState(0);
>>>>>>> b9fab1add2063c2c6f1bd271cc603623f031705d
  const handleIncrement = () => {
    setCount(count + 1);
  };
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
