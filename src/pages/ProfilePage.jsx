import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Button from "react-bootstrap/Button";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
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
          <p>{user.email}</p>
        </div>

        <div className="profile-fullname">
          <b>Full Name</b>
          <p>{user.fullName}</p>
        </div>

        <div className="profile-username">
          <b>Username</b>
          <p>{user.username}</p>
        </div>
      </div>
      <button>Update</button>
    </div>
  );
};

export default Profile;
