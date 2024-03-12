import React, { useRef, useEffect, useState } from "react";
import "./NodeSelectionSlide.css";
import * as d3 from "d3";

const DraggableBalls = ({ nodeNames, updateCurrentSelection, nextBlocked }) => {
  const svgRef = useRef();
  const nodeBoxRef = useRef();

  const [ballsData, setBallsData] = useState([]);
  const [recentlyClickedBalls, setRecentlyClickedBalls] = useState([]);
  

  function generateColors(numColors) {
    const hexCharacters = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    const colors = [];

    for (let i = 0; i < numColors; i++) {
      let hexColorRep = "#";

      for (let index = 0; index < 6; index++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColorRep += hexCharacters[randomPosition];
      }
      colors.push(hexColorRep);
    }
    console.log(colors);
    return colors;
  }

  const handleClick = (ball) => {
    console.log([ball, ...recentlyClickedBalls.slice(0, 1)])

    // Add the clicked ball to the beginning of the recently clicked balls array
    setRecentlyClickedBalls([ball, ...recentlyClickedBalls.slice(0, 2)]);
  };

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
      .style("z-index", -1) // Set the z-index to place the circles behind text
      .call(
        d3.drag().on("start", dragStart).on("drag", dragging).on("end", dragEnd)
      )
      .on("click", (event, d) => handleClick(d)); // Add click event listener to each circle


    // Append text inside circles
    // Append text inside circles
    svg
      .selectAll("text")
      .data(ballsData)
      .enter()
      .append("text")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y + 28) // Adjust the y-position to place text just below the circle
      .style("text-anchor", "middle") // Center text horizontally
      .style("dominant-baseline", "middle") // Center text vertically
      .style("pointer-events", "none") // Make text unclickable
      .style("user-select", "none") // Disable text selection
      .style("-webkit-user-select", "none") // For Safari
      .style("-moz-user-select", "none") // For Firefox
      .style("-ms-user-select", "none") // For IE/Edge
      .style("-webkit-tap-highlight-color", "transparent") // Disable tap highlight on mobile
      .style("z-index", 1) // Set the z-index to place the text in front of circles
      .text((d) => {
        // Convert friendName to first letter uppercase, rest lowercase
        return (
          d.friendName.charAt(0).toUpperCase() +
          d.friendName.slice(1).toLowerCase()
        );
      });

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

      // Update the position of the dragged node
      d3.select(this)
        .attr("cx", (d.x = newX))
        .attr("cy", (d.y = newY));

      // Update the text position with the node
      svg
      .selectAll("text")
      .filter((data) => data === d) // Filter to get the text corresponding to the dragged circle
      .attr("x", newX)
      .attr("y", newY + 28); // Adjust the y-position to place text just below the circle
    
    }

    function dragEnd(event, d) {
      d3.select(this).classed("active", false);
    }
  }, [ballsData]);

  // Function to handle adding a new ball
  const addBall = () => {
    const nodeColors = generateColors(nodeNames.length);
    const nodeBoxRect = nodeBoxRef.current.getBoundingClientRect();
    const centerX = nodeBoxRect.width / 2;
    const centerY = nodeBoxRect.height / 2;

    const radius =
      nodeBoxRect.width > nodeBoxRect.height
        ? nodeBoxRect.width * 0.33
        : nodeBoxRect.height * 0.33;

    const newBallsData = [];
    for (let i = 0; i < nodeNames.length; i++) {
      const angle = (Math.PI * 2 * i) / nodeNames.length; // Calculate the angle for each item

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      newBallsData.push({
        x: parseInt(x),
        y: parseInt(y),
        color: nodeColors[i],
        friendName: nodeNames[i],
      });
    }

    setBallsData(newBallsData);
  };

  // Call addBall when the component mounts
  useEffect(() => {
    addBall();
  }, []);

  return (
    <div ref={nodeBoxRef} className="node-box">
      <svg ref={svgRef} className="svg"></svg>
    </div>
  );
};

export default DraggableBalls;
