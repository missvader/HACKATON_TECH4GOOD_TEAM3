import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import Welcome from "../pages/Welcome/Welcome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
