import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { closed, wizard } from "../assets";
import "../styles/fonts.css";
import * as Components from "../components";

export const PostShow = () => {
  const navigate = useNavigate();

  const curiousValues = [
    "1 - No curiosity at all",
    "2 - Barely curious",
    "3 - Mildly curious",
    "4 - Casually curious",
    "5 - Moderately curious",
    "6 - Genuinely curious",
    "7 -Very curious",
    "8 - Extremely curious",
    "9 - Obsessed with understanding",
  ];
  const curiousDescriptions = [
    "No interest; would not spend time to think about how the trick was done.",
    "Slightly intrigued but not motivated enough to learn more about it. Not too open to discussion.",
    "Somewhat interested but wouldn’t spend much time thinking about it. Potentially open to discuss.",
    "Thinks about it briefly and might discuss it if the topic comes up but doesn’t seek out information.",
    "Would like to understand the illusion better, might look it up or engage in light speculation.",
    "Actively wonders about the mechanics of the illusion, would enjoy learning how it was done.",
    "Regularly fascinated by such illusions, eagerly seeks explanations in spare time.",
    "Deeply invested in figuring out the trick, likely to research methods or related material.",
    "Feels a strong need to uncover the truth, possibly willing to spend hours investigating.",
  ];

  const [curiousAnswer, setCuriousAnswer] = useState("");

  const handleSubmit = () => {
    if (!(curiousAnswer === "")) {
      navigate("/guess");
    } else {
      alert("Please answer the question to proceed");
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${closed})`, backgroundColor: "#B14B3A" }}
      className="w-screen h-screen bg-contain bg-no-repeat bg-center flex flex-col items-center justify-end space-y-12 px-20 lg:px-32 xl:px-40 2xl:px-72 py-24"
    >
      <div className="bg-white border-2 border-black p-4 rounded-2xl h-2/5 w-2/5 ml-12 flex flex-col items-center text-center space-y-4">
        I hope you enjoyed the show! <br /> <br />
        On a scale from 1-9 how curious are you about how Houdini pulled off the
        illusion?
        <Components.DiscreteSlider
          stringValues={curiousValues}
          stringDescriptions={curiousDescriptions}
          setSelectedValue={setCuriousAnswer}
        />
        <Components.Button
          label="SUBMIT"
          primary="#AD9B96"
          shadow="#4F554F"
          small={true}
          onClick={handleSubmit}
        />
      </div>
      <img src={wizard} alt="Wizard Avatar" className="h-32" />
    </div>
  );
};
