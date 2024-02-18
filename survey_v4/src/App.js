import React, { useState } from "react";
import MultipleChoiceSlide from "./Slides/MultipleChoiceSlide";
import NextSlideButton from "./Components/NextSlideButton";
import LikertScaleSlide from "./Slides/LikertSlide";
import NodeConnectionSlide from "./Slides/NodeSelectionSlide"

const App = () => {
  const [selectionData, setSelectionData] = useState([]);
  const [currentSelection, setCurrentSelection] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const total_slides = 4;

  const slide0 = {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
  };
  const slide1 = {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
  };
  const slide2 = {
    question: "How do you feel about hummas?",
  };




  const saveSelectionData = () => {
    setSelectionData([...selectionData, currentSelection]);
  };

  const updateCurrentSelection = (option) => {
    setCurrentSelection(option);
  };

  const handleNextSlide = () => {
    setSlideIndex(slideIndex + 1);
    saveSelectionData();
    setCurrentSelection(null);
  };

  return (
    <div>
      {slideIndex < total_slides ? (
        <>
          {slideIndex === 0 && (
            <MultipleChoiceSlide
              {...slide0}
              updateSelection={updateCurrentSelection}
            />
          )}
          {slideIndex === 1 && (
            <MultipleChoiceSlide
              {...slide1}
              updateSelection={updateCurrentSelection}
            />
          )}
          {slideIndex === 2 && (
            <LikertScaleSlide
              question={slide2.question} // Ensure to pass the 'question' property of the 'slide2' object
              updateSelection={updateCurrentSelection}
            />
          )}
          {slideIndex === 3 && (
            <NodeConnectionSlide updateCurrentSelection={updateCurrentSelection} numNodes={5} />
          )}

          <NextSlideButton onClick={handleNextSlide} />
        </>
      ) : (
        <>
          <p>All slides have been completed.</p>
          <div>
            <h2>Selection Data:</h2>
            <ul>
              {selectionData.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

// {slideIndex < total_slides ? (
//   <>
//     {slideIndex === 0 && <MultipleChoiceSlide {...slide1} />}
//     <NextSlideButton onClick={handleNextSlide} />
//   </>
// ) : (<p>No more slides</p>) }
