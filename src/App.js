import './App.css';
import Header from "./components/Header/Header";
import ResultsList from "./components/ResultsList/ResultsList";
import { useState } from "react";

function App() {
  let [results, setResults] = useState([]);

  function onUpdate(data) {
    setResults(data);
  }

  return (
    <div className="App">
      <Header onUpdate={onUpdate}/>
      <ResultsList results={ results }/>
    </div>
  );
}

export default App;
