import React, { useState } from "react";
//import { TodosContext } from "../context/TodosContext";
import axios from "axios";

function TodoForm() {
  //const { todos, setTodos } = useContext(TodosContext);
  const [todoInput, setTodoInput] = useState("");

  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    console.log("add todo", todoInput);

    if (todoInput.trim().length === 0) {
      return;
    }

    axios.post("http://localhost:5000/input", {
      title: todoInput,
    });

    setTodoInput("");
  };

  return (
    <div>
      <form action="#" onSubmit={addTodo}>
        <input
          type="text"
          value={todoInput}
          onChange={handleInput}
          className="todo-input"
          placeholder="what do you need to do?"
        />
      </form>
    </div>
  );
}

export default TodoForm;

// const addToList = () => {
//   console.log("todo is input", todo);
//   axios.post("http://localhost:5000/insert", {
//     todo: todo,
//   });
// };
