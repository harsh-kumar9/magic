import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { purple, banner, scroll, feather } from "../assets";
import "../styles/fonts.css";
import * as Components from "../components";

export const Feedback = () => {

  const handleSubmit = () => {
    if (inputCaptcha === "") {
      alert("Please input something.");
    } else if (inputCaptcha !== captchaMessage) {
      alert("Check doesn't match. Please try again");
      setInputCaptcha("");
      generateCaptchaCheck();
    } else {
      //   navigate("/creativity/consent");
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
        FEEDBACK
      </div>

      <div
        style={{
          backgroundImage: `url(${scroll})`,
        }}
        className="bg-contain bg-no-repeat bg-center w-full h-full animate-growFromCenter py-[15vh] px-[8vw] lg:px-[10vw] xl:px-[13vw] 2xl:px-[19vw]"
      >
        <div className="w-full h-full overflow-y-auto text-purple opacity-0 animate-fadeIn">
          <p className="mb-2">
          Please answer the following questions. You must complete these and click submit below to complete the task and get paid.
          </p>
        </div>
      </div>
      <div className="absolute w-auto flex flex-col items-center space-y-5 bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-3/5 flex ">
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
