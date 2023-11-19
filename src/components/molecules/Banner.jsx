import React, { useState, useRef, useEffect } from "react";
import Titulo from "../atoms/Titulo";

export default function Banner() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 500);
  }, []);

  return (
    <div className="w-full bg-[#FFD25C] flex items-center flex-col gap-y-4 h-screen justify-center pb-[13%]" id="inicio">
      <h1 className="w-1/2 text-[2rem] font-black text-center slide-in-blurred-top">
        Nosotros te facilitaremos todo para que todo sea facil
      </h1>
      {isButtonVisible && (
        <button className="bg-[#FFB900] text-white rounded-xl text-2xl p-1 px-4 slide-in-blurred-top">
          Comenzar
        </button>
      )}
    </div>
  );
}
