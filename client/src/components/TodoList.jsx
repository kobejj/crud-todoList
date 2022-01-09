import axios from "axios";
import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoCompleteAllTodos from "./TodoCompleteAllTodos";
import TodoClearCompleted from "./TodoClearCompleted";
//import { CSSTransition, TransitionGroup } from "react-transition-group";

function TodoList() {
  const { todos } = useContext(TodosContext);
  //console.log(todos);

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`);
  };

  const completeTodo = (id, isComplete) => {
    console.log("hi from completeTodo", `${id}`);
    axios.put("http://localhost:5000/update/completed", {
      id: id,
      isComplete: isComplete,
    });
  };

  const markAsEditing = (id) => {
    console.log("hi from markAsEditing", `${id}`);
    axios.put("http://localhost:5000/update/editing", {
      id: id,
    });
  };

  const updateTodo = (event, id) => {
    console.log("hi from updateTodo", `${id}`, `${event}`);
    axios.put("http://localhost:5000/update/todo", {
      id: id,
      title: event.target.value,
    });
  };

  const cancelEdit = (event, id) => {
    console.log("cancel edit", `${id}`, `${event}`);
    axios.put("http://localhost:5000/update/editingCancel", {
      id: id,
    });
  };

  return (
    <div>
      <div>
        {todos.map((todo, i) => {
          return (
            <ul key={todo._id}>
              <li className="todo-item-container">
                <input
                  type="checkbox"
                  onChange={() => completeTodo(todo._id, todo.isComplete)}
                  checked={todo.isComplete ? true : false}
                />
                {!todo.isEditing ? (
                  <div className="todo-item">
                    <span
                      onDoubleClick={() => markAsEditing(todo._id)}
                      className={`todo-item-label ${
                        todo.isComplete ? "line-through" : ""
                      }`}
                    >
                      {todo.title}
                    </span>
                  </div>
                ) : (
                  <input
                    type="text"
                    onBlur={(event) => updateTodo(event, todo._id)}
                    className="todo-item-input"
                    defaultValue={todo.title}
                    autoFocus
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        updateTodo(event, todo._id);
                      } else if (event.key === "Escape") {
                        cancelEdit(event, todo._id);
                      }
                    }}
                  />
                )}
                <button onClick={() => deleteTodo(todo._id)}>delete</button>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="check-all-container">
        <TodoCompleteAllTodos />
        <TodoItemsRemaining />
      </div>
      <div className="other-buttons-container">
        <TodoClearCompleted />
      </div>
    </div>
  );
}

export default TodoList;
