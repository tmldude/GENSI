import React, { useState } from "react";
import './LikertSlide.css'; // Import CSS file for styling
import LikertScale from './LikertScale';

const LikertScaleSlide = ({ questions, updateSelection }) => {
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length));

  const handleOptionSelect = (index, option) => {
    const temp = [...selectedOptions]
    temp[index] = option
    console.log(temp)
    setSelectedOptions(temp)
    updateSelection(temp);
  };


  return (
    <div>
      {questions.map((question, index) => (
        <LikertScale question={question} index={index} updateSelection={handleOptionSelect}/>
      ))}
    </div>
  );
};

export default LikertScaleSlide;
