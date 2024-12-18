import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { purple, banner, scroll, cheat, feather } from "../assets";
import "../styles/fonts.css";
import * as Components from "../components";

export const Introduction = () => {
  const navigate = useNavigate();

  const magicValues = [
    "1 - Never touched magic in their life at all",
    "2 - Slightly aware of magic as a concept",
    "3 - Minimal exposure to magic",
    "4 - Casual observer",
    "5 - Moderately familiar",
    "6 - Enthusiastic viewer",
    "7 - Amateur magician or serious fan",
    "8 - Passionate magic enthusiast",
    "9 - Huge magic enthusiast",
  ];
  const magicDescriptions = [
    "No knowledge or experience with magic tricks; never watched a magic show.",
    "May have heard of magic tricks but has no personal experience or interest.",
    "Seen a magic trick or show once or twice but doesn’t remember much about it.",
    "Occasionally watches magic shows but has little understanding of how tricks are performed.",
    "Watched a few magic shows and has some idea of how certain tricks are done.",
    "Enjoys watching magic shows, actively thinks about magic techniques, but has little hands-on experience.",
    "Frequently watches,discusses,performs magic shows with some knowledge of common techniques.",
    "Regularly watches magic, actively practices tricks, enjoys learning the history and methods of magic.",
    "Deeply involved in magic, possibly performs tricks as a serious hobby; highly knowledgeable about the field.",
  ];
  const creativeValues = [
    "1 - Not at all creative",
    "2 - Slightly creative",
    "3 - Occasionally creative",
    "4 - Somewhat creative",
    "5 - Moderately creative",
    "6 - Often creative",
    "7 - Highly creative",
    "8 - Extremely creative",
    "9 - Exceptionally creative",
  ];
  const creativeDescriptions = [
    "Not creative; you rarely engage in activities that involve creativity.",
    "Friends see some creativity, but it is not a prominent trait.",
    "You occasionally show creative ideas, but it’s not consistent.",
    "Friends recognize some creative tendencies but not strongly.",
    "You often approach problems with a creative mindset and stand out moderately in creative contexts.",
    "Friends describe you as someone who regularly comes up with new ideas.",
    "You are highly creative, consistently producing original ideas and seen as innovative.",
    "Friends call you extremely creative, regularly noticing your passion for creativity.",
    "Exceptionally creative, known as a creative genius capable of creating innovative solutions.",
  ];

  const [magicAnswer, setMagicAnswer] = useState("");
  const [creativeAnswer, setCreativeAnswer] = useState("");

  const [checked, setChecked] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleCheckTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  const handleSubmit = () => {
    if (checked && checkedTwo && !(magicAnswer === "") && !(creativeAnswer === "")) {
        // add data
        navigate('/preshow')
    } 
    else if (checked && checkedTwo && (magicAnswer === "") && !(creativeAnswer === "")) {
        alert("Please select a value for Question 1");
    }
    else if (checked && checkedTwo && !(magicAnswer === "") && (creativeAnswer === "")) {
        alert("Please select a value for Question 2");
    }
    else if (!checked && !checkedTwo && magicAnswer === "" && creativeAnswer === "") {
        alert("Please answer all questions and agree with the terms to proceed")
    }
    else {
        alert("Please agree with the terms to proceed")
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${purple})` }}
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center px-14 py-12"
    >
      <div
        style={{
          backgroundImage: `url(${banner})`,
          width: "400px",
          height: "110px",
        }}
        alt="Banner"
        className="bg-cover absolute top-0 left-1/2 -translate-x-1/2 text-white jaini-purva text-3xl pt-5 flex items-start justify-center"
      >
        INTRODUCTION
      </div>

      <div
        style={{
          backgroundImage: `url(${scroll})`,
        }}
        className="bg-contain bg-no-repeat bg-center w-full h-full animate-growFromCenter py-[15vh] px-[8vw] lg:px-[10vw] xl:px-[13vw] 2xl:px-[19vw]"
      >
        <div className="w-full h-full flex flex-col items-center overflow-y-auto text-purple opacity-0 animate-fadeIn">
          <p className="mb-2">
            This task will start with a Large Language Model describing a magic
            trick to you. Afterwards, you’ll share your thoughts and feelings
            about watching the illusion and how you think it was performed,
            before finally being challenged to create a magic trick of your own.
          </p>
          <p className="mb-3">
            There is no time limit for the task so we encourage you to take your
            time as you explore the interface.
          </p>

          <p className="text-lg mb-3 font-semibold">
            Please answer the following questions:
          </p>
          <label className="mb-2">
            1. Adjust the slider: The extent to which I know how to perform
            magic tricks or watched magic shows is
          </label>
          <Components.DiscreteSlider
            stringValues={magicValues}
            stringDescriptions={magicDescriptions}
            setSelectedValue={setMagicAnswer}
          />
          <label className="mt-3 mb-2">
            2. Adjust the slider: The extent to which my friends would describe
            me as having a creative personality is
          </label>
          <Components.DiscreteSlider
            stringValues={creativeValues}
            stringDescriptions={creativeDescriptions}
            setSelectedValue={setCreativeAnswer}
          />

          <p className="mt-3 mb-2 font-semibold text-red-600">
            Important: Please do not take screenshots, copy any text, or consult
            external tools (e.g., ChatGPT).
          </p>
          <p className="mb-2">
            We're just interested in your best effort and what you learn. The
            experiment will be ruined if you take screenshots or use external
            tools to do this task. So please do not do so! In fact, you have no
            reason to do so because you are not paid based on performance.
          </p>
          <p className="mb-2 font-semibold text-red-600">
            Please do not refresh the page. Refreshing the page will lose any
            progress you have made and you may not receive any compensation.
          </p>

          <div>
            <img
              src={cheat}
              alt="No screenshots or external tools allowed"
              style={{
                maxWidth: "30%",
                height: "auto",
                display: "block",
                margin: "0px auto",
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute w-3/5 flex flex-col items-center bottom-4 left-1/2 -translate-x-1/2">
        <label className="text-sm text-white">
          <input type="checkbox" checked={checked} onChange={handleCheck} />
          {`  `}I promise not to take screenshots, pictures, or use external tools in this study. I understand that I will not be paid more if I do so*
        </label>
        <label className="text-sm text-white">
          <input type="checkbox" checked={checkedTwo} onChange={handleCheckTwo} />
          {`  `}I understand the instructions above and am ready to continue*
        </label>
        <div className="flex items-center mt-4">
          <Components.Button
            label="SUBMIT"
            primary="#E459E1"
            shadow="#90258E"
            onClick={handleSubmit}
          />
          <img src={feather} alt="Feather" className="h-12 ml-4" />
        </div>
      </div>
    </div>
  );
};