"use client";
import React, { useState } from "react";
import { useMyContext } from "../provider/statesProvider";
import { Storage } from "aws-amplify";

Storage.configure({ region: "us-east-1" });

const Card: React.FC = () => {
  const { isCardVisible, setTextContext, closeCard } = useMyContext();
  const [text, setText] = useState("");

  const checkInput = async (text: string) => {
    if (text) {
      try {
        console.log("clicked");
        // await Storage.put("Solitarie", text); //TODO: fix storage error Error: Network Error
        setTextContext(text);
        closeCard();
      } catch (error) {
        console.log("storage error", error);
        closeCard();
      }
    } else {
      alert("Nah, you gotta say something now");
    }
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
