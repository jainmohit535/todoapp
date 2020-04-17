import React, { Component } from "react";
import TodoComponent from "../TodoComponent";
import "./TodoList.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

class TodoList extends Component {
  state = { todos: [] };

  componentDidMount() {
    axios.get("http://localhost:3000/todos").then((data) => {
      console.log("intial data from api", data.data);
      this.setState({ todos: data.data });
    });
  }

  getListItems = () =>
    this.state.todos.map((todo, index) => {
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
        <NavLink
          to="/abc"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Add todo navlink
        </NavLink>

        <h3>Available Todo items: {this.state.todos.length}</h3>
        <div className="custom-list">
          {this.state.todos.length ? (
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
