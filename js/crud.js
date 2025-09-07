import { changeTodos, todos } from "./todos.js";

// Get Todo
export function getTodo(id) {
  return todos.find((el) => el.id === id);
}

// Delete Todo
export function deleteTodo(id) {
  const result = todos.filter((el) => el.id != id);
  changeTodos(result);
}

// Add Todo
export function addTodo(title, description = "") {
  if (!title) return;

  const newTodo = {
    title,
    description,
    isCompleted: false,
    id: Date.now(),
  };

  todos.push(newTodo);
  changeTodos(todos);
}

// Edit Todo
export function editTodo(id, newTitle, newDescription) {
  const updated = todos.map((todo) =>
    todo.id == id
      ? {
          ...todo,
          title: newTitle ?? todo.title,
          description: newDescription ?? todo.description,
        }
      : todo
  );

  changeTodos(updated);
}
