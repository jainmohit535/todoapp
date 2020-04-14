import React, { Component } from "react";
import TodoComponent from "./TodoComponent";

class TodoList extends Component {
  state = {};
  render() {
    const listitems = this.props.todos.map(todo => {
      return <TodoComponent todo={todo} />;
    });
    return <ul>{listitems}</ul>;
  }
}

export default TodoList;
