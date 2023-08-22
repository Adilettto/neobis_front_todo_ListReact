import React from "react";
import { useState } from "react";

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(todo.content);
  const handleToggle = () => {
    onToggle(todo);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedContent.trim() !== "") {
      onEdit(todo, editedContent);
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <div className={`todo-item ${todo.done ? "done" : ""}`}>
      <label>
        <input type="checkbox" checked={todo.done} onChange={handleToggle} />
        <span className={`bubble ${todo.category}`}></span>
      </label>

      <div className="todo-content">
        {isEditing ? (
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <span onClick={handleEdit}>{todo.content}</span>
        )}
      </div>

      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
