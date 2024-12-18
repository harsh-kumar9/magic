import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { study, wizard, book } from "../assets";
import "../styles/fonts.css";
import * as Components from "../components";

export const Guess = () => {
  const navigate = useNavigate();

  const [userAnswer, setUserAnswer] = useState("");
  const [condition, setCondition] = useState("curiosity")
  const [buttonMessage, setButtonMessage] = useState("SUBMIT")

  const handleSubmit = () => {
    if (!(userAnswer === "") && !(buttonMessage === "CONTINUE")) {
      setWizardMessage("Loading...");
      setTimeout(() => {
        if (condition === "control") {
          setWizardMessage(control);
        } else if (condition === "curiosity") {
          setWizardMessage(curiosity);
        }
        setButtonMessage("CONTINUE")
      }, 5000);
    } else if (buttonMessage === "CONTINUE") {
        navigate("/design");
    }
    else {
      alert("Please answer the question to proceed");
    }
  };

  const instructions = (
    <>
      Now imagine you are in the audience watching.
      <br /> <br />
      Describe your feelings and initial thoughts, as well as how you think
      Houdini accomplished the trick.
      <br /> <br />
      Write them down in the book to the right.
    </>
  );

  const curiosity = (
    <>
      Good attempt! Your answer was not quite correct but very close!
    </>
  );

  const control = (
    <>
      Congratulations! You got it! This was precisely how Houdini pulled it off!
    </>
  );

  const [wizardMessage, setWizardMessage] = useState(instructions);

  return (
    <div
      style={{ backgroundImage: `url(${study})`, backgroundColor: "#3A2431" }}
      className="w-screen h-screen bg-contain bg-center flex items-center justify-center px-20 lg:px-20 xl:px-20 2xl:px-52 py-16 2xl:28"
    >
      <div className="flex flex-col h-full items-center justify-end py-12 pr-4">
        <div className="bg-white border-2 border-black p-4 rounded-2xl w-60 ml-12 flex flex-col items-center text-center space-y-4">
          {wizardMessage} <br /> 
          {!(wizardMessage === "Loading...") && <Components.Button
            label={buttonMessage}
            primary="#59E469"
            shadow="#2E9025"
            small={true}
            onClick={handleSubmit}
          />}
        </div>
        <img src={wizard} alt="Wizard Avatar" className="h-40" />
      </div>

      <div
        style={{ backgroundImage: `url(${book})` }}
        className="w-full h-full bg-contain bg-center bg-no-repeat flex pl-12 lg:pl-24 xl:pl-28 2xl:-32 py-24"
      >
        <textarea
          value={userAnswer} 
          onChange={(e) => setUserAnswer(e.target.value)} 
          className="w-1/2 h-full bg-transparent border-none outline-none resize-none pr-20" 
          placeholder="Write your response here..."
        />
      </div>
    </div>
  );
};
