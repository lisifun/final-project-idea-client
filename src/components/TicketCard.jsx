import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SERVER_URL } from "../services/SERVER_URL";

const TicketCard = ({ ticket, iconStatus }) => {
  // const workspaceId = useParams();
  const { workspace, priority, title, label, _id, assignee } = ticket;
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  const priorityIcons = {
    "no-priority": (
      <svg
        aria-label="No Priority"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="rgb(238, 239, 252)"
        role="img"
        focusable="false"
      >
        <rect
          x="1"
          y="7.25"
          width="3"
          height="1.5"
          rx="0.5"
          opacity="0.9"
        ></rect>
        <rect
          x="6"
          y="7.25"
          width="3"
          height="1.5"
          rx="0.5"
          opacity="0.9"
        ></rect>
        <rect
          x="11"
          y="7.25"
          width="3"
          height="1.5"
          rx="0.5"
          opacity="0.9"
        ></rect>
      </svg>
    ),
    urgent: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="#fc7840"
        aria-label="Urgent Priority"
      >
        <path d="M3 1.346a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2H3Zm3.914 3h1.738L8.5 9.948H7.07l-.156-5.602Zm1.809 7.164a.95.95 0 0 1-.938.938.934.934 0 1 1 0-1.867c.5 0 .934.417.938.929Z"></path>
      </svg>
    ),
    high: (
      <svg
        aria-label="High Priority"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="rgb(238, 239, 252)"
        role="img"
        focusable="false"
      >
        <rect x="1" y="8" width="3" height="6" rx="1"></rect>
        <rect x="6" y="5" width="3" height="9" rx="1"></rect>
        <rect x="11" y="2" width="3" height="12" rx="1"></rect>
      </svg>
    ),
    medium: (
      <svg
        aria-label="Medium Priority"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="rgb(238, 239, 252)"
        role="img"
        focusable="false"
      >
        <rect x="1" y="8" width="3" height="6" rx="1"></rect>
        <rect x="6" y="5" width="3" height="9" rx="1"></rect>
        <rect
          x="11"
          y="2"
          width="3"
          height="12"
          rx="1"
          fillOpacity="0.4"
        ></rect>
      </svg>
    ),
    low: (
      <svg
        aria-label="Low Priority"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="rgb(238, 239, 252)"
        role="img"
        focusable="false"
      >
        <rect x="1" y="8" width="3" height="6" rx="1"></rect>
        <rect x="6" y="5" width="3" height="9" rx="1" fillOpacity="0.4"></rect>
        <rect
          x="11"
          y="2"
          width="3"
          height="12"
          rx="1"
          fillOpacity="0.4"
        ></rect>
      </svg>
    ),
  };

  const labelColors = {
    bug: "red",
    feature: "rgb(187, 135, 252)",
    improvement: "blue",
  };

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/workspaces/${workspace}`)
      .then((response) => {
        setSelectedWorkspace(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {ticket && (
        <Link
          to={`/dashboard/${workspace}/${_id}/details`}
          className="link ticket-card"
        >
          <div className="ticket-card-left">
            <div>{priorityIcons[priority]}</div>
            {selectedWorkspace && (
              <div>{selectedWorkspace.name.slice(0, 2).toUpperCase()}</div>
            )}
            <div>{iconStatus}</div>
            <div className="ticket-title">{title}</div>
          </div>

          <div className="ticket-card-right">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i
                className="fas fa-circle"
                style={{ color: labelColors[label], fontSize: "9px" }}
              ></i>
              <div>{label[0].toUpperCase() + label.slice(1)}</div>
            </div>
            {assignee && <div>{assignee}</div>}
          </div>
        </Link>
      )}
    </>
  );
};

export default TicketCard;
