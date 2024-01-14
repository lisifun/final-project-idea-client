import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";

const TicketModal = () => {
  const { user } = useContext(AuthContext);
  const [allTickets, setAllTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",

    // members: [String],
    label: "",
    // project: { type: Schema.Types.ObjectId, ref: "Project" },
    // deadline: { type: Date },
    // workspace: { type: Schema.Types.ObjectId, ref: "Workspace" },
  });

  const navigate = useNavigate();

  const handleTextInput = (e) => {
    setNewTicket((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (e) => {
    setNewTicket((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addNewTicket = () => {
    axios
      .post(SERVER_URL + "/tickets", newTicket)
      .then((response) => {
        setAllTickets([newTicket, ...allTickets]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(SERVER_URL + "/tickets")
      .then((response) => {
        setAllTickets(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Modal.Dialog className="modal-ticket">
        <Modal.Header
          closeButton
          onClick={() => {
            navigate("/dashboard");
          }}
          style={{ marginBottom: "24px" }}
        >
          <Modal.Title>New ticket</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form style={{ marginBottom: "24px" }}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="title"
                value={newTicket.title}
                onChange={handleTextInput}
                placeholder="Ticket title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="description"
                value={newTicket.description}
                onChange={handleTextInput}
                placeholder="Ticket description..."
              />
            </Form.Group>
          </Form>

          <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
            <Form.Select
              name="status"
              id="todo"
              style={{ width: "6vw" }}
              onChange={handleSelect}
              // value={newTicket.status}
            >
              <option>Todo</option>
              <option value="Todo">Todo</option>
              <option value="In-Progress">In-Progress</option>
              <option value="In-Review">In-Review</option>
              <option value="Done">Done</option>
            </Form.Select>

            <Form.Select
              name="priority"
              id="priority"
              onChange={handleSelect}
              style={{ width: "6vw" }}
              // value={newTicket.priority}
            >
              <option>Priority</option>
              <option value="No Priority">No Priority</option>
              <option value="Urgent">Urgent</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Select>

            {/* <Form.Select
              name="assignee"
              id="assignee"
              onChange={handleSelect}
              style={{ width: "6vw" }}
              value={newTicket.assignee}
            >
              <option>Assignee</option>
            </Form.Select> */}

            <Form.Select
              name="label"
              id="label"
              onChange={handleSelect}
              style={{ width: "6vw" }}
              // value={newTicket.label}
            >
              <option>Label</option>
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
              <option value="Improvement">Improvement</option>
            </Form.Select>

            {/* <Form.Select
              name="project"
              id="project"
              onChange={handleSelect}
              style={{ width: "6vw" }}
            >
              <option>Project</option>
              <option value="First Project">First Project</option>
              <option value="Second Project">Second Project</option>
              <option value="Final Project">Final Project</option>
            </Form.Select> */}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            className="new-ticket-button"
            onClick={() => {
              addNewTicket();
              navigate("/dashboard");
            }}
          >
            Create ticket
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
};

export default TicketModal;
