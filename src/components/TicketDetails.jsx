import React, { useEffect, useContext, useState } from "react";
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
  // Function to set the time
  function legibleTime(time) {
    var now = new Date();
    var timeTest = now - time;
    var seconds = Math.floor(timeTest / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    var timePosted;
    if (days > 0) {
      if (days === 1) {
        timePosted = "1 day ago";
      } else {
        timePosted = `${days} days ago`;
      }
    } else if (hours > 0) {
      if (hours === 1) {
        timePosted = "1 hour ago";
      } else {
        timePosted = `${hours} hours ago`;
      }
    } else if (minutes > 0) {
      if (minutes === 1) {
        timePosted = "1 minute ago";
      } else {
        timePosted = `${minutes} minutes ago`;
      }
    } else {
      timePosted = "Just now";
    }
    return timePosted;
  }

  const { user } = useContext(AuthContext);
  const [newComment, setNewComment] = useState({
    comment: "",
    createdAt: new Date(),
  });

  const handleTextInput = (e) => {
    setEditedTicket((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCommentInput = (e) => {
    setNewComment((prev) => ({ ...prev, comment: e.target.value }));
  };

  const handleCommentButtonClick = () => {
    setEditedTicket((prev) => ({
      ...prev,
      comments: [...prev.comments, { ...newComment }],
    }));
    setNewComment({
      comment: "",
      createdAt: new Date(),
    });
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

                {editedTicket.comments.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    {editedTicket.comments.map((comment) => {
                      return (
                        <div className="photo-comment">
                          <img src={user.photo} className="user-photo" />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: "46vw",
                              borderRadius: "16px",
                              border: "0.5px solid rgb(44, 46, 60)",
                              gap: "12px",
                              padding: "16px",
                              backgroundColor: "rgb(32, 33, 46)",
                            }}
                          >
                            <div style={{ display: "flex", gap: "24px" }}>
                              <div>{user.username}</div>
                              <div style={{ color: "rgb(156, 158, 172)" }}>
                                {legibleTime(comment.createdAt)}
                              </div>
                            </div>
                            <div>{comment.comment}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <br></br>
                <div className="photo-comment">
                  <img className="user-photo" src={user.photo} />
                  <div className="comment-and-button">
                    <textarea
                      id="comments"
                      name="comments"
                      value={newComment.comment}
                      onChange={handleCommentInput}
                      rows="2"
                      placeholder="Leave a comment..."
                    ></textarea>
                    <Button
                      variant="primary"
                      className="comment-button"
                      style={{ alignSelf: "flex-end", margin: "10px" }}
                      onClick={() => {
                        handleCommentButtonClick();
                      }}
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
