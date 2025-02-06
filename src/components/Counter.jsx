import React, { useState } from "react";
import { useCounter } from "./CounterContext";

const Counter = () => {
 const {count, handleIncrement, handleDecrement} = useCounter();
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