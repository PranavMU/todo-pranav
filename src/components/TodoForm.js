import React, { useEffect, useRef, useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dt = props.edit ? props.edit.id : new Date().getTime();

    props.onSubmit({
      id: dt,
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-input-form">
        {props.edit ? (
          <>
            <input
              placeholder="Update todo"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="todo-input-edit"
              maxLength={300}
              autoComplete="off"
              id="saveButton"
            />
              
          </>
        ) : (
          <>
            <input
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input"
              ref={inputRef}
              maxLength={300}
              autoComplete="off"
            />
            <button
          type="submit"
          value="Add"
          className="delete-icon"
        >Add</button>
          </>
        )}
       
      </div>
    </form>
  );
};

export default TodoForm;