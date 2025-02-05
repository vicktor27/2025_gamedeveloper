import React, { useState } from "react";

<<<<<<< HEAD:src/components/Counter.js
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

=======
const Counter = (props) => {
>>>>>>> 030617bad2b09949eb157ca0071d851a94b1d139:src/components/Counter.jsx
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