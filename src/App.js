import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Entle, lets re-do this okaynp</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Weather city="Durban" />
      </header>
    </div>
  );
}

export default App;
