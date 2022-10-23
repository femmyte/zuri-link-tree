import React from "react";

const LinkCard = ({ title, text }) => {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <p className="text">{text}</p>
    </div>
  );
};

export default LinkCard;
