import React, { Component } from "react";
import TodoComponent from "../TodoComponent";
import "./TodoList.css";

class TodoList extends Component {
  state = {};
  render() {
    const listitems = this.props.todos.map((todo, index) => {
      return <TodoComponent todo={todo} key={index} />;
    });

    return (
      <div>
        <h3>Available Todo items</h3>

        <div className="custom-list">
          <ol>{listitems}</ol>
        </div>
      </div>
    );
  }
}

export default TodoList;
