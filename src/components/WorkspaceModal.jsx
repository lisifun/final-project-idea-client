import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const WorkspaceModal = ({
  editedWorkspace,
  newMember,
  handleNewMemberInput,
  handleAdd,
  isClick,
  setIsClick,
}) => {
  console.log(newMember);
  return (
    <div>
      <Modal.Dialog className="modal-member">
        <Modal.Header
          closeButton
          onClick={() => {
            setIsClick(!isClick);
          }}
          style={{ marginBottom: "24px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div className="workspace-logo">
              {editedWorkspace.name.slice(0, 2).toUpperCase()}
            </div>

            <div>Add new member to workspace</div>
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
                  id="memberName"
                  name="memberName"
                  type="text"
                  value={newMember.memberName}
                  onChange={handleNewMemberInput}
                  required
                  style={{ width: "16vw " }}
                ></input>
                <label className="label" for="memberName">
                  Member's name
                </label>
              </form>
            </div>
            <div className="input-group">
              <form>
                <input
                  className="input"
                  id="memberEmail"
                  type="memberEmail"
                  name="memberEmail"
                  value={newMember.memberEmail}
                  onChange={handleNewMemberInput}
                  required
                  style={{ width: "16vw " }}
                ></input>
                <label className="label" for="memberEmail">
                  Member's email
                </label>
              </form>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            className="create-ticket-button"
            onClick={() => {
              handleAdd();
              setIsClick(!isClick);
            }}
          >
            Add member
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default WorkspaceModal;

{/* <Form style={{ marginBottom: "24px" }}>
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
</Form>; */}
