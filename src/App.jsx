import "./App.css";
import React, { useState } from "react";
import Todoitem from "./Todoitem";
function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [des, setdes] = useState("");
  return (
    <div className="App">
      <div className="wrap-head">
      <img src="./icon.png" alt="icon" />
      <h1 className="heading">TODO-LIST</h1>
      </div>
      <div className="main">
        <div className="input-container">
          <span>Title</span>
          <input
            className="title"
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <span>Descreiption</span>
          <textarea
            className="description"
            type="text"
            onChange={(e) => {
              setdes(e.target.value);
            }}
            value={des}
          />
          <button
            className="btn"
            onClick={() => {
              setTodos([...todos, { value, des }]);
              setValue("");
              setdes("");
            }}
          >
            ADD TODO
          </button>
        </div>
        <div className="todo-container">
          <h2>Things to do :</h2>
          {todos.map((todo, index) => (
            <Todoitem
              key={index}
              title={todo.value}
              todos={todos}
              setTodos={setTodos}
              index={index}
              des={todo.des}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
