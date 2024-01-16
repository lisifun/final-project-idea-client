import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownFeature = () => {
  return (
    <div>
      <Dropdown className="dropdown-features">
        <Dropdown.Toggle id="features">Features</Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-features">
          <div className="feature-tickets">
            <div>
              <i className="fas fa-ticket-alt"></i>Tickets
            </div>
            <p>Track your work</p>
          </div>

          <div className="feature-projetcs">
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                stroke="none"
                fill="rgb(238, 239, 252)"
              >
                <path d="M5.948 2H2.623A.623.623 0 0 0 2 2.623v3.325c0 .344.28.623.623.623h3.325c.344 0 .623-.279.623-.623V2.623A.623.623 0 0 0 5.948 2ZM13.377 2h-3.325a.623.623 0 0 0-.623.623v3.325c0 .344.279.623.623.623h3.325c.344 0 .623-.279.623-.623V2.623A.623.623 0 0 0 13.377 2ZM5.948 9.429H2.623a.623.623 0 0 0-.623.623v3.325c0 .344.28.623.623.623h3.325c.344 0 .623-.28.623-.623v-3.325a.623.623 0 0 0-.623-.623ZM13.377 9.429h-3.325a.623.623 0 0 0-.623.623v3.325c0 .344.279.623.623.623h3.325c.344 0 .623-.28.623-.623v-3.325a.623.623 0 0 0-.623-.623Z"></path>
              </svg>
              Projects
            </div>
            <p>Collaborate on big ideas</p>
          </div>

          <div className="feature-calendar">
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="rgb(238, 239, 252)"
                className="sc-fCxjCI bUBJZy"
              >
                <path d="M6 1.00009V13L9.99998 15V3.002L6 1.00009Z"></path>
                <path d="M5 13L4.99998 1.00009L1.40251 3.04566C1.15509 3.17502 1 3.43111 1 3.71031V14.2501C1 14.5203 1.14535 14.7696 1.38048 14.9027C1.61562 15.0359 1.90419 15.0322 2.13588 14.8932L5 13Z"></path>
                <path d="M14.6935 12.1049L11 15V3.002L13.8641 1.10688C14.0958 0.967862 14.3844 0.964221 14.6195 1.09735C14.8547 1.23048 15 1.4798 15 1.75V11.5001C15 11.739 14.8862 11.9636 14.6935 12.1049Z"></path>
              </svg>
              Roadmaps
            </div>
            <p>Plan your product</p>
          </div>

          <div className="feature-comments">
            <div>
              <i className="fas fa-comment"></i>
              Comments
            </div>
            <p>Communicate with your team members</p>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownFeature;
