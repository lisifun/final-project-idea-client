import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editedUser, setEditedUser] = useState(user);

  const navigate = useNavigate();

  const handleTextInput = (e) => {
    setEditedUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updatedUserInfo = () => {
    axios
      .put(`${SERVER_URL}/users/${user._id}`, editedUser)
      .then((response) => {
        console.log(response.data);
        const updatedUser = response.data;
        console.log(updatedUser);

        setUser(updatedUser);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log("line 37 => ", editedUser);
  return (
    <>
      {user && (
        <div className="profile-details-page">
          <h2>Profile</h2>
          <div>Manage your TicketFlow profile</div>

          <div className="horizontal-line"></div>

          <div className="profile-info">
            <div className="profile-photo">
              <div>Profile picture</div>
              <img src={user.photo} />
            </div>
            <div className="profile-email">
              <div>Email</div>
              <div>{editedUser.email}</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
              gap: "16px",
            }}
          >
            <Form.Group className="mb-3" style={{ width: "50vw" }}>
              <Form.Label>
                <div>Full name</div>
              </Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={editedUser.fullName}
                onChange={handleTextInput}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "50vw" }}>
              <Form.Label>
                <div>Username</div>
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={editedUser.username}
                onChange={handleTextInput}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              className="update-button"
              onClick={() => {
                updatedUserInfo();
              }}
            >
              Update
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
