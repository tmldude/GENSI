import React, { useState } from "react";
import "./NodeInputSlide.css";

const NodeInputSlide = ({promptText, promptText2, maxNom, inlineText, updateCurrentSelection, nextBlocked}) => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const temp = [...items, inputValue.trim()]
      setItems(temp);
      setInputValue("");
      updateCurrentSelection(temp); // Check if this line is correct
    }
  };

  return (
    <div className="node-input-slide">
      <h1 className="input-header">{promptText}</h1>
      <h2 className="input-header">{promptText2}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={inlineText}
        />
        <button type="submit">Add</button>
      </form>
      <h3 className="max-nom">{maxNom}</h3>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} id={index}>{index + 1}. {item}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default NodeInputSlide;
