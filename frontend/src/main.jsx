import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router/Router";
import "./index.css";
import { ComerciosProvider } from "./context/ComerciosContext";

function App() {
  return <Router />;
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ComerciosProvider>
      <App />
    </ComerciosProvider>
  </React.StrictMode>
);
