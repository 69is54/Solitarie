'use client'
import React from "react";
import { useMyContext } from "../provider/statesProvider";



const Card: React.FC= () => {
  const { isCardVisible, hideCard } = useMyContext();


  return (
    <div className={`card ${isCardVisible ? 'visible' : ''}`}>
      <h2>title</h2>
      <h1>heading</h1>
      <p>paragraph</p>
      <button onClick={hideCard}>Close</button>
    </div>
  );
}

export default Card;
