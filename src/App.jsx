import Home from "./views/Home";
import Login from "./views/Login";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
  );
};
