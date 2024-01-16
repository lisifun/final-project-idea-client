import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../services/SERVER_URL";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../context/auth.context";

const WorkspacePage = () => {
  const { user } = useContext(AuthContext);

  const [allWorkspaces, setAllWorkspaces] = useState([]);
  const [newWorkspace, setNewWorkspace] = useState({
    name: "",
    workspaceURL: "",
    createdBy: "",
  });
  const [createdWorkspaceId, setCreatedWorkspaceId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setNewWorkspace((prev) => ({ ...prev, createdBy: user._id }));
    }
  }, [user]);

  useEffect(() => {
    axios
      .get(SERVER_URL + "/workspaces")
      .then((response) => {
        setAllWorkspaces(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTextInput = (e) => {
    setNewWorkspace((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    axios
      .post(`${SERVER_URL}/workspaces`, newWorkspace)
      .then((response) => {
        setAllWorkspaces([response.data, ...allWorkspaces]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (allWorkspaces.length > 0) {
      setCreatedWorkspaceId(allWorkspaces[0]._id);
      // navigate(`/dashboard/${allWorkspaces[0]._id}`);
    }
  }, [allWorkspaces]);

  console.log("allWorkspaces so far => "          , allWorkspaces);
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

      <Button
        className="workspace-button"
        type="submit"
        onClick={() => {
          handleSubmit();
          // navigate(`/dashboard/${allWorkspaces[0]._id}`);
          navigate(`/dashboard/${createdWorkspaceId}`);
        }}
        variant="primary"
      >
        Create workspace
      </Button>
    </div>
  );
};

export default WorkspacePage;
