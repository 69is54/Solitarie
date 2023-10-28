"use client";
import React, { useState } from "react";
import { useMyContext } from "../provider/statesProvider";

const Card: React.FC = () => {
  const { isCardVisible, textContext, setTextContext } = useMyContext();
  const [text, setText] = useState("");

  const checkInput = (text: string) => {
    console.log(text);
    text ? setTextContext(text) : alert("Nah, you gotta say something now");
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <div className={`card ${isCardVisible ? "cardVisible" : ""}`}>
      <h1>Endless sentence game</h1>
      <textarea
        id="story"
        name="story"
        rows={5}
        cols={33}
        placeholder="Write something: I want a ugly navbar"
        className="text-center ..."
        onChange={handleTextAreaChange}
      ></textarea>
      <button type="submit" onClick={() => checkInput(text)}>
        Submit
      </button>
    </div>
  );
};

export default Card;
