import React, { useState } from 'react';
import './LikertSlide.css'; // Import CSS file for styling

const LikertScaleSlide = ({ question, updateSelection }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Initialize selected option with initialSelection when the component mounts
  

  const handleOptionSelect = (option) => {
    updateSelection(option);
    setSelectedOption(option);
  };

  return (
    <div className="likert-scale-slide">
      <h2 className="likert-scale-question">{question}</h2>
      <div className="likert-scale-options">
        <div
          className={`likert-option${selectedOption === 'Strongly Disagree' ? ' selected' : ''}`}
          onClick={() => handleOptionSelect('Strongly Disagree')}
        >
          Strongly Disagree
        </div>
        <div
          className={`likert-option${selectedOption === 'Disagree' ? ' selected' : ''}`}
          onClick={() => handleOptionSelect('Disagree')}
        >
          Disagree
        </div>
        <div
          className={`likert-option${selectedOption === 'Neutral' ? ' selected' : ''}`}
          onClick={() => handleOptionSelect('Neutral')}
        >
          Disagree
        </div>
        <div
          className={`likert-option${selectedOption === 'Agree' ? ' selected' : ''}`}
          onClick={() => handleOptionSelect('Agree')}
        >
          Disagree
        </div>
        <div
          className={`likert-option${selectedOption === 'Strongly Agree' ? ' selected' : ''}`}
          onClick={() => handleOptionSelect('Strongly Agree')}
        >
          Disagree
        </div>
        {/* Add similar divs for other options */}
      </div>
      <p className="selected-option">Selected option: {selectedOption}</p>
    </div>
  );
};

export default LikertScaleSlide;
