<<<<<<< HEAD
import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider
      value={{ count, handleIncrement, handleDecrement }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(CounterContext);
};

//Componente de Clases
//Componente Funcional
=======
import {createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider =  ({Children}) => {
   
        const [count, setCount] = useState(0);
        
          // Función para incrementar el contador
          const handleIncrement = () => {
            setCount(count + 1);
          };
        
          // Función para decrementar el contador
          const handleDecrement = () => {
            setCount(count - 1);
          };
          return (<CounterContext.Provider value={{count, handleIncrement, handleDecrement}}> {Children}
          </CounterContext.Provider>)
    }; 

    
export const useCounter = () => {
    return useContext (CounterContext);
};
>>>>>>> 704040e292f6a714d09e17ae03cc7daec27842df
