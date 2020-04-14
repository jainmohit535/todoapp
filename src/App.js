import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  let todos = [
    { text: "Get some milk", id: 1 },
    { text: "Attend meeting", id: 2 },
    { text: "Order some food", id: 3 }
  ];

  return (
    <div class="cutom-body">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
