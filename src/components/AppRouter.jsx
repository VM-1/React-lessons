import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import About from "../pages/About";
import PostedPage from "../pages/PostedPage";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<About />} path="/about" />
      <Route exact element={<Posts />} path="/posts" />
      <Route exact element={<PostedPage />} path="/posts/:id" />
      <Route path="*" element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
