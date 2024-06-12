import React from "react";

const Services = () => {
  return (
    <div className="container mt-5">
      <h1>Our Services</h1>
      <p>These are the services we offer.</p>
      <hr />
      <div className="row mt-4">
        <div className="col-md-4">
          <h2>Web Development</h2>
          <p>
            We offer top-notch web development services to create dynamic and
            responsive websites.
          </p>
        </div>
        <div className="col-md-4">
          <h2>Mobile Apps</h2>
          <p>
            Our team develops high-quality mobile applications for both Android
            and iOS platforms.
          </p>
        </div>
        <div className="col-md-4">
          <h2>UI/UX Design</h2>
          <p>
            We provide exceptional UI/UX design services to ensure your
            application is user-friendly and visually appealing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
