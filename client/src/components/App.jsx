import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import NoTodos from "./NoTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodosContext } from "../context/TodosContext";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  const nameInputEl = useRef(null);
  const [todos, setTodos] = useState("");

  useEffect(() => {
    //console.log("useEffect is running");
    nameInputEl.current.focus();

    const cleanup = () => {
      // console.log("cleanning up");
    };

    return cleanup();
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/read").then((res) => setTodos(res.data));
  }, [todos]);

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <div className="todo-app">
        <div className="name-container">
          <h2>What is your name?</h2>
          <button onClick={() => console.log(nameInputEl)}>Get Ref</button>
          <form action="#">
            <input
              type="text"
              className="todo-input"
              ref={nameInputEl}
              placeholder="What is your name"
              value={name}
              onChange={handleInputName}
            />
          </form>
          <CSSTransition
            in={name.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <p className="name-label">Hello, {name}</p>
          </CSSTransition>
        </div>
        <h2>Todo App</h2>
        <TodoForm />
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={todos.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            {todos.length > 0 ? <TodoList /> : <NoTodos />}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
