// src/App.js
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const generateCards = () => {
    const cardValues = Array.from({ length: 18 }, (_, i) => i + 1);
    const cards = [...cardValues, ...cardValues]; 
    return cards.sort(() => Math.random() - 0.5); 
  };

  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards, cards, matchedCards]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;
    setFlippedCards([...flippedCards, index]);
  };

  return (

    <div className="memory-game">
      {cards.map((value, index) => (
        <Card
          key={index}
          value={value}
          onClick={() => handleCardClick(index)}
          isFlipped={flippedCards.includes(index)}
          isMatched={matchedCards.includes(index)}
        />
      ))}
    </div>
  );
}

export default App;

