import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import TicketList from "../components/TicketList";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";
import DashboardFilter from "../components/DashboardFilter";
import { useParams } from "react-router-dom";

const DashboardPage = () => {
  const { workspaceId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [currentWorkspace, setCurrentWorkspace] = useState([]);
  const [allWorkspaces, setAllWorkspaces] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

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
      .get(`${SERVER_URL}/workspaces/${workspaceId}`)
      .then((response) => {
        setCurrentWorkspace(response.data);
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
          <Sidebar
            setFilteredTickets={setFilteredTickets}
            allTickets={allTickets}
            setAllTickets={setAllTickets}
            allWorkspaces={allWorkspaces}
            currentWorkspace={currentWorkspace}
            showModal={showModal}
            setShowModal={setShowModal}
          />

          <TicketList
            allTickets={allTickets}
            filteredTickets={filteredTickets}
            currentWorkspace={currentWorkspace}
            setShowModal={setShowModal}
          />

          <DashboardFilter
            workspaceId={workspaceId}
            allTickets={allTickets}
            setFilteredTickets={setFilteredTickets}
            currentWorkspace={currentWorkspace}
          />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
