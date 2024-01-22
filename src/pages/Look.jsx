import React from "react";
import NavbarIbb from "../components/NavbarIbb";
import { Container, Row, Col, Button } from "react-bootstrap";
import lookLogo from "../assets/lookLogo.png";

const Look = () => {
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
          <Col className="p-2" style={{ textAlign: "center", color: "#fff" }}>AERO</Col>
        </Row>
      </Container>
    </>
  );
};

export default Look;
