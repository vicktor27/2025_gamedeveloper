import React, { useState } from "react";
import HelloStudents from "./components/HelloStudents";
import Form from "./components/Form";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Footer></Footer>
      </div>
    </>
  );
}

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

export default App;
