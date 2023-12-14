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
import { Container, Col, Row, Image } from "react-bootstrap";

function App() {
  return (
    <>
      <NavbarIbb />
      {/* <nav>
        <a href="#">
          <img src={logo} className="logo" />
        </a>
        <div className="menu">
          <ul>
            <li>
              <a href="#">OUR BRANDS</a>
            </li>
            <li>
              <a href="#">BE REPRESENTED IN INDONESIA</a>
            </li>
            <li>
              <a href="#">BECOME OUR PARTNER DEALER</a>
            </li>
            <li>
              <a href="#">OUR DEALERS</a>
            </li>
          </ul>
        </div>
      </nav> */}
      <ControlledCarousel />
      <Container className="identity py-5" fluid>
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>
              Indonesia Bersepeda, shorts for IBB, is founded due to Business
              experiences of running own retail stores. Typically, retail store
              will buy products from their supplier based on what they need and
              what their customer's need. They do not get any further support to
              build their business. The support like price policy, branding and
              promotional activities, optimum margin, after sales services and
              warranties are actually essentials for these retail stores to grow
              their business. With this background experiences, IBB is born to
              be their best friend.
            </p>
          </Col>
          <Col>
            <img src={photo1} className="AboutUsImg" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <img src={photo2} className="AboutUsImg" />
          </Col>
          <Col>
            <div className="">
              <h2>Our Mission</h2>
              <p>
                To Support Bicycle dealers so they can easly sell products and
                grow their business by:
              </p>
              <ul>
                <li>Offering only high quality and warranted products</li>
                <li>
                  Setting competitive market price and optimum margin share
                </li>
                <li>giving fair policy to all our dealer friends</li>
                <li>Actively building and promoting brands</li>
                <li>Supporting dealers with marketing items</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="DealerPartner">
            <div className="DealerPartnerContent">
              <h2>Our Dealer Partner</h2>
              <img src={map} className="TotalDealers" />
              <p className="TotalDealersCount">Total 200+ Dealers</p>
              <p className="TotalDealersCountIndonesia">All Across Indonesia</p>
            </div>
          </div>
        </Row>
      </Container>
      <Image src={line} width="100%" className="line" />
      <Container fluid>
        <Row>
          <Col>
            <h3 className="text-center">We Present and Distribute</h3>
            <h2 className="text-center">WORLD CLASS BRAND</h2>
            <Image src={brand} width="100%" />
          </Col>
        </Row>
      </Container>
      <Image src={line} width="100%" className="line1" />
      <Container className="identity" fluid>
        <Row className="pt-5">
          <Col className="d-flex justify-content-center">
            <div>
              <h3>We Are Always Looking for</h3>
              <h3>New and exciting brands</h3>

              <h2 className="mt-4">We can help you</h2>
              <h2>grow your cycling</h2>
              <h2>brand in Indonesia</h2>
              <button className="join">JOIN NOW</button>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src={biker} width="50%" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
