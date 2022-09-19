import React from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import AppRouter from "./components/AppRouter";
import './styles/App.css'
import { AuthContext } from "./components/UI/context";
import { useState, useEffect } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
