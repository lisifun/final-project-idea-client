import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownTicketOptions = ({ selectedTicket, onDelete }) => {
  const { workspaceId } = useParams();
  const navigate = useNavigate();
  return (
    <Dropdown>
      <Dropdown.Toggle id="options">
        <i className="fas fa-ellipsis-v"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-ticket-options">
        <Dropdown.Item style={{ color: "rgb(238, 239, 252)" }}>
          <i className="fas fa-link"></i> Add link
        </Dropdown.Item>
        <Dropdown.Item style={{ color: "rgb(238, 239, 252)" }}>
          <i className="fas fa-star"></i> Favorite
        </Dropdown.Item>
        <Dropdown.Item
          style={{ color: "rgb(238, 239, 252)" }}
          onClick={() => {
            onDelete(selectedTicket._id);
            navigate(`/dashboard/${workspaceId}`);
          }}
        >
          <i className="fas fa-trash-alt"></i> Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownTicketOptions;
