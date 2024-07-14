import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import { TodoList, fetchTodos } from "./components/TodoList";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const todos = fetchTodos();
  const [todos, setTodos] = useState(fetchTodos());

  const addTodo = (todo) => {
    localStorage.setItem(todo, todo);
    // setTodos(fetchTodos())
    // setTodos([...todos, inputText])
    setTodos((currentTodos) => {
      return [...currentTodos, todo];
    });
    // setInputText("");
  };

  const removeTodo = (todo, index) => {
    console.log("remove", todo, index);
    // setTodos(fetchTodos());
    const result = todos.filter((todoItem) => todoItem !== todo);
    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} />
    </div>
  );
}

export default App;
