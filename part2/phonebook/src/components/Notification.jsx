import React from "react";
// import './notification.css'

const Notification = ({ message }) => {
    const green = { padding: "0.5rem",
    borderTop: "2px solid lightgreen",
    borderBottom: "2px solid lightgreen",
    color: "green",   
    marginBottom : '1rem'}

    const red = { padding: "0.5rem",
    borderTop: "2px solid red",
    borderBottom: "2px solid red",
    color: "red",
    marginBottom : '1rem'}
  if (!message) return null;
  return (
    <div style={ message.includes('server') ? red : green }>
      {message}
    </div>
  );
};

export default Notification;
