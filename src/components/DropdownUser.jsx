import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownUser = ({ user, logOutUser }) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle id="user">
          {user && (
            <img
              src={user.photo}
              style={{
                width: "25px",
                height: "25px",
                borderRadius: "50px",
              }}
            />
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-user">
          <Dropdown.Item
            as={Link}
            to="/profile"
            style={{ color: "rgb(238, 239, 252)" }}
          >
            View profile
          </Dropdown.Item>

          <Dropdown.Item
            as={Link}
            to="/"
            onClick={logOutUser}
            style={{ color: "rgb(238, 239, 252)" }}
          >
            Log out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownUser;
