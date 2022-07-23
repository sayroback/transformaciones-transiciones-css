import React from "react";
import "./styles/project.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Lessons } from "./pages/Lessons";
import { Lesson1 } from "./pages/Lessons/Lesson1";
import { Lesson2 } from "./pages/Lessons/Lesson2";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lessons">
          <Route path="1" element={<Lesson1 />} />
          <Route path="2" element={<Lesson2 />} />
          <Route index element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
