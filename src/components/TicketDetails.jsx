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
    <div>
      {editedTicket && (
        <div className="ticket-details">
          <div className="ticket-details-input">
            <form>
              <input
                className="input-title"
                type="text"
                name="title"
                value={editedTicket.title}
                onChange={handleTextInput}
                required
              />
              {selectedTicket.description && (
                <input
                  className="input-description"
                  type="text"
                  name="description"
                  value={editedTicket.description}
                  onChange={handleTextInput}
                  required
                />
              )}
              {!selectedTicket.description && (
                <input
                  className="input-description"
                  type="text"
                  name="description"
                  placeholder="Add description..."
                  value={editedTicket.description}
                  onChange={handleTextInput}
                  required
                />
              )}
            </form>

            <DropdownTicketOptions
              selectedTicket={selectedTicket}
              onDelete={onDelete}
            />
          </div>

          <hr></hr>
          <div style={{ borderRight: "0.5px solid #3b3c48" }}></div>

          <div className="activity-ticket">
            {user && (
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="activity-heading">Activity</div>
                  <img src={user.photo} className="user-photo" />
                </div>
                <div className="username-photo">
                  <img src={user.photo} className="user-photo" />
                  <div>{user.username}</div>
                </div>
                <br></br>
                <div className="photo-comment">
                  <img className="user-photo" src={user.photo} />
                  <div className="comment-and-button">
                    <textarea
                      id="comment"
                      name="comment"
                      rows="2"
                      placeholder="Leave a comment..."
                    ></textarea>
                    <Button
                      variant="primary"
                      className="comment-button"
                      style={{ alignSelf: "flex-end", margin: "10px" }}
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
