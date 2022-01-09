import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function TodoItemsRemaining() {
  const { todos } = useContext(TodosContext);

  const remaining = () => {
    return todos.filter((todo) => !todo.isComplete).length;
  };

  return <div>{remaining()} items remaining</div>;
}

export default TodoItemsRemaining;
