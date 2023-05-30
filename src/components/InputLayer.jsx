import Node from "./Node";
import Sigmoid from "./Sigmoid";

const InputLayer = ({ pixels, setHidden1 }) => {
  const inputWeights = [];
  for (let i = 0; i < pixels.length; i++) {
    const row = [];
    for (let j = 0; j < 16; j++) {
      row.push(Math.random() * 2 - 1);
    }
    inputWeights.push(row);
  }

  const inputBias = [];
  for (let i = 0; i < 16; i++) {
    inputBias.push(Math.random() * 2 - 1);
  }

  const computeInput = () => {
    const hidden1 = [];
    for (let i = 0; i < 16; i++) {
      let sum = 0;
      for (let j = 0; j < pixels.length; j++) {
        sum += pixels[j] * inputWeights[j][i];
      }
      sum += inputBias[i];
      hidden1.push(Sigmoid(sum));
    }
    setHidden1(hidden1);
  };

  return (
    <div className="input-layer">
      <button onClick={computeInput}>Run</button>
      {pixels.map((pixel, index) => {
        return <Node key={index} node={pixel} />;
      })}
    </div>
  );
};

export default InputLayer;
