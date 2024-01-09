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
      {/* <Container
        className="d-flex justify-content-center align-item-center position-fixed popup"
        fluid
      >
        <div>
          <Row className="text-center">
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
            <Col>
              <Image className="brandMenu" width="300vw" src={brand} />
            </Col>
          </Row>
        </div>
      </Container> */}
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
              <img src={map} className="TotalDealers" alt="map" />
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
      <Container
        className="d-flex flex-column justify-content-center align-items-center identity"
        fluid
      >
        <Form className="formulir mt-5">
          <Row className="m-5">
            <h2 className="text-dark">Let us Know how we can support you</h2>
            <h2 className="text-dark font-weight-bold">
              <b>Contact Us Now</b>
            </h2>
          </Row>
          <Row className="m-5 p-1">
            <Col>
              <Form.Control placeholder="Name" />
            </Col>
            <Col>
              <Form.Control placeholder="Phone" />
            </Col>
            <Col>
              <Form.Control placeholder="Email" />
            </Col>
          </Row>
          <Row className="m-5 p-1">
            <Form.Control placeholder="Message" />
          </Row>
          <Row
            className="pb-3 d-flex justify-content-center align-items-center"
            size="lg"
          >
            <Button className="w-25">Send</Button>
          </Row>
        </Form>
        <div className="m-5 p-5">
          <Row>
            <h3 className="text-center">PT.INDONESIA BERSEPEDA BAHAGIA</h3>
          </Row>
          <Row>
            <Col className="col-1">
              <img src={wa} className="logoHome" alt="whatsapp" />
            </Col>
            <Col className="col-11">
              <p>+62 898 9018 8188</p>
            </Col>
          </Row>
          <Row className="my-3">
            <Col className="col-1">
              <img src={email} className="logoHome" alt="email" />
            </Col>
            <Col className="col-11">
              <p>sales@indonesiabersepeda.com</p>
            </Col>
          </Row>
          <Row>
            <Col className="col-1">
              <img src={address} className="logoHome" alt="adress" />
            </Col>
            <Col className="col-11">
              <p>
                Puri Botanical, Jl. Joglo Raya No.10, Joglo, Kec. Kembangan,Kota
                Jakarta Barat, Daerah Khusus Ibukota Jakarta 11460
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default App;
