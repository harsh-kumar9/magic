import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { closed, wizard } from "../assets";
import "../styles/fonts.css";
import * as Components from "../components";

export const PreShow = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${closed})`, backgroundColor: "#B14B3A" }}
      className="w-screen h-screen bg-contain bg-no-repeat bg-center flex flex-col items-start justify-end px-20 lg:px-32 xl:px-40 2xl:px-72 py-24"
    >
      <div className="bg-white border-2 border-black p-4 rounded-t-2xl rounded-br-2xl w-80 ml-12 flex flex-col items-center space-y-4">
        Prepare to be amazed as an Artificial Intelligence guide takes you
        through one of the most iconic magic tricks in history: <br /> <br />{" "}
        Houdini’s Vanishing Elephant! Sit back, relax, and enjoy the story of
        this legendary illusion.
        <Components.Button
          label="CONTINUE"
          primary="#59E469"
          shadow="#2E9025"
          small={true}
          onClick={() => {
            navigate("/show");
          }}
        />
      </div>
      <img src={wizard} alt="Feather" className="h-32" />
    </div>
  );
};
