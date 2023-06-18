import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
        <Weather />
      </header>
      <footer>
        {" "}
        <a
          class="git-link"
          href="https://github.com/AsraeAb/Vanila.Weather.git"
        >
          Open-source code
        </a>{" "}
        <span class="span"> By Asrae</span>{" "}
      </footer>
    </div>
  );
}

export default App;
