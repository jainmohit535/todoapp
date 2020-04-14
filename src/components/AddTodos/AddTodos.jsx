import React, { Component } from "react";
import "./AddTodos.css";

export default class Addtodos extends Component {
  state = { todoitem: "" };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ todoitem: "" });
    return this.props.addTodo(this.state.todoitem);
  };

  handleChange = e => {
    this.setState({ todoitem: e.target.value });
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor="todoitem" style={{ fontWeight: "bold" }}>
          Add new Todo
        </label>
        <br />
        <input
          type="text"
          name="todoitem"
          id="todoitem"
          className="custom-input"
          value={this.state.todoitem}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" className="submit" />
      </form>
    );
  }
}
