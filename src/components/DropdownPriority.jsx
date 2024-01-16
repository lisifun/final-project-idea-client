import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownPriority = ({ handlePrioritySelect, defaultValue }) => {
  return (
    <div>
      <Dropdown onSelect={handlePrioritySelect}>
        <Dropdown.Toggle
          id="priority"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <i className="fas fa-exclamation-triangle"></i>
          <div>Priority</div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="menu-priority">
          <Dropdown.Item eventKey="no-priority" className="priority-option">
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
            {defaultValue === "no-priority" && (
              <div>
                <i className="fas fa-check"></i>
              </div>
            )}
          </Dropdown.Item>
          <Dropdown.Item eventKey="urgent" className="priority-option">
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
            {defaultValue === "urgent" && (
              <div>
                <i className="fas fa-check"></i>
              </div>
            )}
          </Dropdown.Item>
          <Dropdown.Item eventKey="high" className="priority-option">
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
            {defaultValue === "high" && (
              <div>
                <i className="fas fa-check"></i>
              </div>
            )}
          </Dropdown.Item>
          <Dropdown.Item eventKey="medium" className="priority-option">
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
            {defaultValue === "medium" && (
              <div>
                <i className="fas fa-check"></i>
              </div>
            )}
          </Dropdown.Item>
          <Dropdown.Item eventKey="low" className="priority-option">
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
            {defaultValue === "low" && (
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

export default DropdownPriority;
