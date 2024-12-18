import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { open, wizard } from "../assets";
import "../styles/fonts.css";
import * as Components from "../components";

export const Show = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${open})`, backgroundColor: "#B14B3A" }}
      className="w-screen h-screen bg-contain bg-no-repeat bg-center flex flex-col items-start justify-end px-20 lg:px-32 xl:px-40 2xl:px-72 py-24"
    >
      {isVisible && (
        <div className="bg-white border-2 border-black p-4 rounded-t-2xl rounded-br-2xl ml-8 flex flex-col items-center space-y-4">
          <span>Finished reading?</span>
          <Components.Button
            label="YES"
            primary="#59E469"
            shadow="#2E9025"
            small={true}
            onClick={() => {
              navigate("/postshow");
            }}
          />
        </div>
      )}
      <img src={wizard} alt="Feather" className="h-32" />
      <div className="text-black absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:px-8 xl:px-10 2xl:px-32 py-6 overflow-y-auto max-h-[calc(100vh-100px)] md:max-h-[calc(100vh-200px)] lg:max-h-[calc(100vh-500px)]">
        The stage was set for a spectacle unlike any other. The year was 1918,
        and Harry Houdini, the legendary escape artist and magician, stood
        poised in front of a packed audience at the New York Hippodrome.
        <br /> <br />
        At the center of the stage stood "Jennie," a live, full-grown elephant
        weighing over five tons. The sheer presence of the massive creature
        added an air of disbelief to the proceedings. Houdini’s assistants
        rolled in a massive, ornately decorated cabinet, adorned with golden
        accents and painted patterns, its intricate design enhancing the allure
        of the illusion. Open on all sides for the audience to inspect, the
        cabinet appeared unremarkable—solid but unassuming.
        <br /> <br /> He closed the cabinet doors with a deliberate flourish,
        sealing the elephant from view. Stepping forward, Houdini raised his
        hands dramatically, as if summoning an unseen force. His voice rang out,
        commanding the attention of every eye in the house. “Ladies and
        gentlemen,” he proclaimed, “prepare to witness the impossible!”
        <br /> <br />
        At the center of the stage stood "Jennie," a live, full-grown elephant
        weighing over five tons. The sheer presence of the massive creature
        added an air of disbelief to the proceedings. Houdini’s assistants
        rolled in a massive, ornately decorated cabinet, adorned with golden
        accents and painted patterns, its intricate design enhancing the allure
        of the illusion. Open on all sides for the audience to inspect, the
        cabinet appeared unremarkable—solid but unassuming.
        <br /> <br /> He closed the cabinet doors with a deliberate flourish,
        sealing the elephant from view. Stepping forward, Houdini raised his
        hands dramatically, as if summoning an unseen force. His voice rang out,
        commanding the attention of every eye in the house. “Ladies and
        gentlemen,” he proclaimed, “prepare to witness the impossible!”
        <br /> <br />
        At the center of the stage stood "Jennie," a live, full-grown elephant
        weighing over five tons. The sheer presence of the massive creature
        added an air of disbelief to the proceedings. Houdini’s assistants
        rolled in a massive, ornately decorated cabinet, adorned with golden
        accents and painted patterns, its intricate design enhancing the allure
        of the illusion. Open on all sides for the audience to inspect, the
        cabinet appeared unremarkable—solid but unassuming.
        <br /> <br /> He closed the cabinet doors with a deliberate flourish,
        sealing the elephant from view. Stepping forward, Houdini raised his
        hands dramatically, as if summoning an unseen force. His voice rang out,
        commanding the attention of every eye in the house. “Ladies and
        gentlemen,” he proclaimed, “prepare to witness the impossible!”
      </div>
    </div>
  );
};
