import React, { useState } from "react";
import HelloStudents from "./components/HelloStudents";
<<<<<<< HEAD
import Form from "./components/form";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

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
  

//const styles = {
 // container: {
    //maxWidth: "1280px",
    //textAlign: "center",
   // marginTop: "50px",
 // },
 // title: {
    //fontSize: "24px",
  //  marginBottom: "20px",
//  },
//};
=======
import Form from "./components/Form";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Main></Main>
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
>>>>>>> 109b629f16357c9ceaeafb05a962b2c4a9a99ea4

export default App;
