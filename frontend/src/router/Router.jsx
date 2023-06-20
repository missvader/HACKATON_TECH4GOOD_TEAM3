import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Header from "../components/Header";
//import Footer from "../components/Footer";
import SearchPage from "../pages/SearchPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" />
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
