import React, { useRef, useEffect, useState } from "react";
import "./NodeSelectionSlide.css";
import * as d3 from "d3";

const DraggableBalls = ({nodeNames, ballColors, updateCurrentSelection, nextBlocked}) => {
  const svgRef = useRef();
  const nodeBoxRef = useRef();

  const [ballsData, setBallsData] = useState([]);
  // const [ballName, setBallName] = useState("");
  // const [ballY, setBallY] = useState("");
  // const [ballColor, setBallColor] = useState("");
  const [clickedBalls, setClickedBalls] = useState([]);


  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Create circles for each ball
    svg
      .selectAll("circle")
      .data(ballsData)
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 20)
      .attr("fill", (d) => d.color)
      .call(
        d3.drag().on("start", dragStart).on("drag", dragging).on("end", dragEnd)
      );

    function dragStart(event, d) {
      d3.select(this).raise().classed("active", true);
    }

    function dragging(event, d) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const minX = 20; // Minimum x-coordinate
      const minY = 20; // Minimum y-coordinate
      const maxX = svgRect.width - 20; // Maximum x-coordinate
      const maxY = svgRect.height - 20; // Maximum y-coordinate

      // Calculate the new position within the SVG boundaries
      const newX = Math.min(maxX, Math.max(minX, event.x));
      const newY = Math.min(maxY, Math.max(minY, event.y));

      console.log(newX, newY)
      // Update the position of the dragged node
      d3.select(this)
        .attr("cx", (d.x = newX))
        .attr("cy", (d.y = newY));
        
    }

    function dragEnd(event, d) {
      d3.select(this).classed("active", false);
    }
  }, [ballsData]);

  // Function to handle adding a new ball
  const addBall = () => {
    const nodeBoxRect = nodeBoxRef.current.getBoundingClientRect();
    const centerX = nodeBoxRect.width / 2 //- 20
    const centerY = nodeBoxRect.height / 2 //- 20;

    const radius = nodeBoxRect.width > nodeBoxRect.height ? nodeBoxRect.width * .4 : nodeBoxRect.height * .4 

    for (let i = 0; i < nodeNames.length; i++) {
      const angle = (Math.PI * 2 * i) / nodeNames.length; // Calculate the angle for each item

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      setBallsData((prevBallsData) => [
        ...prevBallsData,
        { x: parseInt(x), y: parseInt(y), color: 'red', friendName: nodeNames[i] },
      ]);
    }

    // if (ballX !== "" && ballY !== "" && ballColor !== "") {
    //   setBallsData((prevBallsData) => [
    //     ...prevBallsData,
    //     { x: parseInt(ballX), y: parseInt(ballY), color: ballColor },
    //   ]);

    //   // setBallColor("");
    // }
  };

  return (
      <div ref={nodeBoxRef} className="node-box">
        <svg ref={svgRef} className="svg"></svg>
      </div>
  );
  
};

export default DraggableBalls;
