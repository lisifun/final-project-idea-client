import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const WorkspacePage = () => {
  const [newWorkspace, setNewWorkspace] = useState({
    name: "",
    workspaceURL: "",
  });

  const navigate = useNavigate();

  const handleTextInput = (e) => {
    setNewWorkspace((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {};

  return (
    <div className="workspace-page">
      <h1>Create a new workspace</h1>

      <Form onSubmit={handleSubmit} className="form-workspace">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>
            Workspace Name<sup>*</sup>
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            // value={workspace.name}
            onChange={handleTextInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicURL">
          <Form.Label>
            Workspace URL<sup>*</sup>
          </Form.Label>
          <Form.Control
            name="workspaceURL"
            type="text"
            // value={workspace.password}
            onChange={handleTextInput}
          />
        </Form.Group>
      </Form>
      <button type="submit" onClick={handleSubmit}>
        Create workspace
      </button>
    </div>
  );
};

export default WorkspacePage;
