import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../services/SERVER_URL";

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
    }
  }, [allWorkspaces]);

  return (
    <div className="workspace-page">
      <h1>Create a new workspace</h1>

      <div className="form-workspace">
        <div className="input-group">
          <form>
            <input
              className="input"
              id="name"
              type="text"
              name="name"
              value={newWorkspace.name}
              onChange={handleTextInput}
              required
            ></input>
            <label className="label" for="name">
              Workspace Name
            </label>
          </form>
        </div>
        <div className="input-group">
          <form>
            <input
              className="input"
              id="workspaceURL"
              name="workspaceURL"
              type="text"
              value={newWorkspace.password}
              onChange={handleTextInput}
              required
            ></input>
            <label className="label" for="workspaceURL">
              Workspace URL
            </label>
          </form>
        </div>
      </div>

      <Button
        className="workspace-button"
        type="submit"
        onClick={() => {
          handleSubmit();
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
