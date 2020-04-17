import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoList from "./components/TodoList/TodoList";
import AddTodos from "./components/AddTodos/AddTodos";
import Login from "./components/Login/Login";
import ErrorBoundary from "./components/ErrorBoundries";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (newtodo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { text: newtodo, time: new Date().toString() },
      ],
    });
  };

  handleDelete = (value) => {
    const newTodos = this.state.todos.filter(
      (item) => item.text.trim() !== value.trim()
    );

    console.log("this time", this.state.todos, newTodos);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <>
        <Router basename="/todo">
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={Login} />

              <Route exact path="/login">
                <Header />
                <Login />
              </Route>
              <Route exact path="/todoapp">
                <Header />
                <AddTodos addTodo={this.addTodo} />
                <TodoList
                  todos={this.state.todos}
                  handleDelete={this.handleDelete}
                />
                <Footer />
              </Route>
              <Route exact path="/abc">
                <AddTodos addTodo={this.addTodo} />
              </Route>
              <Route path="*">
                <div>No routes found!!</div>
              </Route>
            </Switch>
          </ErrorBoundary>
        </Router>
      </>
    );
  }
}
