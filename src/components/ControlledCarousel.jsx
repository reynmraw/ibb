import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import img1 from "../assets/photo7.jpg";
import img2 from "../assets/Artboard3z.png";
import img3 from "../assets/Artboard4.png";
import caption from "../assets/WHITE LOGO IBB.png";
import { Image } from "react-bootstrap";
import "./styles/ControlledCarousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption className="ms-auto" style={{ top: "25%" }}>
          <Image
            src={caption}
            width="40%"
            className=""
            style={{ left: "30%", position: "relative" }}
            // className="position-absolute bottom-0 start-100 translate-middle"
          />

          {/* <h3>IBB </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ControlledCarousel;
