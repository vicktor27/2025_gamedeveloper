import React, { useState } from "react";
import HelloStudents from "./components/HelloStudents";
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




export default App;