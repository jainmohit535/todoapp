import React from "react";

const TodoComponent = props => {
  // Each Todo
  return (
    <li key={props.currentIndex} title={`Added on ${props.todo.time}`}>
      <div style={{ padding: "5px" }}>
        <label>{props.todo.text} </label>
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
