// import { useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Popup, Question, QuestionBar } from "./components";

import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Popup />} />
          </Routes>
          <Routes>
            <Route path="/question" element={<Question />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
