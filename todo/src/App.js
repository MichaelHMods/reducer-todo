import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Reduce Todo</h1>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
