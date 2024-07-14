function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    result.push(localStorage.getItem(localStorage.key(i)));
  }
  return result;
}

function TodoList({ todos, onTodoRemove }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => onTodoRemove(todo, index)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { fetchTodos, TodoList };
