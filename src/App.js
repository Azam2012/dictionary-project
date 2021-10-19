import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project was coded by Azam and is open-soursed on {""}
            <a
              href="https://github.com/Azam2012/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>
            and{" "}
            <a href="https://sleepy-kalam-c0ff15.netlify.app/" rel="noreferrer">
              {" "}
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
