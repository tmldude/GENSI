import React, { useState } from "react";

import MultipleChoiceSlide from "./Slides/MultipleChoiceSlide";
import LikertScaleSlide from "./Slides/LikertSlide";
import NodeInputSlide from "./Slides/NodeInputSlide";
import NodeConnectionSlide from "./Slides/NodeSelectionSlide";

import NextSlideButton from "./Components/NextSlideButton";
import Banner from "./Components/Banner";
import BannerImg from "./Images/cornell_seal_simple_web_b31b1b.svg";

const App = () => {
  const [selectionData, setSelectionData] = useState([]);
  const [currentSelection, setCurrentSelection] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [nextBlocked, setNextBlocked] = useState(false);

  const total_slides = 5;

  const saveSelectionData = () => {
    setSelectionData([...selectionData, currentSelection]);
    console.log([...selectionData, currentSelection])

  };

  const updateCurrentSelection = (option) => {
    setCurrentSelection(option);
    // console.log(option)
  };

  const handleNextSlide = () => {
    console.log(currentSelection)
    setSlideIndex(slideIndex + 1);
    saveSelectionData();
    setCurrentSelection(null);
  };

  const updateNextBlocked = (bool) => {
    setNextBlocked(bool)
  }

  return (
    <div>
      <Banner logo={BannerImg} text={"Cornell University"} />

      {slideIndex < total_slides ? (
        <>
          {slideIndex === 0 && (
            <MultipleChoiceSlide
             question = "What is the capital of France?"
             options = {["Paris", "Berlin", "Madrid", "Rome"]}
             updateSelection={updateCurrentSelection}
            />
          )}
          {slideIndex === 1 && (
            <MultipleChoiceSlide
            question = "What is the capital of Japan?"
            options = {["Tokyo", "Seoul", "Beijing", "Bangkok"]}
              updateSelection={updateCurrentSelection}
            />
          )}
          {slideIndex === 2 && (
            <LikertScaleSlide
              questions={["Hummus is good", "Bagels are good", "Tall", "Short"]} // Ensure to pass the 'question' property of the 'slide2' object
              updateSelection={updateCurrentSelection}
            />
          )}
          {slideIndex === 3 && (
            <NodeInputSlide
              promptText = "Who are your closest friends?"
              inlineText = "Write name"
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}

            />
          )}
          {slideIndex === 4 && (
            <NodeConnectionSlide
              nodeNames = {selectionData[3]}
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}

              
            />
          )}

          <NextSlideButton nextBlocked={nextBlocked} onClick={handleNextSlide} />
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


// const slide0 = {
//   question: "What is the capital of France?",
//   options: ["Paris", "Berlin", "Madrid", "Rome"],
// };
// const slide1 = {
//   question: "What is the capital of Japan?",
//   options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
// };
// const slide2 = {
//   questions: ["Hummus is good", "Bagels are good", "Tall", "Short"],
// };
// const slide3 = {
//   promptText: "Who are your closest friends?",
//   inlineText: "Write Name",
// };
// const slide4 = {
//   questions: ["Hummus is good", "Bagels are good", "Tall", "Short"],
// };
// //const data = [10, 20, 30, 40, 50];

