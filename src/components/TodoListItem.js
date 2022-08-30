import React from "react";
import TodoForm from "./TodoForm";
import "./Todo.css";

function TodoListItem({
  todo,
  completeTodo,
  removeTodo,
  submitUpdate,
  edit,
  setEdit,
}) {
  return (
    <>
      <div className="todo-list-item">
        <div className="todo-mark-icon">

        </div>

        <div className="todo-item">
          {edit.id === todo.id ? (
            <TodoForm edit={edit} onSubmit={submitUpdate} />
          ) : (
            <p> {todo.text} </p>
          )}
        </div>
      </div>
      <div className="todo-icons">
        {edit.id ? (
          <button
            name="Save"
            type="submit"
            value="Save"

            className="edit-icon"
          >{edit.id ? "Save" : "Edit"}</button>
        ) : <button
          name="Edit"
          type="submit"
          value="Edit"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        >{"Edit"}</button>}
        <button
          type="submit"
          value="Remove"
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        >Remove</button>
      </div>
    </>
  );
}

TodoListItem.defaultProps = {
  edit: { id: null, value: "" },
};

export default TodoListItem;
