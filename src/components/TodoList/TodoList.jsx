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
        <h3>Available Todo items: {this.props.todos.length}</h3>
        <div className="custom-list">
          {this.props.todos.length ? (
            <ol>{this.getListItems()}</ol>
          ) : (
            <span className="empty-list-text">Wow! nothing in todo list</span>
          )}
        </div>
      </div>
    );
  }
}

export default TodoList;
