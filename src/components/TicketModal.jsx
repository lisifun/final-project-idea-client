import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import DropdownStatus from "./DropdownStatus";
import DropdownPriority from "./DropdownPriority";
import DropdownLabel from "./DropdownLabel";
import DropdownMember from "./DropdownMember";

const TicketModal = ({ workspaceId }) => {
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);
  const [allTickets, setAllTickets] = useState(null);
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    label: "",
    workspace: workspaceId,
    assignee: "",
  });

  const navigate = useNavigate();

  const handleTextInput = (e) => {
    setNewTicket((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleStatusSelect = (eventKey) => {
    setNewTicket((prev) => ({ ...prev, status: eventKey }));
    

  };

  const handlePrioritySelect = (eventKey) => {
    setNewTicket((prev) => ({ ...prev, priority: eventKey }));
 
  
  };

  const handleLabelSelect = (eventKey) => {
    setNewTicket((prev) => ({ ...prev, label: eventKey }));
   
  };

  const handleMemberSelect = (eventKey) => {
    setNewTicket((prev) => ({ ...prev, assignee: eventKey }));
 
  };

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/tickets/${workspaceId}`)
      .then((response) => {
        setAllTickets(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/workspaces/${workspaceId}`)
      .then((response) => {
        setSelectedWorkspace(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addNewTicket = () => {
    axios
      .post(`${SERVER_URL}/tickets/${workspaceId}`, newTicket)
      .then((response) => {
        setAllTickets([newTicket, ...allTickets]);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      {selectedWorkspace && (
        <Modal.Dialog className="modal-ticket">
          <Modal.Header
            closeButton
            onClick={() => {
              navigate(`/dashboard/${workspaceId}`);
            }}
            style={{ marginBottom: "24px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div className="workspace-logo">
                {selectedWorkspace.name.slice(0, 2).toUpperCase()}
              </div>

              <div>New ticket</div>
            </div>
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
              <DropdownStatus
                handleStatusSelect={handleStatusSelect}
                defaultValue={newTicket.status}
              />

              <DropdownPriority
                handlePrioritySelect={handlePrioritySelect}
                defaultValue={newTicket.priority}
              />

              <DropdownLabel
                handleLabelSelect={handleLabelSelect}
                defaultValue={newTicket.label}
              />

              <DropdownMember
                handleMemberSelect={handleMemberSelect}
                defaultValue={newTicket.assignee}
                selectedWorkspace={selectedWorkspace}
              />
              {/* <Form.Select
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
            </Form.Select> */}
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              className="create-ticket-button"
              onClick={() => {
                addNewTicket();
                navigate(`/dashboard/${workspaceId}`);
              }}
            >
              Create ticket
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </>
  );
};

export default TicketModal;
