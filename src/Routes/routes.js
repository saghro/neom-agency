import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from '../pages/Homepage';
import JoinusPage from '../pages/joinus';

const Router = () => {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/joinus" element={<JoinusPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;