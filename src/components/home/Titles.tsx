import React, { useState, useEffect } from "react";

const Titles = (): React.ReactElement => {
  const titles: string[] = [
    "Entrená la mente a través del cuerpo",
    "Prioridades claras, decisiones fáciles",
    "Primero estandarizar y luego optimizar",
    "VIVÍ EL PRESENTE, ES TODO LO QUE TENES",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOut(true); // Activa la animación de salida
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) =>
          prevIndex === titles.length - 1 ? 0 : prevIndex + 1
        );
        setAnimateOut(false); // Desactiva la animación de salida
      }, 800); // Espera 800ms antes de cambiar el texto y desactivar la animación de salida
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className={`text-[18px] lg:text-[23px] text-texts-color font-semibold mb-5 lg:mb-0 ${
        animateOut ? "animate-out" : "animate-in"
      }`}
    >
      "{titles[currentTitleIndex]}"
    </h2>
  );
};

export default Titles;
