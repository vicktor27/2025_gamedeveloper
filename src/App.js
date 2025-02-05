import React, { useState } from "react";
import HelloStudents from "./components/HelloStudents";
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

export default App;
