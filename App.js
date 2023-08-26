import logo from "./logo.svg";
import "./App.css";
import Footer from "./footer";
import Home from "./home";
import Matchdetail from "./matchdetail";
import Scorecard from "./scorecard";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matchdetail/:id" element={<Matchdetail />} />
          <Route path="/scorecard/:id" element={<Scorecard />} />
          <Route path="/footer/:id" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
