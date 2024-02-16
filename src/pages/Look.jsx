import React from "react";
import Slider from "react-slick";
import NavbarIbb from "../components/NavbarIbb";
import { Container, Row, Col, Button } from "react-bootstrap";
import lookLogo from "../assets/lookLogo.png";
import ReactCardSlider from "react-card-slider-component";
import lookAero1 from "../assets/lookcycle 2024_Page_6_Image_0001.jpg";
import lookAero2 from "../assets/lookcycle 2024_Page_7_Image_0001.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightblue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightblue" }}
      onClick={onClick}
    />
  );
}

const Look = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className="bannerLook" fluid>
        <Row className="justify-content-md-center">
          <Col className="text-center mt-5">
            <img src={lookLogo} width={200} />
          </Col>
        </Row>
        <Row className="text-center my-4" style={{ color: "#fff" }}>
          <Col>Leader in Clipless Pedals and Carbon Technology</Col>
        </Row>
        <Container>
          <Row className="mb-3" style={{ color: "#fff", textAlign: "left" }}>
            <Col>
              LOOK designs, develops and manufactures exceptional products In
              its factories, its teams anticipate, imagine, explore, experiment,
              draw and manufacture in a process that is both industrial and
              hand-crafted. And the reason LOOK relentlessly innovates its
              products, design and services is to provide cyclists with a unique
              experience.
            </Col>
          </Row>
          <Row className="mb-3" style={{ color: "#fff", textAlign: "left" }}>
            <Col>
              By pushing our boundaries and exceeding our limits, LOOK exalts
              the senses and the passions (and ignites the spirits). Above all,
              LOOK utilizes technology to bring out the emotions that allow each
              cyclist to perfect their performance.A performance that is
              expressed through victories and surpassing oneself, and also
              through the ability to tame one's fears and doubts, to overcome
              hardships and to share one's emotions.
            </Col>
          </Row>
          <Row className="" style={{ color: "#fff", textAlign: "left" }}>
            <Col>
              Whether it is frames, pedals or equipment, for professional or
              amateur athletes, the technologies offered by LOOK convey
              extraordinary sensations.
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row style={{ textAlign: "center" }}>
            <Col>
              <button
                className="p-2"
                style={{ backgroundColor: "#fff", borderRadius: 20 }}
              >
                Brand Website
              </button>
            </Col>
            <Col>
              <button
                className="p-2"
                style={{ backgroundColor: "#fff", borderRadius: 20 }}
              >
                Be Our Reseller
              </button>
            </Col>
            <Col>
              <button
                className="p-2"
                style={{ backgroundColor: "#fff", borderRadius: 20 }}
              >
                Dealer List
              </button>
            </Col>
            <Row className="mt-5">
              <Col>
                <button
                  className="p-2"
                  style={{ backgroundColor: "#fff", borderRadius: 20 }}
                >
                  Warranty
                </button>
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
      <Container className="space" fluid>
        <Row>
          <Col className="p-2" style={{ textAlign: "center", color: "#fff" }}>
            AERO
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3>
                <img src={lookAero1} width={280} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={lookAero2} width={280} />
              </h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Look;
