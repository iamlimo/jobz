import React from "react";
import "../assets/css/inner.module.css";
import { Navbar } from "../components/Navbar";

const Landing = () => {
  return (
    <div className="landingPage">
      <Navbar />
      <section id="features" className="section">
        <h2>Features</h2>
        <p>Explore our amazing features.</p>
      </section>
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>Learn more about our company.</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Contact us for any inquiries.</p>
      </section>
    </div>
  );
};

export default Landing;
