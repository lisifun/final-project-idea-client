import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import WorkspaceModal from "../components/WorkspaceModal";

const WorkspaceDetailsPage = () => {
  const { workspaceId } = useParams();
  const [editedWorkspace, setEditedWorkspace] = useState();
  const [newMember, setNewMember] = useState({
    memberName: "",
    memberEmail: "",
  });
  const [allWorkspaces, setAllWorkspaces] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/workspaces`)
      .then((response) => {
        setAllWorkspaces(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/workspaces/${workspaceId}`)
      .then((response) => {
        setEditedWorkspace(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setEditedWorkspace((prev) => ({
      ...prev,
      members: [],
    }));
  }, []);

  const handleTextInput = (e) => {
    setEditedWorkspace((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNewMemberInput = (e) => {
    setNewMember((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = () => {
    axios
      .put(`${SERVER_URL}/workspaces/${workspaceId}`, editedWorkspace)
      .then((response) => {
        const udpdatedWorkspaces = allWorkspaces.map((workspace) => {
          return workspace._id === editedWorkspace._id
            ? response.data
            : workspace;
        });

        setAllWorkspaces(udpdatedWorkspaces);
      });
  };

  const handleAdd = () => {
    setEditedWorkspace((prev) => ({
      ...prev,
      members: [...prev.members, newMember],
    }));
    setNewMember({ memberName: "", memberEmail: "" });
  };

  useEffect(() => {
    handleUpdate();
  }, [editedWorkspace]);

  console.log(editedWorkspace);
  console.log(newMember);
  return (
    <>
      {editedWorkspace && (
        <div className="workspace-details-page">
          <h2 className="workspace-heading">Workspace</h2>
          <div className="workspace-orientation">
            Manage your workspace settings
          </div>

          <div className="horizontal-line"></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
              gap: "16px",
            }}
          >
            <h4>General</h4>

            <Form.Group className="mb-3">
              <Form.Label>
                <div>Workspace name</div>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editedWorkspace.name}
                onChange={handleTextInput}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <div>Workspace URL</div>
              </Form.Label>
              <Form.Control
                type="text"
                name="workspaceURL"
                value={editedWorkspace.workspaceURL}
                onChange={handleTextInput}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              className="update-button"
              onClick={() => {
                handleUpdate();
              }}
            >
              Update
            </Button>
          </div>

          <div className="horizontal-line"></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
              gap: "16px",
            }}
          >
            <h4>Members</h4>

            <div>Workspace members</div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "400px",
                padding: "20px",
              }}
            >
              {editedWorkspace.members.length > 0 && (
                <div>
                  {editedWorkspace.members.map((member, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div>{member.memberName}</div>
                        <div style={{ color: "rgb(133, 134, 153)" }}>
                          {member.memberEmail}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              <Button
                variant="primary"
                className="update-button"
                onClick={() => {
                  setIsClick(!isClick);
                }}
              >
                Add member
              </Button>
            </div>
          </div>
        </div>
      )}

      {isClick && (
        <WorkspaceModal
          editedWorkspace={editedWorkspace}
          newMember={newMember}
          handleNewMemberInput={handleNewMemberInput}
          handleAdd={handleAdd}
          isClick={isClick}
          setIsClick={setIsClick}
        />
      )}
    </>
  );
};

export default WorkspaceDetailsPage;
