import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from '../pages/Homepage';
import JoinusPage from '../pages/joinus';
import NewsSection from "../components/Main/NewsSection";
import Webdev from "../pages/Webdev";
import Print from '../pages/Print';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsSection />} />
                <Route path="/joinus" element={<JoinusPage />} />
                <Route path="/web" element={<Webdev />} />
                <Route path="/print" element={<Print />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;