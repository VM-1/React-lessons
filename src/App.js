import React from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import AppRouter from "./components/AppRouter";
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
