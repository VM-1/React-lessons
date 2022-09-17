import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<About />} path="/about" />
      <Route element={<Posts />} path="/posts" />
      <Route path="*" element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
