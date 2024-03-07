import React, { useRef, useEffect } from 'react';
import './NodeSelectionSlide.css'
import * as d3 from 'd3';

const DraggableBalls = (data) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const ballsData = [
      { x: 50, y: 50, color: 'red' },
      { x: 150, y: 50, color: 'blue' },
      { x: 250, y: 50, color: 'green' },
    ];

    // Create circles for each ball
    svg.selectAll('circle')
      .data(ballsData)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 20)
      .attr('fill', d => d.color)
      .call(d3.drag()
        .on('start', dragStart)
        .on('drag', dragging)
        .on('end', dragEnd)
      );
      

    function dragStart(event, d) {
      d3.select(this).raise().classed('active', true);
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
        .attr('cx', d.x = newX)
        .attr('cy', d.y = newY);
    }
    

    function dragEnd(event, d) {
      d3.select(this).classed('active', false);
    }

  }, []);

  return (
    <div className="node-box">    
      <svg ref={svgRef} className='svg'></svg>
    </div>
  );
};

export default DraggableBalls;
