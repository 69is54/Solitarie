'use client'
import React from "react";
import { useMyContext } from "../provider/statesProvider";
import Card from "../component/card";

function AboutPage() {
  const {isCardVisible, showCard } = useMyContext();


  return (
    <div>
      <div className="container">
        <h2>Welcome to Our Website</h2>
        <p>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater,
        </p>
        <button onClick={showCard}>click me</button>
      </div>
      {isCardVisible && <Card />}
    </div>
  );
}

export default AboutPage;
