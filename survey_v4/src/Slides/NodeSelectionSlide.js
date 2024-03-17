import React, { useRef, useEffect, useState } from "react";
import "./NodeSelectionSlide.css";
import * as d3 from "d3";

const DraggableBalls = ({ nodeNames, updateCurrentSelection, nextBlocked }) => {
  const svgRef = useRef();
  const nodeBoxRef = useRef();
  const startLocationRef = useRef([]);

  const [ballsData, setBallsData] = useState([]);
  const [recentlyClickedBalls, setRecentlyClickedBalls] = useState([]);
  const [selectedBallsPairs, setSelectedBallsPairs] = useState([]);

  // Call addBall when the component mounts
  useEffect(() => {
    addBall();
  }, []);

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
      );
    //.on("click", (e, d) => handleClick(e, d)); // Add click event listener to each circle

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

    // const lines = svg
    //   .selectAll("line")
    //   .data(selectedBallsPairs); // Assuming each entry in selectedBallsPairs is an array [x1, x2]

    // lines.exit().remove(); // Remove any existing lines that are not needed

    // svg
    //   .selectAll("line")
    //   .data(selectedBallsPairs)
    //   .enter()
    //   .append("line")
    //   .attr("stroke", "black")
    //   .attr("stroke-width", 10)
    //   .attr("x1", (d) => ballsData[d[0]].x) // Retrieve the x coordinate of the source ball
    //   .attr("y1", (d) => ballsData[d[0]].y) // Retrieve the y coordinate of the source ball
    //   .attr("x2", (d) => ballsData[d[1]].x) // Retrieve the x coordinate of the target ball
    //   .attr("y2", (d) => ballsData[d[1]].y); // Retrieve the y coordinate of the target ball

    // called from the drag function, used to make lines between nodes
    const handleClick = (e, d) => {
      let temp = recentlyClickedBalls;

      if (temp.length === 0) {
        temp.push(d.id); // adding to stack
      } else if (temp.length === 1 && d.id === temp[0]) {
        temp.shift(); // undoing a click
      } else if (temp.length === 1 && d.id !== temp[0]) {
        temp.push(d.id);

        // TO DO::: ADD LINE DRAW LOGIC
        const temp_reverse = [temp[1], temp[0]];

        if (selectedBallsPairs.includes(temp_reverse)) {
          selectedBallsPairs.remove(temp_reverse);
        } else if (selectedBallsPairs.includes(temp)) {
          selectedBallsPairs.remove(temp);
        } else {
          const updatedList = [...selectedBallsPairs];
          updatedList.push(temp);
          setSelectedBallsPairs(updatedList);
        }

        // clearning after drawing line
        temp.shift();
        temp.shift();
      } else {
        console.log("exception");
      }

      setRecentlyClickedBalls(temp);
      console.log(temp);
    };

    function dragStart(event, d) {
      // console.log("Drag Start Event");
      startLocationRef.current = [d.x, d.y];

      d3.select(this).raise().classed("active", true);
    }

    function dragging(event, d) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const minX = 20; // Minimum x-coordinate
      const minY = 20; // Minimum y-coordinate
      const maxX = svgRect.width; // - 20; // Maximum x-coordinate
      const maxY = svgRect.height; // - 20; // Maximum y-coordinate

      // Calculate the new position within the SVG boundaries
      const newX = Math.min(maxX - minX, Math.max(minX, event.x));
      const newY = Math.min(maxY - minY, Math.max(minY, event.y));

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

      // svg
      //   .selectAll("line")
      //   .filter((data) => d.id === data[0] || d.id === data[1] ) // Filter lines connected to the updated ball
      //   .each(function (data) {
      //     if (data[0] === d.id) {
      //       // Update x1, y1 for lines connected to updatedBall
      //       d3.select(this).attr("x1", newX).attr("y1", newY);
      //     } else {
      //       // Update x2, y2 for lines connected to updatedBall
      //       d3.select(this).attr("x2", newX).attr("y2", newY);
      //     }
      //   });
    }

    function dragEnd(event, d) {
      // console.log("Drag End Event");

      if (
        Math.sqrt(Math.pow(startLocationRef.current[0] - d.x, 2)) < 0.0001 &&
        Math.sqrt(Math.pow(startLocationRef.current[1] - d.y, 2)) < 0.0001
      ) {
        handleClick(event, d);
      }

      d3.select(this).classed("active", false);
    }
  }, [ballsData]);

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

  // Function to handle adding a new ball
  const addBall = () => {
    const nodeColors = generateColors(nodeNames.length);
    const nodeBoxRect = nodeBoxRef.current.getBoundingClientRect();
    const centerX = nodeBoxRect.width / 2 - 10;
    const centerY = nodeBoxRect.height / 2 - 10;

    const radius =
      nodeBoxRect.width > nodeBoxRect.height
        ? nodeBoxRect.height * 0.33
        : nodeBoxRect.width * 0.33;

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
        id: i,
        key: i,
        edges: [],
      });
    }

    setBallsData(newBallsData);
  };

  return (
    <div ref={nodeBoxRef} className="node-box">
      <svg ref={svgRef} className="svg"></svg>
    </div>
  );
};

export default DraggableBalls;
