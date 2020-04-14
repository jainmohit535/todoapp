import React, { Component } from "react";

const TodoComponent = ({ todo }) => {
  // Each Todo

  return <li key={todo.key}>{todo.text}</li>;
};

export default TodoComponent;
