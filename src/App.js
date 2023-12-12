import logo from "./logo.svg";
import "./App.css";
import ListArticles from "./Components/ListArticles";

const fakeData = [
  { name: "Marguarita", price: 20 },
  { name: "4 fromages", price: 25 },
  { name: "Chorizo", price: 22 },
  { name: "Orientale", price: 23 },
  { name: "Saumon", price: 24 },
  { name: "Champignons", price: 21 },
  { name: "Reine", price: 26 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ListArticles articles={fakeData} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
