import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../services/SERVER_URL";

import Sidebar from "../components/Sidebar";
import TicketDetails from "../components/TicketDetails";
import MoreTicketDetails from "../components/MoreTicketDetails";

const TicketDetailsPage = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editedTicket, setEditedTicket] = useState(null);
  const { ticketId } = useParams();

  useEffect(() => {
    axios.get(SERVER_URL + "/tickets").then((response) => {
      setAllTickets(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/tickets/${ticketId}`)
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
      .delete(`${SERVER_URL}/tickets/${ticketId}`)
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
      .put(`${SERVER_URL}/tickets/${editedTicket._id}`, editedTicket)
      .then((response) => {
        const udpdatedTickets = allTickets.map((ticket) => {
          return ticket._id === editedTicket._id ? response.data : ticket;
        });
        console.log("udpdatedTickets so far => ", udpdatedTickets);
        setAllTickets(udpdatedTickets);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
     

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
          />
        </div>
      )}
    </>
  );
};

export default TicketDetailsPage;
