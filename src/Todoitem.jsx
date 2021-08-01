import React from "react";
import "./Todoitem.css";

function Todoitem(props) {
  return (
    <div className="item-box">
      <h2 className="item-head">{props.title || "No Title"}</h2>
      <p>{props.des || "blank"}</p>
      <button
        onClick={() => {
          const newTodos = props.todos.filter((el, i) => i !== props.index);
          props.setTodos(newTodos);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Todoitem;
