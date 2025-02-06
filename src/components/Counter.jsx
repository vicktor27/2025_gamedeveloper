import React, { useState } from "react";
import { useCounter } from "./CounterContext";
<<<<<<< HEAD
import "./Counter.css";

const Counter = () => {
  const { count, handleIncrement, handleDecrement } = useCounter();
  return (
    <div className="container">
      <p className="counter">{count}</p>
      <div className="buttons">
        <button className="button" onClick={handleIncrement}>
          +
        </button>
        <button className="button" onClick={handleDecrement}>
=======

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
>>>>>>> 704040e292f6a714d09e17ae03cc7daec27842df
          -
        </button>
      </div>
    </div>
  );
};

// Estilos en línea
<<<<<<< HEAD

export default Counter;
=======
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
>>>>>>> 704040e292f6a714d09e17ae03cc7daec27842df
