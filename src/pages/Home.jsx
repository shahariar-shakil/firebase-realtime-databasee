import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <hr />
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500"
            className="img-fluid"
            alt="Placeholder"
          />
        </div>
        <div className="col-md-6">
          <h2>About Our App</h2>
          <p>
            This application is built using React and Vite. It demonstrates the
            use of routing, components, and Bootstrap for styling.
          </p>
          <p>
            Explore our features and services through the navigation bar. We
            hope you have a great experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
