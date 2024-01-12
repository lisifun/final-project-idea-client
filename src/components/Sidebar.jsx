import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="sidebar">
      <nav>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "40px" }}>
            <Dropdown>
              <Dropdown.Toggle
              // style={{ backgroundColor: "transparent", border: "none" }}
              >
                <div>Workspace 1</div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-workspace">
                {/* <div>{user.email}</div> */}

                <Dropdown.Item href="#/action-1">Workspace 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Workspace 2</Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item href="#/action-3">
                  Workspace settings
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/workspace">
                  Create workspace
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
              // style={{ backgroundColor: "transparent", border: "none" }}
              >
                <img />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-user">
                <Dropdown.Item href="#/action-1">View profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Add an account</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div>
            <button
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              <i className="fas fa-pencil-alt"></i>
              <div>New ticket</div>
            </button>
          </div>
        </div>
        <div>
          <div>
            <input placeholder="Search"></input>
            <i className="fas fa-search"></i>
          </div>
          <div>inbox</div>
          <div>my tickets</div>
          <div>calendar</div>
        </div>
      </nav>

      {showModal && (
        <>
          <Modal.Dialog className="modal-ticket">
            <Modal.Header
              closeButton
              onClick={() => {
                setShowModal(!showModal);
              }}
              style={{ marginBottom: "24px" }}
            >
              <Modal.Title>New ticket</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form style={{ marginBottom: "24px" }}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Ticket title" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Ticket description..."
                  />
                </Form.Group>
              </Form>

              <div
                style={{ display: "flex", gap: "12px", marginBottom: "24px" }}
              >
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "#323244", border: "none" }}
                  >
                    Todo
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-todo">
                    <Dropdown.Item href="#/action-1">Todo</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">In Review</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Done</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Canceled</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "#323244", border: "none" }}
                  >
                    Priority
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-priority">
                    <Dropdown.Item href="#/action-1">No Priority</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Urgent</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">High</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Medium</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Low</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "#323244", border: "none" }}
                  >
                    Assignee
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-assignee">
                    <Dropdown.Item href="#/action-1">{user.name}</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "#323244", border: "none" }}
                  >
                    Label
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-label">
                    <Dropdown.Item href="#/action-1">Bug</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Feature</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Improvement</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "#323244", border: "none" }}
                  >
                    Project
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-project">
                    <Dropdown.Item href="#/action-1">
                      Final Project
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="primary"
                style={{ backgroundColor: "#5c6ad2", border: "#5c6ad2" }}
              >
                Create ticket
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </>
      )}
    </div>
  );
};

export default Sidebar;
