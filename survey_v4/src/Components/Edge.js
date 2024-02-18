// Edge.jsx
import React from 'react';
import './Edge.css'; // Import CSS file for styling

const Edge = ({ startX, startY, endX, endY }) => {
  return (
    <svg className="edge">
      <line x1={startX} y1={startY} x2={endX} y2={endY} />
    </svg>
  );
};

export default Edge;
