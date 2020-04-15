import React, { Component } from "react";

const TodoComponent = props => {
  // Each Todo
  console.log(props);
  return (
    <li key={props.currentIndex}>
      <div style={{ padding: "5px" }}>
        <label>{props.todo.text}</label>
        <input
          type="button"
          value="X"
          onClick={() => props.handleClick(props.todo.text)}
          id={props.currentIndex}
          style={{ float: "right", marginRight: "20px", cursor: "pointer" }}
          title="delete todo"
        />
      </div>
    </li>
  );
};

export default TodoComponent;
