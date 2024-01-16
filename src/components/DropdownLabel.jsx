import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownLabel = ({ handleLabelSelect, defaultValue }) => {
  return (
    <div>
      <Dropdown onSelect={handleLabelSelect}>
        <Dropdown.Toggle
          id="label"
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <i className="fas fa-tag"></i>
          <div>Label</div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="menu-label">
          <Dropdown.Item eventKey="bug" className="label-option">
            <div>
              <i
                className="fas fa-circle"
                style={{ color: "red", fontSize: "9px" }}
              ></i>
            </div>
            <div>Bug</div>
            {defaultValue === "bug" && (
              <div>
                <i className="fas fa-check"></i>
              </div>
            )}
          </Dropdown.Item>
          <Dropdown.Item eventKey="feature" className="label-option">
            <div>
              <i
                className="fas fa-circle"
                style={{ color: "rgb(187, 135, 252)", fontSize: "9px" }}
              ></i>
            </div>

            <div>Feature</div>
            {defaultValue === "feature" && (
              <div>
                <i className="fas fa-check"></i>
              </div>
            )}
          </Dropdown.Item>
          <Dropdown.Item eventKey="improvement" className="label-option">
            <div>
              <i
                className="fas fa-circle"
                style={{ color: "blue", fontSize: "9px" }}
              ></i>
            </div>
            <div>Improvement</div>
            {defaultValue === "improvement" && (
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

export default DropdownLabel;
