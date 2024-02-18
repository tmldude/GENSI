// Node.jsx
import React from 'react';
import Draggable from 'react-draggable';
import './Node.css'; // Import CSS file for styling

const Node = ({ x, y, text, onDrag }) => {
  return (
    <Draggable
      defaultPosition={{ x, y }}
      grid={[2, 2]} // Adjust grid size for easier snapping
      bounds="parent" // Restrict movement within the parent container
      onStop={(e, data) => onDrag(data.x, data.y)}
    >
      <div className="node">
        <div className="circle"></div>
        <div className="text">{text}</div>
      </div>
    </Draggable>
  );
};

export default Node;
