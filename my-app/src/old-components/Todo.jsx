import React, { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState([
    'Fare la spesa',
    'Studiare React',
    'Preparare la cena',
    'Ordinare la casa',
  ]);
  const [newTask, setNewTask] = useState('');

  function addTaskHandler() {
    setTodos((prevTodos) => [...prevTodos, newTask]);
    setNewTask('');
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function removeTaskHandler(taskIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== taskIndex),
    );
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="button" onClick={() => removeTaskHandler(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Nuova task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={addTaskHandler}>Aggiungi task</button>
    </div>
  );
}
