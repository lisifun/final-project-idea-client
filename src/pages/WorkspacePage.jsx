import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";

import Button from "react-bootstrap/Button";
import { AuthContext } from "../context/auth.context";

const WorkspacePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [allWorkspaces, setAllWorkspaces] = useState([]);
  const [newWorkspace, setNewWorkspace] = useState({
    name: "",
    workspaceURL: "",
    createdBy: "",
    members: [],
  });

  useEffect(() => {
    if (user) {
      setNewWorkspace((prev) => ({
        ...prev,
        createdBy: user._id,
      }));
      setNewWorkspace((prev) => ({
        ...prev,
        members: [{ memberName: user.fullName, memberEmail: user.email }],
      }));
    }
  }, [user]);

  // useEffect(() => {
  //   axios
  //     .get(`${SERVER_URL}/workspaces`)
  //     .then((response) => {
  //       setAllWorkspaces(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const addNewWorkspace = async () => {
    try {
      const response = await axios.post(
        `${SERVER_URL}/workspaces`,
        newWorkspace,
        { new: true }
      );

      const newWorkspaceId = response.data._id;
      console.log("response.data => ", response.data);

      setAllWorkspaces([response.data]);
      navigate(`/dashboard/${newWorkspaceId}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTextInput = (e) => {
    setNewWorkspace((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log("user => ", user);
  console.log("new workspace => ", newWorkspace);

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
            <label className="label" htmlFor="name">
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
            <label className="label" htmlFor="workspaceURL">
              Workspace URL
            </label>
          </form>
        </div>
      </div>

      <Button
        className="workspace-button"
        variant="primary"
        type="submit"
        onClick={addNewWorkspace}
      >
        Create workspace
      </Button>
    </div>
  );
};

export default WorkspacePage;
