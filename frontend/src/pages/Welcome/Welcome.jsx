import "../Welcome/welcome.css";
import Parallax from "../../components/Parallax/Parallax";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Parallax />
      <div className="welcome-container">
        <div className="welcome-info">
          <h1 className="welcome-title">
            La sostenibilitat comença a prop teu
          </h1>
          <div className="button-container">
            <Link to="/SearchPage">
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
