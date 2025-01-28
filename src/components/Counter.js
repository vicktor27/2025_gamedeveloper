import React, { useState } from "react";

const Counter = (props) => {
  return (
    <div style={styles.container}>
      <p style={styles.counter}>{props.count}</p>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={props.handleIncrement}>
          +
        </button>
        <button style={styles.button} onClick={props.handleDecrement}>
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
