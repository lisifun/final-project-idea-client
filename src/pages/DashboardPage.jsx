import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Sidebar from "../components/Sidebar";
import TicketList from "../components/TicketList";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";
import DashboardFilter from "../components/DashboardFilter";
import { useParams } from "react-router-dom";

const DashboardPage = () => {
  const { workspaceId } = useParams();

  const { user, logOutUser } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [currentWorkspace, setCurrentWorkspace] = useState([]);
  const [allWorkspaces, setAllWorkspaces] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/workspaces`)
      .then((response) => {
        setAllWorkspaces(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${SERVER_URL}/workspaces/${workspaceId}`)
      .then((response) => {
        setCurrentWorkspace(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${SERVER_URL}/tickets/${workspaceId}`)
      .then((response) => {
        setAllTickets(response.data);
        setFilteredTickets(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addNewTicket = (newTicket) => {
    axios
      .post(`${SERVER_URL}/tickets/${workspaceId}`, newTicket)
      .then((response) => {
        console.log("line 58 => ", response.data);
        console.log("59 => ", response.data.tickets[0]);
        setAllTickets(response.data.tickets);
        setFilteredTickets(response.data.tickets);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="dashboard-page">
      {!isLoading && (
        <>
          <Sidebar
            setFilteredTickets={setFilteredTickets}
            allTickets={allTickets}
            setAllTickets={setAllTickets}
            allWorkspaces={allWorkspaces}
            currentWorkspace={currentWorkspace}
            showModal={showModal}
            setShowModal={setShowModal}
            user={user}
            logOutUser={logOutUser}
            addNewTicket={addNewTicket}
          />

          <TicketList
            allTickets={allTickets}
            filteredTickets={filteredTickets}
            currentWorkspace={currentWorkspace}
            setShowModal={setShowModal}
            user={user}
          />

          <DashboardFilter
            workspaceId={workspaceId}
            allTickets={allTickets}
            setFilteredTickets={setFilteredTickets}
            currentWorkspace={currentWorkspace}
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
