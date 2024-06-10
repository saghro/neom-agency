import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from '../pages/Homepage';
import JoinusPage from '../pages/joinus';
import NewsSection from "../components/Main/NewsSection";
import Service from "../pages/Service";
import Seo from "../pages/SEO";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsSection />} />
                <Route path="/joinus" element={<JoinusPage />} />
                <Route path="/Service" element={<Service />} />
                <Route path="/Seo" element={<Seo />} />
                <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
)

};

export default Router;