import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onEdit, onDelete }) => {
  return (
    <section className="todo-list">
      <h3>ToDo List</h3>
      <div className="list" id="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;    