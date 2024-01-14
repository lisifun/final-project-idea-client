import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";

import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const TicketCard = ({ ticket }) => {
  
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const { workspace, priority, status, title, label, members, project, _id } =
    ticket;

  

  return (
    <>
      <Link to={`/dashboard/details/${_id}`} className="link ticket-card">
        {/* <input
        type="checkbox"
        onChange={() => {
          console.log(_id);
          setIsClicked(!isClicked);
          setSelectedTicketId(_id);
        }}
      ></input> */}

        <div className="ticket-card-left">
          {/* <Dropdown className="dropdown-ticket-options" style={{ width: "2vw" }}>
          <Dropdown.Toggle id="options">
            <i class="fas fa-ellipsis-v"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu
            className="dropdown-ticket-options"
            onClick={() => {
              console.log("here", ticket._id);
              // setSelectedTicketId();
            }}
          >
            <Dropdown.Item
              as={Link}
              // to={`/last-orders/edit-page`}
              // onClick={() => {
              //   extractingOrder(id);
              // }}
            >
              Edit
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => {
                onDelete(_id);
              }}
            >
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
          <div>{priority}</div>
          <div>WO-1</div>
          {/* <div>{workspace}</div> */}

          <div>{status}</div>
          <div>
            <b>{title}</b>
          </div>
        </div>

        <div className="ticket-card-right">
          <div>{label}</div>

          <div>Final Project</div>
          {/* <div>{project}</div> */}

          {members.map((member, index) => {
            return <div key={index}>{member}</div>;
          })}
        </div>
      </Link>
    </>
  );
};

export default TicketCard;
