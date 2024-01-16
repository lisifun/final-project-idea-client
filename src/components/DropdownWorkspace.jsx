import React from "react";
import { Link, useParams } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownWorkspace = ({ allWorkspaces, user }) => {
  const { workspaceId } = useParams();

  console.log("line 9 => ", workspaceId);
  return (
    <div>
      {workspaceId && (
        <Dropdown>
          <Dropdown.Toggle id="workspace">
            <div className="workspace-logo">
              {allWorkspaces[0].name.slice(0, 2).toUpperCase()}
            </div>
            <div>{allWorkspaces[0].name}</div>
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-workspace">
            {user && <div className="workspace-user">{user.email}</div>}

            {allWorkspaces &&
              allWorkspaces.map((workspace, index) => {
                return (
                  <Link className="link" key={index}>
                    <div>{workspace.name}</div>
                  </Link>
                );
              })}

            <Dropdown.Item
              style={{ color: "rgb(238, 239, 252)" }}
            ></Dropdown.Item>

            <Dropdown.Item
              as={Link}
              to={`/dashboard/${workspaceId}/details`}
              style={{ color: "rgb(238, 239, 252)" }}
            >
              Workspace settings
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to="/workspace"
              style={{ color: "rgb(238, 239, 252)" }}
            >
              Create workspace
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
};

export default DropdownWorkspace;
