import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Sidebar from "../components/Sidebar";
import TicketList from "../components/TicketList";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";
import DashboardFilter from "../components/DashboardFilter";
import { useParams } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  const [allWorkspaces, setAllWorkspaces] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const { workspaceId } = useParams();

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
      .get(`${SERVER_URL}/tickets/${workspaceId}`)
      .then((response) => {
        setAllTickets(response.data);
        setFilteredTickets(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="dashboard-page">
      {allWorkspaces.length > 0 && (
        <div style={{ display: "flex" }}>
          <Sidebar workspaceId={workspaceId} />

          <TicketList filteredTickets={filteredTickets} />

          <DashboardFilter
            workspaceId={workspaceId}
            allWorkspaces={allWorkspaces}
            allTickets={allTickets}
            filteredTickets={filteredTickets}
            setFilteredTickets={setFilteredTickets}
          />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
