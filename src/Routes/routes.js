import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from '../pages/Homepage';
import JoinusPage from '../pages/joinus';
import NewsSection from "../components/Main/NewsSection";

const Router = () => {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<NewsSection />} />
        <Route path="/joinus" element={<JoinusPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;