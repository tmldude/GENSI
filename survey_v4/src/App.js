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

  const total_slides = 10;

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
      {/* <NodeConnectionSlide
              nodeNames = {['0', '1', '2', '3', '4', '5']}
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}

              
            /> */}
      {slideIndex < total_slides ? (
        <>
          {slideIndex === 0 && (
            <NodeInputSlide
              promptText = "Some of your peers may be a safe person for you to turn to, during challenging, threatening, or uncertain times."
              promptText2 = "Think about any individuals who are a safe person for you to turn to when you are having a bad day or had a negative experience. Please nominate each person who comes to mind. Type in the first name of each person."
              maxNom = "(max 10 nominations)"
              inlineText = "Write name"
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}

            />
          )}
          {slideIndex === 1 && (
            <NodeInputSlide
              promptText = "Some of your peers may be someone you want to stay in close proximity to, perhaps living near them or sticking by them at a social event or in class."              
              promptText2 = "Think about any individuals you like staying within close proximity to. Please nominate each person who comes to mind. Type in the first name of each person."
              maxNom = "(max 10 nominations)"
              inlineText = "Write name"
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}

            />
          )}
          {slideIndex === 2 && (
            <NodeInputSlide
              promptText = "Some of your peers may be someone who provides you with a sense of security, which then allows you to explore and more open to new experiences."
              promptText2 = "Think about any individuals who provide you with this sense of security. Please nominate each person who comes to mind. Type in the first name of each person."
              maxNom = "(max 10 nominations)"
              inlineText = "Write name"
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}

            />
          )}
          {slideIndex === 3 && (
            <NodeInputSlide
              promptText = "Some of your peers may be someone whom when they are not with you or when you are separated from them, you feel anxious or distressed."
              promptText2 = "Think about any individuals whom you feel anxious or distressed when separate from them. Please nominate each person who comes to mind. Type in the first name of each person."
              maxNom = "(max 10 nominations)"
              inlineText = "Write name"
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}

            />
          )}
          {slideIndex === 4 && (
            <NodeInputSlide
              promptText = "If something good happened to you that you wanted to share with someone or just wanted to spend time with someone, who would you reach out to?"
              promptText2 = "Please nominate each person who comes to mind. Type in the first name of each person."
              maxNom = "(max 10 nominations)"
              inlineText = "Write name"
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}

            />
          )}
          {slideIndex === 5 && (
            <NodeConnectionSlide
              nodeNames = {selectionData[0]}
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}  
            />
          )}
          {slideIndex === 6 && (
            <NodeConnectionSlide
              nodeNames = {selectionData[1]}
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}  
            />
          )}
          {slideIndex === 7 && (
            <NodeConnectionSlide
              nodeNames = {selectionData[2]}
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}  
            />
          )}
          {slideIndex === 8 && (
            <NodeConnectionSlide
              nodeNames = {selectionData[3]}
              updateCurrentSelection={updateCurrentSelection}
              nextBlocked = {nextBlocked}  
            />
          )}
          {slideIndex === 9 && (
            <NodeConnectionSlide
              nodeNames = {selectionData[4]}
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


// {slideIndex === 0 && (
//   <MultipleChoiceSlide
//    question = "What is the capital of France?"
//    options = {["Paris", "Berlin", "Madrid", "Rome"]}
//    updateSelection={updateCurrentSelection}
//   />
// )}
// {slideIndex === 1 && (
//   <MultipleChoiceSlide
//   question = "What is the capital of Japan?"
//   options = {["Tokyo", "Seoul", "Beijing", "Bangkok"]}
//     updateSelection={updateCurrentSelection}
//   />
// )}
// {slideIndex === 2 && (
//   <LikertScaleSlide
//     questions={["Hummus is good", "Bagels are good", "Tall", "Short"]} // Ensure to pass the 'question' property of the 'slide2' object
//     updateSelection={updateCurrentSelection}
//   />
// )}
// {slideIndex === 3 && (
//   <NodeInputSlide
//     promptText = "Some of your peers may be a safe person for you to turn to, during challenging, threatening, or uncertain times."
//     promptText2 = "Think about any individuals who are a safe person for you to turn to when you are having a bad day or had a negative experience. Please nominate each person who comes to mind. Type in the first name of each person."
//     maxNom = "(max 10 nominations)"
//     inlineText = "Write name"
//     updateCurrentSelection={updateCurrentSelection}
//     nextBlocked = {nextBlocked}

//   />
// )}

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

