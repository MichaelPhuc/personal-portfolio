import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
// import Contact from "./components/contact/Contact";
// import Portfolio from "./components/portfolio/Portfolio";
import Study from "./components/study/Study";


import "./app.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/study" element={<Study />} />
          </Routes>
          {/* <Portfolio />
          <Contact /> */}
        </Router>
    
      </div>
    </div>
  );
}

export default App;
