import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoList from "./components/TodoList/TodoList";
import AddTodos from "./components/AddTodos/AddTodos";
import Login from "./components/Login/Login";

export default class App extends React.Component {
  state = {
    todos: []
  };

  addTodo = newtodo => {
    this.setState({
      todos: [
        ...this.state.todos,
        { text: newtodo, time: new Date().toString() }
      ]
    });
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
        <Header />
        <Login />
        {/* <AddTodos addTodo={this.addTodo} /> */}
        {/* <TodoList todos={this.state.todos} handleDelete={this.handleDelete} />
        <Footer /> */}
      </div>
    );
  }
}
