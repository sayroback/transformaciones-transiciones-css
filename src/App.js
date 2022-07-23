import React from "react";
import "./styles/project.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Lessons } from "./pages/Lessons";
import { Lessons1 } from "./pages/Lessons/Lessons1";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lessons">
          <Route path="1" element={<Lessons1 />} />
          <Route index element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
