import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRouter from "./components/MainRouter";

import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const canvas = document.getElementById("fluid-canvas");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (canvas && isMobile) {
      canvas.style.display = "none";
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRouter />}>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
