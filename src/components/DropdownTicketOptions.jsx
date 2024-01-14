import React from "react";
import { useNavigate } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownTicketOptions = ({ selectedTicket, onDelete }) => {
  const navigate = useNavigate();
  return (
    <Dropdown className="dropdown-ticket-options" style={{ width: "2vw" }}>
      <Dropdown.Toggle id="options">
        <i className="fas fa-ellipsis-v"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-ticket-options">
        <Dropdown.Item>
          <i className="fas fa-link"></i> Add link
        </Dropdown.Item>
        <Dropdown.Item>
          <i className="fas fa-star"></i> Favorite
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            onDelete(selectedTicket._id);
            navigate("/dashboard");
          }}
        >
          <i className="fas fa-trash-alt"></i> Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownTicketOptions;
