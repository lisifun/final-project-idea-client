import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const WelcomeModal = ({ setShowModal }) => {
  return (
    <div>
      <Modal.Dialog className="modal-welcome">
        <Modal.Header>
          <div style={{ display: "flex", gap: "4px", marginBottom: "24px" }}>
            <svg width="24" height="24" viewBox="0 0 14 14" fill="none">
              <rect
                x="1"
                y="1"
                width="12"
                height="12"
                rx="6"
                stroke="#858699"
                stroke-width="2"
                fill="none"
              ></rect>
              <path
                fill="#858699"
                stroke="none"
                d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 0 z"
                transform="translate(3.5,3.5)"
              ></path>
            </svg>
            <svg width="24" height="24" viewBox="0 0 14 14" fill="none">
              <rect
                x="1"
                y="1"
                width="12"
                height="12"
                rx="6"
                stroke="#F2C94C"
                stroke-width="2"
                fill="none"
              ></rect>
              <path
                fill="#F2C94C"
                stroke="none"
                d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 1,1 0, 3.5 z"
                transform="translate(3.5,3.5)"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 14 14"
              aria-label="Done"
              fill="#5e6ad2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM11.101 5.10104C11.433 4.76909 11.433 4.23091 11.101 3.89896C10.7691 3.56701 10.2309 3.56701 9.89896 3.89896L5.5 8.29792L4.10104 6.89896C3.7691 6.56701 3.2309 6.56701 2.89896 6.89896C2.56701 7.2309 2.56701 7.7691 2.89896 8.10104L4.89896 10.101C5.2309 10.433 5.7691 10.433 6.10104 10.101L11.101 5.10104Z"
              ></path>
            </svg>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div style={{ marginBottom: "24px" }}>
            <h4>Welcome to TicketFlow</h4>
            <p>
              Your Ultimate Work Management Solution! Create and manage tasks
              with our intuitive ticketing system. Stay organized, collaborate,
              and boost productivity.
            </p>
            <p>
              Create a new ticket and experience the power of efficient work
              management. Try TicketFlow today!
            </p>
          </div>
        </Modal.Body>

        <Modal.Footer style={{ display: "flex", justifyContent: "flex-start" }}>
          <Button
            variant="primary"
            className="create-new-ticket-button"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Create a new ticket
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default WelcomeModal;
