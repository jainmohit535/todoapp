import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodos from "./components/AddTodos/AddTodos";

export default class App extends React.Component {
  state = {
    todos: []
  };

  addTodo = newtodo => {
    this.setState({ todos: [...this.state.todos, { text: newtodo }] });
  };

  handleDelete = value => {
    const newTodos = this.state.todos.filter(
      item => item.text.trim() !== value.trim()
    );

    console.log("this time", this.state.todos, newTodos);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div>
        <AddTodos addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
