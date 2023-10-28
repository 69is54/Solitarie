"use client";
import React from "react";
import { useMyContext } from "../provider/statesProvider";
import Card from "../component/card";

export default function AboutPage() {
  const { isCardVisible, showCard, textContext, setTextContext  } = useMyContext();
  const text = "You call the shots. What's the website's mission? ";

  return (
    <div className="about">
      <div className="container">
        <h2>{text}</h2>
        <p>{textContext}</p>
        <button onClick={showCard}>click me</button>
      </div>
      {isCardVisible && <Card />}
    </div>
  );
}
