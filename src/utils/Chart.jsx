// Chart.js
import React, { useState, useEffect } from 'react';

const Chart = ({ data, primaryColor, secondaryColor, fontSize, fontWeight, fontFamily, width, height }) => {
  const [chartData, setChartData] = useState(data);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  const getMaxX = () => Math.max(...chartData.map((point) => point.x));
  const getMaxY = () => Math.max(...chartData.map((point) => point.y));

  const scaleX = (value) => (value / getMaxX()) * 300; // Adjust according to your needs
  const scaleY = (value) => 200 - (value / getMaxY()) * 150; // Adjust according to your needs

  const xAxisLabels = chartData.map((point, index) => (
    <text
      key={`x-label-${index}`}
      x={scaleX(point.x) + 20}
      y={300}
      fill="gray"
      fontSize="14"
      fontFamily="Poppins, sans-serif"
      fontWeight="bold"
      textAnchor="middle"
    >
      {point.x}
    </text>
  ));

  const yAxisLabels = chartData
    .map((_, index) => {
      const range = getMaxY();
      const step = parseInt(range / 5);
      const labels = [];
      for (let i = 0; i <= range; i += step) {
        labels.push(i);
      }
      console.log(labels);
      let labelText = labels[index] ;
      if (index === labels.length - 1) {
        labelText +=" V";
      }
      return (
        <text
          key={`y-label-${index}`}
          x={40}
          y={scaleY(labels[index]) + 30}
          fill="gray"
          fontSize="14"
          fontFamily="Poppins, sans-serif"
          fontWeight="bold"
          textAnchor="end"
          dominantBaseline="middle"
        >
          {labelText}
        </text>
      );
    });



  return (
    <div>
      <svg width="600" height="500" onMouseOut={() => setHoveredIndex(null)}>
        
        {xAxisLabels}
        {yAxisLabels}
        {chartData.map((point, index) => (
          <g key={`group-${index}`}>
            <rect
              width="9"
              height="122.22"
              rx="4.5"
              transform={`matrix(-1 0 0 1 ${scaleX(point.x) + 20} ${scaleY(point.y) + 10})`}
              fill="#faa0ba"
            />
            <rect
              width="9"
              height="122.22"
              rx="4.5"
              transform={`matrix(-1 0 0 1 ${scaleX(point.x) + 20} ${scaleY(point.y)})`}
              fill="#EA7A9A"
            />
          </g>
        ))}

        {chartData.map((point, index) => (
          <g key={`group-${index}`}>
            <text
              x={scaleX(point.x) + 30}
              y={scaleY(point.y) + 10}
              fill="gray"
              fontSize="16"
              fontFamily="Poppins, sans-serif"
              fontWeight="bold"
              dominantBaseline="middle"
              visibility={hoveredIndex === index ? 'visible' : 'hidden'}
            >
              {point.y}
            </text>

            <circle
              key={`circle-${index}`}
              cx={scaleX(point.x) + 15}
              cy={scaleY(point.y)}
              r="8"
              fill="transparent"
              onMouseOver={() => setHoveredIndex(index)}
              onMouseOut={() => setHoveredIndex(null)}
            />
            <circle
              key={`circle-${index}`}
              cx={scaleX(point.x) + 15}
              cy={scaleY(point.y)}
              r="8"
              fill="#EA7A9A"
              visibility={hoveredIndex === index ? 'visible' : 'hidden'}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Chart;
