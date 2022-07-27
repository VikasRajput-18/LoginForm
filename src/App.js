import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
