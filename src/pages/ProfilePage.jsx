import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editedUser, setEditedUser] = useState(user);

  const handleTextInput = (e) => {
    setEditedUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updatedUserInfo = () => {
    // setUser(editedUser);
    // axios.put(`${SERVER_URL}/`);
  };

  return (
    <>
      {user && (
        <div className="profile-page">
          <h1>Profile</h1>
          <p>Manage your TicketFlow profile</p>
          <hr></hr>
          <div className="profile-info">
            <div className="profile-photo">
              <b>Profile picture</b>
              <img src={user.photo} />
            </div>
            <div className="profile-email">
              <b>Email</b>
              <p>{editedUser.email}</p>
            </div>

            <Form.Group className="mb-3" style={{ width: "50vw" }}>
              <Form.Label>
                <b>Full name</b>
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
                <b>Username</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={editedUser.username}
                onChange={handleTextInput}
                required
              />
            </Form.Group>

            {/* <div className="profile-fullname">
              <b>Full Name</b>
              <p>{user.fullName}</p>
            </div> */}

            {/* <div className="profile-username">
              <b>Username</b>
              <p>{user.username}</p>
            </div> */}
          </div>

          <Button
            variant="primary"
            className="update-button"
            onClick={updatedUserInfo}
          >
            Update
          </Button>
        </div>
      )}
    </>
  );
};

export default Profile;
