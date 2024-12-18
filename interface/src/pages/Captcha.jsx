import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { purple, roll } from "../assets";
import "../styles/fonts.css";
import { Button } from "../components/Button";

export const Captcha = () => {
  const navigate = useNavigate();

  const [captchaMessage, setCaptchaMessage] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    generateCaptchaCheck();
  }, []);

  const generateCaptchaCheck = () => {
    let captcha_text = "";
    const c_chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i < 5; i++) {
      captcha_text += c_chars.charAt(Math.random() * c_chars.length);
    }
    setCaptchaMessage(captcha_text);
  };

  const handleSubmit = () => {
    if (inputCaptcha === "") {
      alert("Please input something.");
    } else if (inputCaptcha !== captchaMessage) {
      alert("Check doesn't match. Please try again");
      setInputCaptcha("");
      generateCaptchaCheck();
    } else {
      navigate('/consent');  
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(captchaMessage, 10, 50);
        ctx.beginPath();
        ctx.moveTo(0, 40);
        ctx.lineTo(80, 40);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 40);
        ctx.lineTo(80, 30);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();
      }
    }
  }, [captchaMessage]);

  return (
    <div
      style={{ backgroundImage: `url(${purple})` }}
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
    >
      <img src={roll} alt="Rolled-up Parchment" className="h-24 animate-bounce" />
      <h1 className="text-white jaini-purva text-4xl">
        Input the code that appears below
      </h1>
      <canvas ref={canvasRef} height="75" width="100" />
      <input
        type="text"
        value={inputCaptcha}
        className="text-white font-medium mb-8 bg-transparent border-2 border-white rounded-xl p-2 focus:outline-2 focus:outline-white w-72"
        onChange={(e) => setInputCaptcha(e.target.value)}
      />
      <Button
        label="ENTER"
        primary="#E459E1" 
        shadow="#90258E"
        onClick={handleSubmit}
      />
    </div>
  );
};
