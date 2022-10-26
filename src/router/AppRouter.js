import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";

const AppRouter = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<PrivateRouter />}>
        <Route path="" element={<About />} />
      </Route>
      <Route path="/details" element={<PrivateRouter />}>
        <Route path="" element={<Details />} />
      </Route>
      <Route path="/login" element={<Login user={user} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
