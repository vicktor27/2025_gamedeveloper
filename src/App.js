import logo from "./logo.svg";
import HelloStudents from "./components/HelloStudents";
import Form from "./components/Form";

import Counter from "./components/Counter";
import Label from "./components/Label";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  let welcomeMessage = "Hello Students!!!!";

  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

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
//form, que reciba como parametro nombre, edad, email;

export default App;
