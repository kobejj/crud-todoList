import React, { useContext } from "react";
import axios from "axios";
import { TodosContext } from "../context/TodosContext";

function TodoCompleteAllTodos() {
  const { todos } = useContext(TodosContext);

  const completeAllTodos = (todos) => {
    console.log("completeToDos clicked", todos);
    axios.put("http://localhost:5000/update/completedAll", {
      todos,
    });
  };
  return (
    <div>
      <button onClick={() => completeAllTodos(todos)}>Check All</button>
    </div>
  );
}

export default TodoCompleteAllTodos;
