import React, { Component } from "react";
import TodoComponent from "../TodoComponent";
import "./TodoList.css";

class TodoList extends Component {
  getListItems = () =>
    this.props.todos.map((todo, index) => {
      return (
        <TodoComponent
          todo={todo}
          currentIndex={index}
          key={index}
          handleClick={this.props.handleDelete}
        />
      );
    });

  render() {
    return (
      <div>
        <h3>Available Todo items</h3>
        <div className="custom-list">
          <ol>{this.getListItems()}</ol>
        </div>
      </div>
    );
  }
}

export default TodoList;
