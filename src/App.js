import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodos from "./components/AddTodos/AddTodos";

export default class App extends React.Component {
  state = {
    todos: [
      { text: "Get some milk" },
      { text: "Attend meeting" },
      { text: "Order some food" }
    ]
  };

  addTodo = newtodo => {
    this.setState({ todos: [...this.state.todos, { text: newtodo }] });
  };

  render() {
    return (
      <div>
        <AddTodos addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
