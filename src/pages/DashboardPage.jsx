import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Sidebar from "../components/Sidebar";
import TicketList from "../components/TicketList";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <TicketList />
    </div>
  );
};

export default DashboardPage;
