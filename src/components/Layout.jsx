import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => (
  <div className="wrapper">
    <Outlet />
  </div>
);

export default Layout;
