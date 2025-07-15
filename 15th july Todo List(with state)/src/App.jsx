import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  }
  return (
    <>
      <div className="App">
        <h1>My Simple To-Do List</h1>

        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Add a new to-do..."
          />
          <button onClick={handleAddTodo}>Add To-Do</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
