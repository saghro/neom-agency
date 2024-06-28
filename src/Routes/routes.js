import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import Webdev from '../pages/Webdev';
import Print from '../pages/Print';
import Formations from '../pages/Formations';
import Service from '../pages/Service';
import Seo from '../pages/SEO';
import Solutions from '../components/Solutions/Solutions';
import useScrollToTop from './useScrollToTop';
import LoginForm from '../components/Login/Login';
import Realisation from '../pages/Realisation';
import ContactPage from '../pages/Contact';
 
const ScrollToTopWrapper = ({ children }) => {
    useScrollToTop();
    return children;
};
 
const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTopWrapper>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/web" element={<Webdev />} />
                    <Route path="/realisation" element={<Realisation />} />
                    <Route path="/communication" element={<Print />} />
                    <Route path="/formation" element={<Formations />} />
                    <Route path="/identité-de-marque" element={<Service />} />
                    <Route path="/markting" element={<Seo />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </ScrollToTopWrapper>
        </BrowserRouter>
    );
};
 
export default Router;
 