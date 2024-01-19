import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";

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
    const now = new Date();
    const timeDifference = now - new Date(time);
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    console.log("//////////");
    console.log("time created the comment => ", time);
    console.log("current time => ", now);
    console.log("difference => ", timeDifference);
    console.log("seconds => ", seconds);
    console.log("minutes => ", minutes);
    console.log("hours => ", hours);
    console.log("days => ", days);
    console.log("//////////");

    let timePosted;

    if (days > 0) {
      timePosted = days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours > 0) {
      timePosted = hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
      timePosted = minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
      timePosted = "Just now";
    }

    return timePosted;
  }

  const { user } = useContext(AuthContext);

  const [newComment, setNewComment] = useState({
    comment: "",
    createdAt: new Date(),
    createdBy: {
      username: user.username,
      photo: user.photo,
    },
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
      createdBy: {
        username: user.username,
        photo: user.photo,
      },
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
                  style={{
                    overflowWrap: "break-word", // This property is used for word wrapping in single-line elements
                    whiteSpace: "normal", // Resetting the white-space property
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

                {editedTicket.comments && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    {editedTicket.comments.map((comment) => {
                      console.log("inside of the map");
                      console.log(comment);
                      console.log(legibleTime(comment.createdAt));
                      console.log("at the end of the map");
                      return (
                        <div className="photo-comment">
                          <img
                            src={comment.createdBy.photo}
                            className="user-photo"
                          />
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
                              <div>{comment.createdBy.username}</div>
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
