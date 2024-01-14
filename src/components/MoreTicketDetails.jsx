import React, { useEffect } from "react";

import Form from "react-bootstrap/Form";

const MoreTicketDetails = ({
  selectedTicket,
  editedTicket,
  setEditedTicket,
  onChange,
}) => {
  const handleSelect = (e) => {
    setEditedTicket((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    onChange(editedTicket);
  }, [editedTicket]);

  return (
    <div>
      {editedTicket && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "24px",
            padding: "24px",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "100px", alignItems: "center" }}>
            <div style={{ width: "50px" }}>Status</div>
            <Form.Select
              name="status"
              id="todo"
              style={{ width: "6vw" }}
              onChange={handleSelect}
              value={editedTicket.status}
              defaultValue={selectedTicket.status}
            >
              <option value="Todo">Todo</option>
              <option value="In-Progress">In-Progress</option>
              <option value="In-Review">In-Review</option>
              <option value="Done">Done</option>
            </Form.Select>
          </div>

          <div style={{ display: "flex", gap: "100px", alignItems: "center" }}>
            <div style={{ width: "50px" }}>Priority</div>
            <Form.Select
              name="priority"
              id="priority"
              onChange={handleSelect}
              style={{ width: "6vw" }}
              value={editedTicket.priority}
              defaultValue={selectedTicket.priority}
            >
              <option value="No Priority">No Priority</option>
              <option value="Urgent">Urgent</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Select>
          </div>

          <div style={{ display: "flex", gap: "100px", alignItems: "center" }}>
            <div style={{ width: "50px" }}>Label</div>
            <Form.Select
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
            </Form.Select>
          </div>
          <hr style={{ width: "30vw" }}></hr>

          <div style={{ display: "flex", gap: "100px", alignItems: "center" }}>
            <div style={{ width: "50px" }}>Project</div>
            <Form.Select
              name="project"
              id="project"
              //   onChange={handleSelect}
              style={{ width: "6vw" }}
              // value={newTicket.priority}
              defaultValue={selectedTicket.priority}
            >
              <option value="No Priority">Final Project</option>
              <option value="Urgent">Second Project</option>
              <option value="New Project">
                <i className="fas fa-plus"></i>Create new project
              </option>
            </Form.Select>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreTicketDetails;
