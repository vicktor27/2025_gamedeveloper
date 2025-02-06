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
