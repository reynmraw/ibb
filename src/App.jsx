import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "./assets/logo.png";
import "./App.css";
import ControlledCarousel from "./components/ControlledCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import map from "./assets/Artboard3z.png";

function App() {
  return (
    <>
      <nav>
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
      </nav>
      <ControlledCarousel />
      <section className="identity">
        <div className="AboutUs">
          <div className="AboutUsCaption">
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
          </div>
          <img src={logo} className="AboutUsImg" />
        </div>
        <div className="OurMission">
          <img src={logo} className="AboutUsImg" />
          <div className="OurMissionCaption">
            <h2>Our Mission</h2>
            <p>
              To Support Bicycle dealers so they can easly sell products and
              grow their business by:
            </p>
            <ul>
              <li>Offering only high quality and warranted products</li>
              <li>Setting competitive market price and optimum margin share</li>
              <li>giving fair policy to all our dealer friends</li>
              <li>Actively building and promoting brands</li>
              <li>Supporting dealers with marketing items</li>
            </ul>
          </div>
        </div>
        <div className="DealerPartner">
          <div className="DealerPartnerContent">
            <h2>Our Dealer Partner</h2>
            <img src={map} className="TotalDealers" />
            <p className="TotalDealersCount">Total 200+ Dealers</p>
            <p className="TotalDealersCountIndonesia">All Across Indonesia</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
