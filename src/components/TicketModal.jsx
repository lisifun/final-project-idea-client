import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropdownStatus from "./DropdownStatus";
import DropdownPriority from "./DropdownPriority";
import DropdownLabel from "./DropdownLabel";
import DropdownMember from "./DropdownMember";

const TicketModal = ({
  user,
  setFilteredTickets,
  currentWorkspace,
  allTickets,
  setAllTickets,
  showModal,
  setShowModal,
  addNewTicket,
}) => {
  const workspaceId = currentWorkspace._id;

  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    label: "",
    workspace: workspaceId,
    assignee: "",
    createdBy: {
      username: user.username,
      photo: user.photo,
      fullname: user.photo,
      email: user.email,
    },
  });

  useEffect(() => {
    if (user) {
      setNewTicket((prev) => ({
        ...prev,
        createdBy: user._id,
      }));
    }
  }, [user]);

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

  console.log("line 71 => ", newTicket);
  return (
    <>
      {currentWorkspace && (
        <Modal.Dialog className="modal-ticket" style={{ zIndex: "999" }}>
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
                {currentWorkspace.name.slice(0, 2).toUpperCase()}
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
                  <label className="label" htmlFor="title">
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
                  <label className="label" htmlFor="description">
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
                currentWorkspace={currentWorkspace}
              />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              className="create-ticket-button"
              onClick={() => {
                console.log(newTicket);
                addNewTicket(newTicket);
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
