import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import TicketModal from "./TicketModal";

// import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

const Sidebar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [allWorkspaces, setAllWorkspaces] = useState([]);

  useEffect(() => {
    axios.get(SERVER_URL + "/workspaces").then((response) => {
      setAllWorkspaces(response.data);
    });
  }, []);

  return (
    <div className="sidebar">
      <nav
        className="nav-sidebar"
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Dropdown>
              <Dropdown.Toggle id="workspace">
                <div>Worspace 1</div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-workspace">
                {user && <div>{user.email}</div>}

                {/* {workspace && } */}

                {allWorkspaces &&
                  allWorkspaces.map((workspace, index) => {
                    return (
                      <Link className="link" key={index}>
                        <div>{workspace.name}</div>
                      </Link>
                    );
                  })}

                <Dropdown.Item style={{ color: "white" }}></Dropdown.Item>
                {/* <Dropdown.Item style={{ color: "white" }}>
                  Workspace 2
                </Dropdown.Item> */}

                <Dropdown.Item style={{ color: "white" }}>
                  Workspace settings
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/workspace"
                  style={{ color: "white" }}
                >
                  Create workspace
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle id="user">
                {user && (
                  <img
                    src={user.photo}
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50px",
                    }}
                  />
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-user">
                <Dropdown.Item
                  as={Link}
                  to="/profile"
                  style={{ color: "white" }}
                >
                  View profile
                </Dropdown.Item>

                <Dropdown.Item
                  as={Link}
                  to="/"
                  onClick={logOutUser}
                  style={{ color: "white" }}
                >
                  Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Form.Control
            type="text"
            className="search-input"
            placeholder="Search"
          />

          <i className="fas fa-search"></i>
        </div>

        <Button
          variant="primary"
          className="new-ticket-button"
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> New ticket{" "}
          <FontAwesomeIcon icon="fa-solid fa-tag" />
        </Button>
        <Button variant="primary" className="inbox-button">
          Inbox
        </Button>

        <Button variant="primary" className="mytickets-button">
          My tickets
        </Button>

        <Button variant="primary" className="calendar-button">
          Calendar
        </Button>
      </nav>
      {showModal && <TicketModal />}
    </div>
  );
};

export default Sidebar;
