import logo from "./logo.svg";
import "./App.css";
import ListArticles from "./Components/ListArticles";
import TestComponent from "./Components/TestComponent";
import FormDelivery from "./Components/FormDelivery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const fakeData = [
  { name: "Marguarita", price: 20 },
  { name: "4 fromages", price: 25 },
  { name: "Chorizo", price: 22 },
  { name: "Orientale", price: 23 },
  { name: "Saumon", price: 24 },
  { name: "Champignons", price: 21 },
  { name: "Reine", price: 26 },
];

let point = 0;

const addPoint = () => {
  point = point + 1;
  console.log(point);
};
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ListArticles articles={fakeData} />
          <Routes>
            <Route path="/Delivery" element={<FormDelivery />} />
            <Route
              path="/List"
              element={<ListArticles articles={fakeData} />}
            />
            <Route
              path="/Test"
              element={<TestComponent functionDuProps={addPoint} />}
            />
          </Routes>

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
    </Router>
  );
}

export default App;
