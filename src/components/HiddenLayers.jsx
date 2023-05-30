import { useState } from "react";
import Node from "./Node";
import Sigmoid from "./Sigmoid";

const HiddenLayers = ({ hidden1, setOutput, setResult }) => {
  const [hidden2, setHidden2] = useState([]);
  const HiddenLayer2 = [];

  const hiddenWeights = [];
  for (let i = 0; i < 16; i++) {
    const row = [];
    for (let j = 0; j < 16; j++) {
      row.push(Math.random() * 2 - 1);
    }
    hiddenWeights.push(row);
  }

  const hiddenBias = [];
  for (let i = 0; i < 16; i++) {
    hiddenBias.push(Math.random() * 2 - 1);
  }

  const outputWeight = [];
  for (let i = 0; i < 16; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push(Math.random() * 2 - 1);
    }
    outputWeight.push(row);
  }

  const outputBias = [];
  for (let i = 0; i < 10; i++) {
    outputBias.push(Math.random() * 2 - 1);
  }

  const computeHidden = () => {
    for (let i = 0; i < 16; i++) {
      let sum = 0;
      for (let j = 0; j < 16; j++) {
        sum += hidden1[j] * hiddenWeights[j][i];
      }
      sum += hiddenBias[i];
      HiddenLayer2.push(Sigmoid(sum));
    }
    setHidden2(HiddenLayer2);

    const output = [];
    for (let i = 0; i < 10; i++) {
      let sum = 0;
      for (let j = 0; j < 16; j++) {
        sum += HiddenLayer2[j] * outputWeight[j][i];
      }
      sum += outputBias[i];
      output.push(Sigmoid(sum));
    }

    setOutput(output);
    setResult(output.indexOf(Math.max(...output)));
  };

  return (
    <div>
      <button onClick={computeHidden}>Run</button>
      <div className="flex">
        <div className="hidden-layer">
          {hidden1.map((node, index) => {
            return <Node key={index} node={node} />;
          })}
        </div>
        <div className="hidden-layer">
          {hidden2.map((node, index) => {
            return <Node key={index} node={node} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HiddenLayers;
