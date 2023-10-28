"use client";
import React, { useState } from "react";
import { useMyContext } from "../provider/statesProvider";
import { Storage } from "aws-amplify";

const Card: React.FC = () => {
  const { isCardVisible, textContext, setTextContext } = useMyContext();
  const [text, setText] = useState("");

  const checkInput = async (text: string) => {
    if (text) {
      try {
        await Storage.put("Solitarie", text);
        console.log("file uploaded");
        setTextContext(text);
      } catch (error) {
        console.log("Error", error);
      }
    }
    alert("Nah, you gotta say something now");
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
        placeholder="Write something: I want an ugly navbar"
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
