import { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import InputLayer from "./components/InputLayer";
import HiddenLayers from "./components/HiddenLayers";
import OutputLayer from "./components/OutputLayer";

function App() {
  const [pixels, setPixels] = useState([]);
  const [hidden1, setHidden1] = useState([]);
  const [output, setOutput] = useState([]);
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <Canvas setPixels={setPixels} result={result} />
      <div className="layers">
        <InputLayer pixels={pixels} setHidden1={setHidden1} />
        <HiddenLayers
          hidden1={hidden1}
          setOutput={setOutput}
          setResult={setResult}
        />
        <OutputLayer output={output} />
      </div>
    </div>
  );
}

export default App;
