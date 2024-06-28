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
                 
                </Routes>
            </ScrollToTopWrapper>
        </BrowserRouter>
    );
};
 
export default Router;
 