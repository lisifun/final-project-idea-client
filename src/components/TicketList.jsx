import React, { useEffect, useState } from "react";

import TicketCard from "./TicketCard";
import WelcomeModal from "./WelcomeModal";

const TicketList = ({ filteredTickets, currentWorkspace, setShowModal }) => {
  const doneTickets = filteredTickets.filter((ticket) => {
    return ticket.status === "done";
  });

  const doneIcon = (
    <svg
      width="14"
      height="14"
      fill="none"
      className="sc-fWQKxP fBFytk color-override"
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#5e6ad2"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        className="progress"
        cx="7"
        cy="7"
        r="3"
        fill="none"
        stroke="#5e6ad2"
        rotate="20"
        strokeWidth="6"
        strokeDasharray="18.84955592153876 100"
        transform="rotate(-90 7 7)"
      ></circle>
      <path
        className="icon"
        stroke="none"
        d="M10.951 4.24896C11.283 4.58091 11.283 5.11909 10.951 5.45104L5.95104 10.451C5.61909 10.783 5.0809 10.783 4.74896 10.451L2.74896 8.45104C2.41701 8.11909 2.41701 7.5809 2.74896 7.24896C3.0809 6.91701 3.61909 6.91701 3.95104 7.24896L5.35 8.64792L9.74896 4.24896C10.0809 3.91701 10.6191 3.91701 10.951 4.24896Z"
      ></path>
    </svg>
  );

  const inReviewTickets = filteredTickets.filter((ticket) => {
    return ticket.status === "in-review";
  });

  const reviewIcon = (
    <svg width="14" height="14" fill="none" className="sc-fWQKxP fBFytk">
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#28a745"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        className="progress"
        cx="7"
        cy="7"
        r="2"
        fill="none"
        stroke="#28a745"
        rotate="20"
        strokeWidth="4"
        strokeDasharray="9.42477796076938 100"
        transform="rotate(-90 7 7)"
      ></circle>
    </svg>
  );

  const inProgressTickets = filteredTickets.filter((ticket) => {
    return ticket.status === "in-progress";
  });

  const progressIcon = (
    <svg width="14" height="14" fill="none" className="sc-fWQKxP fBFytk">
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#F2C94C"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        className="progress"
        cx="7"
        cy="7"
        r="2"
        fill="none"
        stroke="#F2C94C"
        rotate="20"
        strokeWidth="4"
        strokeDasharray="6.283185307179586 100"
        transform="rotate(-90 7 7)"
      ></circle>
    </svg>
  );

  const todoTickets = filteredTickets.filter((ticket) => {
    return ticket.status === "todo";
  });

  const todoIcon = (
    <svg
      width="14"
      height="14"
      fill="none"
      className="sc-fWQKxP fBFytk color-override"
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#e2e2e2"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        className="progress"
        cx="7"
        cy="7"
        r="2"
        fill="none"
        stroke="#e2e2e2"
        rotate="20"
        strokeWidth="4"
        strokeDasharray="0 100"
        transform="rotate(-90 7 7)"
      ></circle>
    </svg>
  );

  return (
    <div className="ticket-list">
      {doneTickets.length > 0 && (
        <>
          <div className="ticket-status">
            <div>{doneIcon}</div>
            <div className="property-status">Done</div>
            <div className="count-tickets">{doneTickets.length}</div>
          </div>
          {doneTickets.map((ticket, index) => {
            return (
              <TicketCard
                ticket={ticket}
                key={index}
                iconStatus={doneIcon}
                currentWorkspace={currentWorkspace}
              />
            );
          })}
        </>
      )}

      {inReviewTickets.length > 0 && (
        <>
          <div className="ticket-status">
            <div>{reviewIcon}</div>
            <div className="property-status">In review</div>
            <div className="count-tickets">{inReviewTickets.length}</div>
          </div>
          {inReviewTickets.map((ticket, index) => {
            return (
              <TicketCard
                ticket={ticket}
                key={index}
                iconStatus={reviewIcon}
                currentWorkspace={currentWorkspace}
              />
            );
          })}
        </>
      )}

      {inProgressTickets.length > 0 && (
        <>
          <div className="ticket-status">
            <div>{progressIcon}</div>
            <div className="property-status">In progress</div>
            <div className="count-tickets">{inProgressTickets.length}</div>
          </div>
          {inProgressTickets.map((ticket, index) => {
            return (
              <TicketCard
                ticket={ticket}
                key={index}
                iconStatus={progressIcon}
                currentWorkspace={currentWorkspace}
              />
            );
          })}
        </>
      )}

      {todoTickets.length > 0 && (
        <>
          <div className="ticket-status">
            <div>{todoIcon}</div>
            <div className="property-status">Todo</div>
            <div className="count-tickets">{todoTickets.length}</div>
          </div>
          {todoTickets.map((ticket, index) => {
            return (
              <TicketCard
                ticket={ticket}
                key={index}
                iconStatus={todoIcon}
                currentWorkspace={currentWorkspace}
              />
            );
          })}
        </>
      )}

      {/* {doneTickets.length === 0 &&
        inReviewTickets.length === 0 &&
        inProgressTickets.length === 0 &&
        todoTickets.length === 0 && (
          <>
            <WelcomeModal setShowModal={setShowModal} />
          </>
        )} */}
    </div>
  );
};

export default TicketList;
