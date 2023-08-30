// import { useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Popup, Question, QuestionBar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Popup />} />
          </Routes>
          <Routes>
            <Route path="/question" element={<Question />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
