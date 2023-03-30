import React from "react";

export const Title = ({ children }) => {
  return (
    <>
      <h1 className="title">Todo App</h1>
      {children}
    </>
  );
};
