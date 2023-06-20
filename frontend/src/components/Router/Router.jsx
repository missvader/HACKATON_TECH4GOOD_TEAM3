import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/SearchPage";
import Welcome from "../../pages/Welcome/Welcome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
