import React, { Component } from "react";
import "./AddTodos.css";
import { withRouter } from "react-router-dom";

class Addtodos extends Component {
  state = { todoitem: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    let currentTodoItem = this.state.todoitem;

    if (Number(currentTodoItem) || currentTodoItem.trim() === "") {
      alert(
        "Please enter valid string, only numbers and empty string is not allowed."
      );
    } else {
      this.setState({ todoitem: "" });
      return this.props.addTodo(this.state.todoitem);
    }
  };

  handleChange = (e) => {
    this.setState({ todoitem: e.target.value });
  };

  handleSelectChange = (e) => {
    alert("selection change");
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todoitem"
          id="todoitem"
          className="custom-input"
          placeholder="Add new Todo"
          autoFocus
          value={this.state.todoitem}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" className="submit" />
      </form>
    );
  }
}

export default withRouter(Addtodos);
