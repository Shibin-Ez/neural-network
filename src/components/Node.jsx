const Node = ({ node }) => {
  const reducedNode = Number(node).toFixed(2);

  const rgbColor = reducedNode * 100;

  const nodeStyle = {
    backgroundColor: `hsl(0, 0%, ${rgbColor}%)`,
  };

  return <div className="node" style={nodeStyle}>{reducedNode}</div>;
};

export default Node;
