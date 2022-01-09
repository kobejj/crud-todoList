import React, { useContext } from "react";
import axios from "axios";
import { TodosContext } from "../context/TodosContext";

function TodoClearCompleted() {
  const { todos } = useContext(TodosContext);
  const deleteTodoCompleted = (todos) => {
    //console.log("delete completed clicked", todos);
    axios.delete(`http://localhost:5000/deleteCompleted`, { todos });
  };

  return (
    <div>
      <button onClick={() => deleteTodoCompleted(todos)}>
        Clear Checked Items
      </button>
    </div>
  );
}

export default TodoClearCompleted;
