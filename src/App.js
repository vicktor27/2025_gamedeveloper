<<<<<<< HEAD
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { CounterProvider } from "./components/CounterContext";
=======
import React, { useState } from "react";
import HelloStudents from "./components/HelloStudents";
import Form from "./components/form";
import Counter from "./components/Counter";
import { CounterProvider } from "./components/CounterContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
>>>>>>> 704040e292f6a714d09e17ae03cc7daec27842df
import "./App.css";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
<<<<<<< HEAD
    </CounterProvider>
=======
      </CounterProvider>
    
>>>>>>> 704040e292f6a714d09e17ae03cc7daec27842df
  );
};

<<<<<<< HEAD
=======
// Estilos (puedes eliminar este objeto si no lo usas)
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

>>>>>>> 704040e292f6a714d09e17ae03cc7daec27842df
export default App;
