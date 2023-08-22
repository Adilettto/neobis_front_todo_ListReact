import React from 'react';
import { useState } from 'react';

const TodoForm = ({onTodoSubmit}) => {
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('business'); // Default category
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (content.trim() === '') {
        return; 
      }
  
      const newTodo = {
        content: content,
        category: category,
      };
  
      onTodoSubmit(newTodo); 
      
      setContent(''); 
    };

  return (
    <section className="create-todo">
    <h3>CREATE A TODO</h3>

    <form id="new-todo-form" onSubmit={handleSubmit}>
        <h4>What's on your todo list?</h4>
        <input 
        type="text" 
        name="content" 
        id="content" 
        placeholder="e.g. complete the project"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />

        <h4>Pick a category</h4>
        <div className="options">
            <label>
                <input 
                type="radio" 
                name="category" 
                id="category1" 
                value="business"
                checked={category === "business"}
                onChange={() => setCategory("business")}
                />
                <span className="bubble business"></span>
                <div>Business</div>

            </label>

            <label>
                <input 
                type="radio" 
                name="category" 
                id="category2" 
                value="personal"
                checked={category === "personal"}
                onChange={() => setCategory("personal")}
                />
                <span className="bubble personal"></span>
                <div>Personal</div>
            </label>
        </div>

        <input type="submit" value="Add todo"/>
    </form>
</section>
  )
}

export default TodoForm