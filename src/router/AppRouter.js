import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";

const AppRouter = ({ isUser, changeUSer }) => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRouter isUser={isUser} />}>
        <Route path="" element={<Home />} />
      </Route>

      <Route path="/about" element={<PrivateRouter isUser={isUser} />}>
        <Route path="" element={<About />} />
      </Route>

      <Route path="/details" element={<PrivateRouter isUser={isUser} />}>
        <Route path="" element={<Details />} />
      </Route>
      <Route
        path="/login"
        element={<Login isUser={isUser} changeUser={changeUSer} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;

/*


*/
