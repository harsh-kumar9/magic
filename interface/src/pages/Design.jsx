import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { library, wizard, card, stone, sign } from "../assets";
import "../styles/fonts.css";
import * as Components from "../components";

export const Design = () => {
  const navigate = useNavigate();

  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = () => {
    if (!(userAnswer === "")) {
      navigate("/feedback");
    } else {
      alert("Please answer the question to proceed");
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${library})` }}
      className="w-screen h-screen bg-contain bg-center flex flex-row items-center justify-between space-y-12 px-20 lg:px-32 xl:px-40 2xl:px-72 py-24"
    >
      <div className="w-1/5 h-full flex flex-col items-center justify-end space-y-4">
        <div className="bg-white border-2 border-black p-4 rounded-2xl flex flex-col items-center text-center space-y-6">
          <span>
            Imagine that you were Houdini and you were going to do a better
            trick than your Elephant trick. <br /> <br /> What might you do?
          </span>
          <Components.Button
            label="SUBMIT"
            primary="#59E469"
            shadow="#2E9025"
            small={true}
            onClick={handleSubmit}
          />
        </div>
        <img src={wizard} alt="Wizard Avatar" className="h-40" />
      </div>

      <div
        style={{ backgroundImage: `url(${card})` }}
        className="w-3/5 h-full bg-contain bg-center bg-no-repeat flex px-12 lg:px-24 xl:px-28 2xl:px-32 py-[72px]  "
      >
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full h-full bg-transparent border-none outline-none resize-none"
          placeholder="Write your response here..."
        />
      </div>

      <div className="w-2/5 h-full flex flex-col items-center">
        <img
          src={sign}
          alt="Wooden Sign stating that the user is free to use the AI aid below"
          className="h-52 w-80 -mt-36"
        />
        <div
          style={{ backgroundImage: `url(${stone})` }}
          className="w-full h-full bg-contain bg-center bg-no-repeat flex px-12 lg:px-10 xl:px-16 2xl:px-20 py-20 lg:py-20 xl:py-[110px] 1.5xl:py-[150px] 2xl:py-32"
        >
          <div className="overflow-y-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
