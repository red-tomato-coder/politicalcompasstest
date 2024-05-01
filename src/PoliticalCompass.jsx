import { useState } from "react";
import React from 'react';

function PoliticalCompass(props) {
  return (
  <div><svg width="200" height="200" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
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
  <text x="-120" y="0">Ліво</text>
  <text x="120" y="0">Право</text>
  <text x="0" y="120">Авторитаризм</text>
  <text x="0" y="-120">Лібералізм</text>
  <circle cx={props.x} cy={props.y*-1} r="5" fill="black" />
  </svg>
  <div>Пояснення</div>
  <div>Вісь ліво-право показує вподобання щодо економічної політики. Ліві за рівне розподілення майна та послуг (як от безкоштовна медицина), коли праві поважають недоторканність майна</div>
  <div>Вісь Авторитаризм-Лібералізм показує вподобання щодо політики суспільства. Авторитарні поважають політику "сильної руки", коли як ліберали вважають, що вільна політика є найліпшою, оскільки вона показує потреби суспільства</div>
  </div>
  );
}

export default PoliticalCompass;
