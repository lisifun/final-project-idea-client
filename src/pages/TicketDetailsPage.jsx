import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../services/SERVER_URL";

import Sidebar from "../components/Sidebar";
import TicketDetails from "../components/TicketDetails";
import MoreTicketDetails from "../components/MoreTicketDetails";

const TicketDetailsPage = () => {
  const workspaceId = useParams().workspaceId;
  const ticketId = useParams().ticketId;

  const [allTickets, setAllTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editedTicket, setEditedTicket] = useState(null);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  



  useEffect(() => {
    axios
      .get(`${SERVER_URL}/workspaces/${workspaceId}`)
      .then((response) => {
        setSelectedWorkspace(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/tickets/${workspaceId}/${ticketId}`)
      .then((response) => {
        setAllTickets(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/tickets/${workspaceId}/${ticketId}`)
      .then((response) => {
        setSelectedTicket(response.data);
        setEditedTicket(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteTicket = (ticketId) => {
    axios
      .delete(`${SERVER_URL}/tickets/${workspaceId}/${ticketId}`)
      .then((response) => {
        setAllTickets(
          allTickets.filter((ticket) => {
            return ticket._id !== ticketId;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTicket = (editedTicket) => {
    axios
      .put(`${SERVER_URL}/tickets/${workspaceId}/${ticketId}`, editedTicket)
      .then((response) => {
        const udpdatedTickets = allTickets.map((ticket) => {
          return ticket._id === editedTicket._id ? response.data : ticket;
        });

        setAllTickets(udpdatedTickets);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ticket-details-page">
      {selectedTicket && (
        <div className="details-page" style={{ display: "flex" }}>
          <Sidebar />
          <TicketDetails
            selectedTicket={selectedTicket}
            editedTicket={editedTicket}
            setEditedTicket={setEditedTicket}
            onChange={updateTicket}
            onDelete={deleteTicket}
          />
          <MoreTicketDetails
            selectedTicket={selectedTicket}
            editedTicket={editedTicket}
            setEditedTicket={setEditedTicket}
            onChange={updateTicket}
            selectedWorkspace={selectedWorkspace}
          />
        </div>
      )}
    </div>
  );
};

export default TicketDetailsPage;
