import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Parallax from "../../components/Parallax/Parallax";
import Typed from "typed.js";
import "./welcome.css";

const Welcome = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "La sostenibilitat comença a prop teu",
        "Sustainability starts close to you",
        "La sostenibilidad comienza cerca de ti",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Parallax />
      <div className="welcome-container">
        <div className="welcome-info">
          <h1 className="welcome-title">
            <span ref={typedRef} />
          </h1>
          <div className="button-container">
            <Link to="/search">
              <button className="btn btn-lg btn-primary welcome-button shadow-xl">
                cerca
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
