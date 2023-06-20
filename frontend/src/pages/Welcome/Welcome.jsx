import "../Welcome/welcome.css";
import Parallax from "../../components/Parallax/Parallax";

const Welcome = () => {
  return (
    <>
      <Parallax />
      <div className="welcome-info">
        <h1 className="welcome-title">La sostenibilitat comença a prop teu</h1>
        <div className="button-container">
          <button className="btn btn-primary welcome-button shadow-xl">
            cerca
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
