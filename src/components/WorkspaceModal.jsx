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
  handleUpdate,
}) => {
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
                  style={{ width: "400px " }}
                ></input>
                <label className="label" htmlFor="memberName">
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
                  style={{ width: "400px " }}
                ></input>
                <label className="label" htmlFor="memberEmail">
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
              handleUpdate();
            }}
            style={{ marginRight: "28px" }}
          >
            Add member
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default WorkspaceModal;
