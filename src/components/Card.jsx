// src/components/Card.js
import React from 'react';

function Card({ value, onClick, isFlipped, isMatched }) {
  return (
    <div className="card" onClick={onClick}>
      {isFlipped || isMatched ? value : "?"}
    </div>
  );
}

export default Card;
