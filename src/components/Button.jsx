import React from "react";

const Button = ({ link, id, children }) => {
  return (
    <a href={link} id={id}>
      {children}
    </a>
  );
};

export default Button;
