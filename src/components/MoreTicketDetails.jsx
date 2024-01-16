import React, { useEffect } from "react";

import DropdownStatus from "./DropdownStatus";
import DropdownPriority from "./DropdownPriority";
import DropdownLabel from "./DropdownLabel";
import DropdownMember from "./DropdownMember";

const MoreTicketDetails = ({
  selectedTicket,
  editedTicket,
  setEditedTicket,
  onChange,
  selectedWorkspace,
}) => {
  // const handleSelect = (e) => {
  //   setEditedTicket((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const handleStatusSelect = (eventKey) => {
    setEditedTicket((prev) => ({ ...prev, status: eventKey }));
  };

  const handlePrioritySelect = (eventKey) => {
    setEditedTicket((prev) => ({ ...prev, priority: eventKey }));
  };

  const handleLabelSelect = (eventKey) => {
    setEditedTicket((prev) => ({ ...prev, label: eventKey }));
  };

  const handleMemberSelect = (eventKey) => {
    setEditedTicket((prev) => ({ ...prev, assignee: eventKey }));
  };

  useEffect(() => {
    onChange(editedTicket);
  }, [editedTicket]);

  return (
    <div>
      {editedTicket && (
        <div className="more-ticket-details">
          <div className="ticket-detail-select">
            <div style={{ width: "50px" }}>Status</div>
            <DropdownStatus
              handleStatusSelect={handleStatusSelect}
              defaultValue={editedTicket.status}
            />
          </div>

          <div className="ticket-detail-select">
            <div style={{ width: "50px" }}>Priority</div>
            <DropdownPriority
              handlePrioritySelect={handlePrioritySelect}
              defaultValue={editedTicket.priority}
            />
          </div>

          <div className="ticket-detail-select">
            <div style={{ width: "50px" }}>Label</div>
            <DropdownLabel
              handleLabelSelect={handleLabelSelect}
              defaultValue={editedTicket.label}
            />
            {/* <Form.Select
              name="label"
              id="label"
              onChange={handleSelect}
              style={{ width: "6vw" }}
              value={editedTicket.label}
              defaultValue={selectedTicket.label}
            >
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
              <option value="Improvement">Improvement</option>
            </Form.Select> */}
          </div>

          <div className="ticket-detail-select">
            <div style={{ width: "50px" }}>Assignee</div>
            <DropdownMember
              handleMemberSelect={handleMemberSelect}
              defaultValue={editedTicket.assignee}
              selectedWorkspace={selectedWorkspace}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreTicketDetails;
