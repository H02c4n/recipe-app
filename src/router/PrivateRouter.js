import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ isUser }) => {
  return <div>{isUser ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
