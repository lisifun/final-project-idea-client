import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Button from "react-bootstrap/Button";
import DropdownTicketOptions from "./DropdownTicketOptions";

const TicketDetails = ({
  selectedTicket,
  editedTicket,
  setEditedTicket,
  onChange,
  onDelete,
}) => {
  const { user } = useContext(AuthContext);

  const handleTextInput = (e) => {
    setEditedTicket((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    onChange(editedTicket);
  }, [editedTicket]);

  return (
    <div style={{ display: "flex" }}>
      {editedTicket && (
        <div
          className="ticket-details"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "24px",
            padding: "24px",
            borderRight: "0.5px solid #3b3c48",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "50vw",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <input
                type="text"
                name="title"
                value={editedTicket.title}
                onChange={handleTextInput}
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  padding: "6px 14px",
                  backgroundColor: "transparent",
                  border: "transparent",
                  color: "white",
                  transition: "none",
                  outline: "none",
                }}
                required
              />
              {selectedTicket.description && (
                <input
                  type="text"
                  name="description"
                  value={editedTicket.description}
                  onChange={handleTextInput}
                  required
                  style={{
                    padding: "6px 14px",
                    backgroundColor: "transparent",
                    border: "transparent",
                    color: "white",
                    transition: "none",
                    outline: "none",
                  }}
                />
              )}
              {!selectedTicket.description && (
                <input
                  type="text"
                  name="description"
                  placeholder="Add description..."
                  value={editedTicket.description}
                  onChange={handleTextInput}
                  required
                  style={{
                    padding: "6px 14px",
                    backgroundColor: "transparent",
                    border: "transparent",
                    color: "white",
                    transition: "none",
                    outline: "none",
                  }}
                />
              )}
            </form>

            <DropdownTicketOptions
              selectedTicket={selectedTicket}
              onDelete={onDelete}
            />
          </div>

          <hr></hr>

          <div style={{ padding: "6px 14px" }}>
            <div>Activity</div>
            {user && (
              <div>
                <div
                  style={{ display: "flex", gap: "20px", marginTop: "24px" }}
                >
                  <img
                    src={user.photo}
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50px",
                    }}
                  />
                  <div>{user.username}</div>
                </div>
                <br></br>
                <div style={{ display: "flex", gap: "20px" }}>
                  <img
                    src={user.photo}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50px",
                    }}
                  />
                  <div
                    style={{
                      borderRadius: "16px",
                      border: "1px solid #3b3c48",
                      display: "flex",
                      flexDirection: "column",
                      padding: "12px",
                    }}
                  >
                    <textarea
                      id="comment"
                      name="comment"
                      rows="4"
                      placeholder="Leave a comment..."
                      style={{
                        width: "45vw",
                        backgroundColor: "transparent",
                        border: "none",
                        transition: "none",
                        outline: "none",
                        padding: "6px 14px",
                        color: "white",
                        resize: "none",
                      }}
                    ></textarea>
                    <Button
                      variant="primary"
                      className="comment-button"
                      //   onClick={updatedUserInfo}
                      style={{ alignSelf: "flex-end" }}
                    >
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketDetails;
