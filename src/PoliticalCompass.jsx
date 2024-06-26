import { useState } from "react";
import React from 'react';

function PoliticalCompass(props) {
  return (
  <div><svg width="200" height="200" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0, 0, L0, 6, L9, 3 z" fill="black"/>
    </marker>
  </defs>
  <rect x="0" y="-100" width="100" height="100" fill="#358ad4" />

  <rect x="-100" y="-100" width="100" height="100" fill="#ff6c63" />

  <rect x="-100" y="0" width="100" height="100" fill="#5fc76b" />

  <rect x="0" y="0" width="100" height="100" fill="#fff196" />

  <line x1="-100" y1="0" x2="100" y2="0" stroke="black" marker-end="url(#arrow)"/>

  <line x1="0" y1="-100" x2="0" y2="100" stroke="black" marker-end="url(#arrow)"/>

  <text x="100" y="10" text-anchor="end">Право</text>
  <text x="-100" y="10" text-anchor="start">Ліво</text>
  <text x="5" y="-85" text-anchor="middle">Лібералізм</text>
  <text x="5" y="95" text-anchor="middle">Авторитаризм</text>
  <circle cx={props.x} cy={props.y*-1} r="5" fill="black" />
</svg>

  <div>Пояснення</div>
  <div>Вісь ліво-право показує вподобання щодо економічної політики. Ліві за рівне розподілення майна та послуг (як от безкоштовна медицина), коли праві поважають недоторканність майна</div>
  <div>Вісь Авторитаризм-Лібералізм показує вподобання щодо політики суспільства. Авторитарні поважають політику "сильної руки", коли як ліберали вважають, що вільна політика є найліпшою, оскільки вона показує потреби суспільства</div>
  </div>
  );
}

export default PoliticalCompass;
