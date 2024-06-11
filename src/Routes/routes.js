import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import JoinusPage from "../pages/joinus";
import Webdev from "../pages/Webdev";
import Print from '../pages/Print';
import Formations from '../pages/Formations';
import Service from "../pages/Service";
import Seo from "../pages/SEO"; 

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/joinus" element={<JoinusPage />} />
                <Route path="/web" element={<Webdev />} />
                <Route path="/print" element={<Print />} />
                <Route path="/formation" element={<Formations />} />
                <Route path="/Social_Media" element={<Service />} />
                <Route path="/Seo" element={<Seo />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;