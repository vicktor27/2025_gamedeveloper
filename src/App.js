import React, { useState } from "react";
import HelloStudents from "./components/HelloStudents";
<<<<<<< HEAD
import Form from "./components/Form";

import Counter from "./components/Counter";
import Label from "./components/Label";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
=======
import Form from "./components/form";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
>>>>>>> 030617bad2b09949eb157ca0071d851a94b1d139

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
  

<<<<<<< HEAD
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
=======
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
>>>>>>> 030617bad2b09949eb157ca0071d851a94b1d139

export default App;
