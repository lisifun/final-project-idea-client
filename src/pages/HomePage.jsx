import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="home-info">
      <h1 className="heading">
        TicketFlow, your streamlined solution<br></br> for seamless project
        management
      </h1>
      <div className="paragraph">
        Elevate your workflow with intuitive ticketing and efficient task
        tracking, making project collaboration a breeze.
      </div>

      <Link to="/login" className="link">
        <Button className="getstarted-button">
          Get started <i className="fas fa-chevron-right"></i>
        </Button>
      </Link>
    </div>
  );
};

export default Home;
