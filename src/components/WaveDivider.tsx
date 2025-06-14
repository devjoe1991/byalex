
import React from 'react';

interface WaveDividerProps {
  color: string;
  direction?: 'up' | 'down';
}

const WaveDivider: React.FC<WaveDividerProps> = ({ color, direction = 'down' }) => {
  const pathData = "M0,192 C220,320 440,320 660,192 L660,320 L0,320 Z";
  
  return (
    <div className={`relative w-full h-24 md:h-40 ${direction === 'up' ? 'transform rotate-180' : ''}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 660 320"
        preserveAspectRatio="none"
      >
        <path d={pathData} style={{ fill: color, stroke: 'none' }}></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
