import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownContact = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle id="contact">Contact</Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-contact">
          <div className="contact-phone">
            <i className="fas fa-phone"></i>
            (425)546-6197
          </div>

          <div className="contact-email">
            <i className="fas fa-envelope"></i>
            lisandrafj99@gmail.com
          </div>

          <div className="contact-github">
            <a
              href="https://github.com/lisifun"
              className="link"
              target="blank"
            >
              <i className="fab fa-github" style={{ marginRight: "16px" }}></i>{" "}
              lisifun
            </a>
          </div>

          <div className="contact-linkedin">
            <a
              href="https://www.linkedin.com/in/lisandrafundora"
              className="link"
              target="blank"
            >
              <i
                className="fab fa-linkedin"
                style={{ marginRight: "16px" }}
              ></i>
              Lisandra Fundora
            </a>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownContact;
