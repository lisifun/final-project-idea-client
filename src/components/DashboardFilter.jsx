import React, { useState } from "react";

import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Button from "react-bootstrap/Button";

const DashboardFilter = ({
  allTickets,
  setFilteredTickets,
  currentWorkspace,
}) => {
  const [statusClicking, setStatusClicking] = useState(false);
  const [labelClicking, setLabelClicking] = useState(false);
  const [priorityClicking, setPriorityClicking] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dashboard-filter">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#262733",
            border: "0.5px solid #3b3c48",
            width: "7vw",
          }}
        >
          Activate tickets
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {currentWorkspace.name && (
            <>
              <div className="workspace-logo">
                {currentWorkspace.name.slice(0, 2).toUpperCase()}
              </div>
              <div>{currentWorkspace.name}</div>
            </>
          )}
        </div>
      </div>
      <div style={{ borderBottom: "0.5px solid #3b3c48" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "20px",
        }}
      >
        <ToggleButtonGroup type="radio" name="filter-options" defaultValue={1}>
          <ToggleButton
            className="status-filter"
            id="tbg-radio-1"
            value={1}
            onClick={() => {
              // setStatusClicking(true);
              setLabelClicking(false);
              setPriorityClicking(false);
              setFilteredTickets(allTickets);
            }}
          >
            Status
          </ToggleButton>
          <ToggleButton
            className="label-filter"
            id="tbg-radio-2"
            value={2}
            onClick={() => {
              setLabelClicking(true);
              setPriorityClicking(false);
            }}
          >
            Labels
          </ToggleButton>
          <ToggleButton
            className="priority-filter"
            id="tbg-radio-3"
            value={3}
            onClick={() => {
              setLabelClicking(false);
              setPriorityClicking(true);
            }}
          >
            Priority
          </ToggleButton>
        </ToggleButtonGroup>

        {labelClicking && (
          <>
            <Button
              onClick={() => {
                setFilteredTickets(
                  allTickets.filter((ticket) => {
                    return ticket.label === "bug";
                  })
                );
              }}
              className="bug-button"
            >
              <i
                className="fas fa-circle"
                style={{ color: "red", fontSize: "9px" }}
              ></i>
              <div>Bug</div>
            </Button>

            <Button
              onClick={() => {
                setFilteredTickets(
                  allTickets.filter((ticket) => {
                    return ticket.label === "feature";
                  })
                );
              }}
              className="feature-button"
            >
              <i
                className="fas fa-circle"
                style={{ color: "rgb(187, 135, 252)", fontSize: "9px" }}
              ></i>
              <div>Feature</div>
            </Button>

            <Button
              onClick={() => {
                setFilteredTickets(
                  allTickets.filter((ticket) => {
                    return ticket.label === "improvement";
                  })
                );
              }}
              className="improvement-button"
            >
              <i
                className="fas fa-circle"
                style={{ color: "blue", fontSize: "9px" }}
              ></i>
              <div>Improvement</div>
            </Button>
          </>
        )}

        {priorityClicking && (
          <>
            <Button
              onClick={() => {
                setFilteredTickets(
                  allTickets.filter((ticket) => {
                    return ticket.priority === "no-priority";
                  })
                );
              }}
              className="no-priority-button"
            >
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
              <div>No Priority</div>
            </Button>

            <Button
              onClick={() => {
                setFilteredTickets(
                  allTickets.filter((ticket) => {
                    return ticket.priority === "urgent";
                  })
                );
              }}
              className="urgent-button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#fc7840"
                aria-label="Urgent Priority"
              >
                <path d="M3 1.346a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2H3Zm3.914 3h1.738L8.5 9.948H7.07l-.156-5.602Zm1.809 7.164a.95.95 0 0 1-.938.938.934.934 0 1 1 0-1.867c.5 0 .934.417.938.929Z"></path>
              </svg>
              <div>Urgent</div>
            </Button>

            <Button
              onClick={() => {
                setFilteredTickets(
                  allTickets.filter((ticket) => {
                    return ticket.priority === "high";
                  })
                );
              }}
              className="high-button"
            >
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
              <div>High</div>
            </Button>

            <Button
              onClick={() => {
                setFilteredTickets(
                  allTickets.filter((ticket) => {
                    return ticket.priority === "medium";
                  })
                );
              }}
              className="medium-button"
            >
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
              <div>Medium</div>
            </Button>

            <Button
              onClick={() => {
                setFilteredTickets(
                  allTickets.filter((ticket) => {
                    return ticket.priority === "low";
                  })
                );
              }}
              className="low-button"
            >
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
                <rect
                  x="6"
                  y="5"
                  width="3"
                  height="9"
                  rx="1"
                  fillOpacity="0.4"
                ></rect>
                <rect
                  x="11"
                  y="2"
                  width="3"
                  height="12"
                  rx="1"
                  fillOpacity="0.4"
                ></rect>
              </svg>{" "}
              <div>Low</div>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardFilter;
