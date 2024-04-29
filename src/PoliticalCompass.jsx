import { useState } from "react";
import React from 'react';

function PoliticalCompass(props) {
  return (
  <svg width="200" height="200" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
  {/* Blue quadrant (top right) */}
  <rect x="0" y="-100" width="100" height="100" fill="#358ad4" />
  {/* Red quadrant (top left) */}
  <rect x="-100" y="-100" width="100" height="100" fill="#ff6c63" />
  {/* Green quadrant (bottom left) */}
  <rect x="-100" y="0" width="100" height="100" fill="#5fc76b" />
  {/* Yellow quadrant (bottom right) */}
  <rect x="0" y="0" width="100" height="100" fill="#fff196" />
  {/* Horizontal line */}
  <line x1="-100" y1="0" x2="100" y2="0" stroke="black" />
  {/* Vertical line */}
  <line x1="0" y1="-100" x2="0" y2="100" stroke="black" />
  <circle cx={props.x} cy={props.y} r="5" fill="black" />
  </svg>

  );
}

export default PoliticalCompass;
