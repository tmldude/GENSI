// NextSlideButton.jsx

import React from 'react';
import './NextSlideButton.css'; // Import CSS file for styling

const NextSlideButton = ({ onClick }) => {
  return (
    <div className="next-slide-button-container">
      <button onClick={onClick} className="next-slide-button">
        Next Slide
      </button>
    </div>
  );
};

export default NextSlideButton;
