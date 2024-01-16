import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownStatus = ({ handleStatusSelect, defaultValue }) => {
  return (
    <div>
      <Dropdown onSelect={handleStatusSelect}>
        <Dropdown.Toggle
          id="status"
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
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
              stroke="#bec2c8"
              strokeWidth="2"
              strokeDasharray="1.4 1.74"
              strokeDashoffset="0.65"
            ></circle>
            <circle
              className="progress"
              cx="7"
              cy="7"
              r="2"
              fill="none"
              stroke="#bec2c8"
              rotate="20"
              strokeWidth="4"
              strokeDasharray="0 100"
              transform="rotate(-90 7 7)"
            ></circle>
          </svg>
          <div>Status</div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="menu-status">
          <Dropdown.Item eventKey="todo" className="status-option">
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

            <div>Todo</div>
            {defaultValue === "todo" && (
              <div>
                <i className="fas fa-check"></i>
              </div>
            )}
          </Dropdown.Item>
          <Dropdown.Item eventKey="in-progress" className="status-option">
            <svg
              width="14"
              height="14"
              fill="none"
              className="sc-fWQKxP fBFytk"
            >
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

            <div>In-Progress</div>
            {defaultValue === "in-progress" && (
              <div>
                <i className="fas fa-check"></i>
              </div>
            )}
          </Dropdown.Item>
          <Dropdown.Item eventKey="in-review" className="status-option">
            <svg
              width="14"
              height="14"
              fill="none"
              className="sc-fWQKxP fBFytk"
            >
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

            <div>In-Review</div>
            {defaultValue === "in-review" && (
              <div>
                <i className="fas fa-check"></i>
              </div>
            )}
          </Dropdown.Item>
          <Dropdown.Item eventKey="done" className="status-option">
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

            <div>Done</div>
            {defaultValue === "done" && (
              <div>
                <i className="fas fa-check"></i>
              </div>
            )}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownStatus;
