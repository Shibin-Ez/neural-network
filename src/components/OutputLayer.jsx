import Node from "./Node";

const OutputLayer = ({output}) => {
  return (
    <div className="output-layer">
      {/* <button onClick={computeInput}>Run</button> */}
      {output.map((pixel, index) => {
        return <Node key={index} node={pixel} />;
      })}
    </div>
  );
};

export default OutputLayer;
