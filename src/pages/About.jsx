import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h1>About Us</h1>
      <p>Learn more about us on this page.</p>
      <hr />
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide the best services and user experience
            through our cutting-edge technology and customer-centric approach.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Team</h2>
          <p>
            We have a diverse and talented team dedicated to achieving
            excellence and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
