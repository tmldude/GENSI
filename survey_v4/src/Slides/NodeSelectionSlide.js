import React, { useState } from 'react';
import Node from '../Components/Node';
import Edge from '../Components/Edge';

const NodeConnectionSlide = ({ numNodes }) => {
  const [nodes, setNodes] = useState(Array.from({ length: numNodes }, (_, i) => ({ x: 100 * (i + 1), y: 100 })));
  const [edges, setEdges] = useState([]);

  const handleNodeDrag = (index, e) => {
    const newNodes = [...nodes];
    newNodes[index] = { x: e.clientX, y: e.clientY };
    setNodes(newNodes);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {nodes.map((node, index) => (
        <Node key={index} x={node.x} y={node.y} text={index + 1} onDrag={(e) => handleNodeDrag(index, e)} />
      ))}
      {edges.map((edge, index) => (
        <Edge key={index} startX={edge.startX} startY={edge.startY} endX={edge.endX} endY={edge.endY} />
      ))}
    </div>
  );
};

export default NodeConnectionSlide;
