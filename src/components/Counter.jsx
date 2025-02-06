import React, { useState } from "react";
import { useCounter } from "./CounterContext";
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
          -
        </button>
      </div>
    </div>
  );
};

// Estilos en línea

export default Counter;
