import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  console.log("The user => ", user);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
    </div>
  );
};

export default DashboardPage;
