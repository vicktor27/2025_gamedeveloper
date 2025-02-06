import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { CounterProvider } from "./components/CounterContext";
import "./App.css";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </CounterProvider>
  );
}

export default App;
