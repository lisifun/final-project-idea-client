import React from "react";
import { Link, useParams } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownWorkspace = ({ currentWorkspace, user, allWorkspaces }) => {
  return (
    <div>
      {currentWorkspace && (
        <Dropdown>
          <Dropdown.Toggle id="workspace">
            {currentWorkspace.name && (
              <>
                <div className="workspace-logo">
                  {currentWorkspace.name.slice(0, 2).toUpperCase()}
                </div>
                <div>{currentWorkspace.name}</div>
              </>
            )}
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-workspace">
            {user && <div className="workspace-user">{user.email}</div>}

            {allWorkspaces &&
              allWorkspaces.map((workspace, index) => {
                return (
                  <Link
                    className="link"
                    key={index}
                    to={`/dashboard/${workspace._id}`}
                  >
                    <div>{workspace.name}</div>
                  </Link>
                );
              })}

            <Dropdown.Item
              style={{ color: "rgb(238, 239, 252)" }}
            ></Dropdown.Item>

            <Dropdown.Item
              as={Link}
              to={`/dashboard/${currentWorkspace._id}/details`}
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
