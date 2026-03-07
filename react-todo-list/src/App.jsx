import { useEffect, useState } from "react";

const STORAGE_KEY = "wdd430-react-todos";

function loadInitialTodos() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export default function App() {
  const [todos, setTodos] = useState(loadInitialTodos);
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;

    const newTodo = {
      id: crypto.randomUUID(),
      title: value,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((current) => [newTodo, ...current]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  const remainingCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Todo List</h1>
        <p className="subtitle">
          Simple WDD 430 Week 01 React introduction project.
        </p>
      </header>

      <main>
        <form className="todo-form" onSubmit={handleSubmit}>
          <label htmlFor="new-todo" className="sr-only">
            New todo
          </label>
          <input
            id="new-todo"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task…"
          />
          <button type="submit">Add</button>
        </form>

        <section className="todo-summary">
          <span>Total: {todos.length}</span>
          <span>Remaining: {remainingCount}</span>
        </section>

        {todos.length === 0 ? (
          <p className="empty-state">No todos yet. Add your first task 👍</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`todo-item ${
                  todo.completed ? "todo-item-completed" : ""
                }`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span>{todo.title}</span>
                </label>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}