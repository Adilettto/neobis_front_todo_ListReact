
import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleTodoSubmit = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleTodoToggle = (todo) => {
    const updatedTodos = todos.map((t) =>
      t === todo ? { ...t, done: !t.done } : t
    );
    setTodos(updatedTodos);
  };

  const handleTodoEdit = (todo, newContent) => {
    const updatedTodos = todos.map((t) =>
      t === todo ? { ...t, content: newContent } : t
    );
    setTodos(updatedTodos);
  };

  const handleTodoDelete = (todo) => {
    const updatedTodos = todos.filter((t) => t !== todo);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Greeting />
      <TodoForm onTodoSubmit={handleTodoSubmit} />
      <TodoList
        todos={todos}
        onToggle={handleTodoToggle}
        onEdit={handleTodoEdit}
        onDelete={handleTodoDelete}
      />
    </div>
  );
}

export default App;
