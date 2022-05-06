import React, { useState, useRef } from "react";
import Cards from "./Component/cards";
import './App.css';
export default function App() {
  const ref = useRef();
  const [results, setResults] = useState(false);
  const [renderData, setRenderData] = useState(false);
  const search = async () => {
    let val = ref.current.value;
    if (val !== "") {
      setRenderData(<Cards input={val} />)
    } else {
      setRenderData("No Data Found")
    }
    setResults(true);
  };
  return (
    <div className="App">
      <h1>Color a word!</h1>
      <input placeholder="Enter a word" ref={ref} />
      <button onClick={() => search()}>Search</button>
      {results && <div className="results">{renderData}</div>}
    </div>
  );
}
