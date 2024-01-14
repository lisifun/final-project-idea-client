import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../services/SERVER_URL";
import TicketCard from "./TicketCard";

const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);

  useEffect(() => {
    axios.get(SERVER_URL + "/tickets").then((response) => {
      setAllTickets(response.data);
    });
  }, []);

  // const deleteTicket = (ticketId) => {
  //   axios
  //     .delete(`${SERVER_URL}/tickets/${ticketId}`)
  //     .then((response) => {
  //       setAllTickets(
  //         allTickets.filter((ticket) => {
  //           return ticket._id !== ticketId;
  //         })
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="ticket-list">
      {allTickets.map((ticket, index) => {
        return (
          <TicketCard key={index} ticket={ticket}  />
        );
      })}
    </div>
  );
};

export default TicketList;
