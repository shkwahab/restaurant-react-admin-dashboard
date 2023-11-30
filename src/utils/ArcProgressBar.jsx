import React from 'react';

const ArcProgressBar = ({ percentage, circleColor, arcColor,fontSize,radius,strokeWidth }) => {

  const circumference = Math.PI * (radius * 2);

  const arcLength = (percentage / 100) * circumference;

  const remainingArcLength = circumference - arcLength;

  return (
    <div className=''>
      <svg className='my-8 ' width={radius * 2} height={radius * 2}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke={circleColor}
          strokeWidth={strokeWidth}
          filter="url(#shadow)"
        />
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="4" />
          </filter>
        </defs>
        <path
          d={`M ${radius},${strokeWidth / 2} A ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 ${percentage > 50 ? 1 : 0},1 ${radius + (radius - strokeWidth / 2) * Math.cos((percentage / 100) * 2 * Math.PI - Math.PI / 2)},${radius + (radius - strokeWidth / 2) * Math.sin((percentage / 100) * 2 * Math.PI - Math.PI / 2)}`}
          fill="none"
          stroke={arcColor}
          strokeWidth={strokeWidth}
          markerEnd=''
        />
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill={arcColor} />
          </marker>
        </defs>
        <text
          x={radius}
          y={radius}
          textAnchor="middle"
          fill={"black"}
          fontSize={fontSize}
          fontWeight="bold"
          dominantBaseline="middle"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default ArcProgressBar;
