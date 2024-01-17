import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropdownStatus from "./DropdownStatus";
import DropdownPriority from "./DropdownPriority";
import DropdownLabel from "./DropdownLabel";
import DropdownMember from "./DropdownMember";

const TicketModal = ({ workspaceId, showModal, setShowModal }) => {
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

  // const navigate = useNavigate();

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
              setShowModal(!showModal);
              // navigate(`/dashboard/${workspaceId}`);
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div className="input-group">
                <form>
                  <input
                    className="input"
                    id="title"
                    type="text"
                    name="title"
                    value={newTicket.title}
                    onChange={handleTextInput}
                    required
                    style={{ width: "30vw " }}
                  ></input>
                  <label className="label" for="title">
                    Ticket title
                  </label>
                </form>
              </div>
              <div className="input-group">
                <form>
                  <input
                    className="input"
                    id="description"
                    type="text"
                    name="description"
                    value={newTicket.description}
                    onChange={handleTextInput}
                    required
                    style={{ width: "30vw " }}
                  ></input>
                  <label className="label" for="description">
                    Ticket description
                  </label>
                </form>
              </div>
            </div>

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
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              className="create-ticket-button"
              onClick={() => {
                addNewTicket();
                // navigate(`/dashboard/${workspaceId}`);
                setShowModal(!showModal);
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
