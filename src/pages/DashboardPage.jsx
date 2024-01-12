import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { TicketContext } from "../context/ticket.context";
import Sidebar from "../components/Sidebar";



const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  console.log("The user => ", user);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      {/* <img src={user.photo} style={{ width: "50px", height: "50px" }} />

      <div>{user.username}</div>
      <div>{user.email}</div> */}
    </div>
  );
};

export default DashboardPage;

{
  /* <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            type="text"
            value={newUser.username}
            onChange={handleTextInput}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={newUser.email}
            onChange={handleTextInput}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={newUser.password}
            onChange={handleTextInput}
          />
        </label>

        <button type="submit">Signup</button>
      </form> */
}
