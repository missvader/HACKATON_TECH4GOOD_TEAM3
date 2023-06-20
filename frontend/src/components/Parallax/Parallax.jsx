import React, { useEffect } from "react";
import "./ParallaxComponent.css";

const Parallax = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const offsetX = 0.5 - e.pageX / w;
      const offsetY = 0.5 - e.pageY / h;

      const parallaxElements = document.getElementsByClassName("parallax");

      Array.from(parallaxElements).forEach((el) => {
        const offset = parseInt(el.getAttribute("data-offset"));

        const translate = `translate3d(${Math.round(
          offsetX * offset
        )}px, ${Math.round(offsetY * offset)}px, 0px)`;

        el.style.transform = translate;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="scene">
      <div className="parallax clouds" data-offset="90"></div>
      <div className="parallax trees" data-offset="30"></div>
      <div className="parallax grass" data-offset="20"></div>
      <div className="parallax buildings" data-offset="50"></div>
      <div className="ground"></div>
    </div>
  );
};

export default Parallax;
