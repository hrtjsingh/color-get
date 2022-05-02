import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";

import "./styles.css";

export default function App() {
  const ref = useRef();
  const [results, setResults] = useState(false);
  const [renderData, setRenderData] = useState(false);
  const search = async () => {
    let val = ref.current.value;
    const res = await axios.get(
      `https://api.color.pizza/v1/names/?name=${val}`
    );
    let allData = res.data.colors;
    let mainData = allData.map((color, i) => {
      return (
        <div key={i} style={{ background: `${color.hex}` }}>
          <h2>{color.name}</h2>
          <h2>{color.hex}</h2>
        </div>
      );
    });
    setRenderData(
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {mainData}
      </Masonry>
    );
    setResults(true);
  };
  useEffect(() => {}, [renderData]);
  return (
    <div className="App">
      <h1>Color a word!</h1>
      <input placeholder="Enter a word" ref={ref} />
      <button onClick={() => search()}>Search</button>
      {results && <div className="results">{renderData}</div>}
    </div>
  );
}
