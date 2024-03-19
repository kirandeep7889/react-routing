import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todos.css'; 

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div>
      <h2>Todos Page</h2>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
