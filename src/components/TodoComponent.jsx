import React, { Component } from "react";

const TodoComponent = ({ todo }) => {
  // Each Todo

  return <li>{todo.text}</li>;
};

export default TodoComponent;
