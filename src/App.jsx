import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "./assets/logo.png";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import line from "./assets/Artboard 1.png";
import biker from "./assets/IAM.jpg";
import brand from "./assets/Artboard4z.png";
import NavbarIbb from "./components/NavbarIbb";
import "./App.css";
import ControlledCarousel from "./components/ControlledCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import map from "./assets/Artboard3z.png";
import { Container, Col, Row, Image, Form, Button } from "react-bootstrap";
import wa from "./assets/whatsapp.png";
import email from "./assets/email.png";
import address from "./assets/maps-and-flags.png";
import fb from "./assets/facebook.png";
import ig from "./assets/instagram.png";
import yt from "./assets/youtube.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Look from "./pages/Look";

function App() {
  // const [navHover, setNavHover] = useState(false);

  // const handleMouseOver = () => {
  //   setNavHover(true);
  // };

  // const handleMouseOut = () => {
  //   setNavHover(false);
  // };
  return (
    <>
      <NavbarIbb />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Brands/Look" element={<Look />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
